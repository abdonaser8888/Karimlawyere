import os
import sys

if sys.stdout is None:
    sys.stdout = open(os.devnull, 'w')
if sys.stderr is None:
    sys.stderr = open(os.devnull, 'w')

import re
import mimetypes
import urllib.parse
import urllib.request
from http.server import ThreadingHTTPServer, BaseHTTPRequestHandler

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
HOST = '127.0.0.1'
PORT = 8080

mimetypes.init()
mimetypes.add_type('application/javascript', '.js')
mimetypes.add_type('application/javascript', '.mjs')
mimetypes.add_type('text/css', '.css')
mimetypes.add_type('application/json', '.json')
mimetypes.add_type('font/woff2', '.woff2')
mimetypes.add_type('image/png', '.png')
mimetypes.add_type('image/jpeg', '.jpg')
mimetypes.add_type('image/jpeg', '.jpeg')
mimetypes.add_type('image/webp', '.webp')
mimetypes.add_type('image/svg+xml', '.svg')

class ShopArchiveHandler(BaseHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        clean_path = parsed.path
        if 'graphql' in clean_path:
            graphql_file = os.path.join(BASE_DIR, 'shop.com', 'web', 'api', 'graphql.html')
            if os.path.exists(graphql_file):
                with open(graphql_file, 'rb') as f:
                    data = f.read()
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Content-Length', str(len(data)))
                self.end_headers()
                self.wfile.write(data)
                return
            else:
                resp = b'{"data":{}}'
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Content-Length', str(len(resp)))
                self.end_headers()
                self.wfile.write(resp)
                return

        self.send_response(204)
        self.end_headers()

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        clean_path = urllib.parse.unquote(parsed.path)

        # Route root or comfrt page
        if clean_path in ('', '/', '/m/comfrt', '/m/comfrt/', '/m/comfrt.html'):
            html_path = os.path.join(BASE_DIR, 'shop.com', 'm', 'comfrt.html')
            if os.path.exists(html_path):
                with open(html_path, 'r', encoding='utf-8', errors='ignore') as f:
                    html_content = f.read()

                # 1. Strip SRI integrity attributes so local files load without integrity errors
                html_content = re.sub(r'\s+integrity="[^"]*"', '', html_content)
                html_content = re.sub(r'"integrity"\s*:\s*\{[^}]*\}', '"integrity":{}', html_content)

                # 2. Rewrite remote CDN domains to local paths
                html_content = html_content.replace('https://shopify-assets.shopifycdn.com', '/shopify-assets.shopifycdn.com')
                html_content = html_content.replace('https://cdn.shopify.com', '/cdn.shopify.com')
                html_content = html_content.replace('https://shop.com', '')

                body = html_content.encode('utf-8')
                self.send_response(200)
                self.send_header('Content-Type', 'text/html; charset=utf-8')
                self.send_header('Content-Length', str(len(body)))
                self.end_headers()
                self.wfile.write(body)
                return

        # API stubs & Telemetry
        if 'graphql' in clean_path:
            graphql_file = os.path.join(BASE_DIR, 'shop.com', 'web', 'api', 'graphql.html')
            if os.path.exists(graphql_file):
                with open(graphql_file, 'rb') as f:
                    data = f.read()
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Content-Length', str(len(data)))
                self.end_headers()
                self.wfile.write(data)
                return
            else:
                resp = b'{"data":{}}'
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Content-Length', str(len(resp)))
                self.end_headers()
                self.wfile.write(resp)
                return

        if any(term in clean_path for term in ('monorail', 'otlp', 'collect', 'analytics')):
            self.send_response(204)
            self.end_headers()
            return

        # Map to local disk file
        rel_path = clean_path.lstrip('/')
        disk_path = os.path.join(BASE_DIR, rel_path.replace('/', os.sep))

        file_to_serve = None
        if os.path.isfile(disk_path):
            file_to_serve = disk_path
        elif os.path.isfile(disk_path + '#'):
            file_to_serve = disk_path + '#'
        elif disk_path.endswith('#') and os.path.isfile(disk_path[:-1]):
            file_to_serve = disk_path[:-1]

        if file_to_serve:
            mime, _ = mimetypes.guess_type(file_to_serve)
            if file_to_serve.endswith('.js'):
                mime = 'application/javascript'
            elif file_to_serve.endswith('.css') or file_to_serve.endswith('.css#'):
                mime = 'text/css'
            elif not mime:
                mime = 'application/octet-stream'

            try:
                with open(file_to_serve, 'rb') as f:
                    data = f.read()

                # Rewrite in CSS & JS to ensure internal references are local
                if mime == 'text/css':
                    data = data.replace(b'https://shopify-assets.shopifycdn.com', b'/shopify-assets.shopifycdn.com')
                    data = data.replace(b'https://cdn.shopify.com', b'/cdn.shopify.com')
                elif mime == 'application/javascript':
                    data = data.replace(b'https://shopify-assets.shopifycdn.com', b'/shopify-assets.shopifycdn.com')
                    data = data.replace(b'https://cdn.shopify.com', b'/cdn.shopify.com')

                self.send_response(200)
                self.send_header('Content-Type', mime)
                self.send_header('Content-Length', str(len(data)))
                self.end_headers()
                self.wfile.write(data)
                return
            except Exception as e:
                self.send_error(500, str(e))
                return

        # Fallback fetch for assets not in the zip
        if rel_path.startswith(('cdn.shopify.com', 'shopify-assets.shopifycdn.com')):
            remote_url = 'https://' + rel_path
            if parsed.query:
                remote_url += '?' + parsed.query
            try:
                req = urllib.request.Request(
                    remote_url,
                    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
                )
                with urllib.request.urlopen(req, timeout=3) as resp:
                    data = resp.read()
                    content_type = resp.headers.get('Content-Type', 'application/octet-stream')
                    try:
                        os.makedirs(os.path.dirname(disk_path), exist_ok=True)
                        with open(disk_path, 'wb') as cf:
                            cf.write(data)
                    except Exception:
                        pass

                    self.send_response(200)
                    self.send_header('Content-Type', content_type)
                    self.send_header('Content-Length', str(len(data)))
                    self.end_headers()
                    self.wfile.write(data)
                    return
            except Exception:
                pass

        self.send_error(404, f"File not found: {clean_path}")

    def log_message(self, format, *args):
        sys.stderr.write(f"[{self.log_date_time_string()}] {args[0]} {args[1]} -> {args[2]}\n")
        sys.stderr.flush()

if __name__ == '__main__':
    server = ThreadingHTTPServer((HOST, PORT), ShopArchiveHandler)
    print(f"Shop Local Server running at http://{HOST}:{PORT}/", flush=True)
    print(f"Direct link: http://{HOST}:{PORT}/m/comfrt", flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("Stopping server...", flush=True)
        server.server_close()
