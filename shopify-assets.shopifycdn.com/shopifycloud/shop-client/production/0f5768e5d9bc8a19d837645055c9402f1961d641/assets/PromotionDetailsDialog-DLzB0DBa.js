import{o as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{n,t as r}from"./jsx-runtime-CSuk6psM.js";import{a as i}from"./useQuery-w4WLtFjn.js";import{x as a}from"./components-D-pkByQq.js";import{r as o}from"./useMonorail-IjCFdpja.js";import{d as s}from"./utils-CephF-9h.js";import{c,o as ee,u as te}from"./useUniversalProductUrlEnabled-8n-uns4N.js";import{A as l,D as u,O as ne}from"./ProductCardAddToCartButton-BbY_wxRk.js";import{n as re}from"./types-Bl7ZDWSI.js";import{t as ie}from"./useRouteHandle-W2YDvMqC.js";import{t as ae}from"./cn-DW2TDMXS.js";import{t as oe}from"./Button-CEcABf42.js";import{t as d}from"./Text-C4p0K6aP.js";import{t as f}from"./breakpoints-CvLotN6b.js";import{n as se}from"./types-DLCaN95-.js";import{t as ce}from"./Image-BrewKKFf.js";import{t as le}from"./bundle.esm-CQF4cMWo.js";import{t as ue}from"./Dialog-rCCuGv8D.js";var de=e(t(),1),p=n(),m=r(),h=40,fe=e=>{let t=(0,p.c)(17),{mediaSource:n,accessibilityLabel:r}=e;if(!n||n.__typename===``)return null;switch(n.__typename){case`Image`:case`Animation`:{if(!n.url)return null;let e=n.width??h,i=n.height??h,a=(n.__typename===`Image`?n.altText:null)??r??``,o;t[0]!==i||t[1]!==e?(o={width:e,height:i,objectFit:`contain`},t[0]=i,t[1]=e,t[2]=o):o=t[2];let s;return t[3]!==n.url||t[4]!==a||t[5]!==o?(s=(0,m.jsx)(ce,{src:n.url,alt:a,style:o}),t[3]=n.url,t[4]=a,t[5]=o,t[6]=s):s=t[6],s}case`Video`:{var i;if(!n.url)return null;let e=n.width??h,a=n.height??h,o=((i=n.previewImage)==null?void 0:i.url)??void 0,s;t[7]!==a||t[8]!==e?(s={width:e,height:a,objectFit:`cover`},t[7]=a,t[8]=e,t[9]=s):s=t[9];let c;return t[10]!==r||t[11]!==a||t[12]!==n.url||t[13]!==o||t[14]!==s||t[15]!==e?(c=(0,m.jsx)(`video`,{"data-testid":`promotion-media-video`,src:n.url,poster:o,width:e,height:a,autoPlay:!0,muted:!0,playsInline:!0,"aria-label":r,style:s}),t[10]=r,t[11]=a,t[12]=n.url,t[13]=o,t[14]=s,t[15]=e,t[16]=c):c=t[16],c}default:return null}},g={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`PromotionMedia`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`Media`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`platform`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`layout`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`resizeMode`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`source`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`Image`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`url`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`altText`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`width`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`height`},arguments:[],directives:[]}]}},{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`Video`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`url`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`width`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`height`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`previewImage`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`url`},arguments:[],directives:[]}]}}]}},{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`Animation`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`url`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`loop`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`width`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`height`},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:335}};g.loc.source={body:`fragment PromotionMedia on Media {
  platform
  layout
  resizeMode
  source {
    ... on Image {
      url
      altText
      width
      height
    }
    ... on Video {
      url
      width
      height
      previewImage {
        url
      }
    }
    ... on Animation {
      url
      loop
      width
      height
    }
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};function _(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){_(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){_(e,t)}),e.definitions&&e.definitions.forEach(function(e){_(e,t)})}var v={};(function(){g.definitions.forEach(function(e){if(e.name){var t=new Set;_(e,t),v[e.name.value]=t}})})();function y(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function b(e,t){var n={kind:e.kind,definitions:[y(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=v[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(v[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=y(e,t);r&&n.definitions.push(r)}),n}b(g,`PromotionMedia`);var x={kind:`Document`,definitions:[{kind:`OperationDefinition`,operation:`query`,name:{kind:`Name`,value:`PromotionByHandle`},variableDefinitions:[{kind:`VariableDefinition`,variable:{kind:`Variable`,name:{kind:`Name`,value:`handle`}},type:{kind:`NonNullType`,type:{kind:`NamedType`,name:{kind:`Name`,value:`String`}}},directives:[]},{kind:`VariableDefinition`,variable:{kind:`Variable`,name:{kind:`Name`,value:`screenName`}},type:{kind:`NonNullType`,type:{kind:`NamedType`,name:{kind:`Name`,value:`String`}}},directives:[]}],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`promotion`},arguments:[{kind:`Argument`,name:{kind:`Name`,value:`handle`},value:{kind:`Variable`,name:{kind:`Name`,value:`handle`}}}],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`handle`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`display`},arguments:[{kind:`Argument`,name:{kind:`Name`,value:`screenName`},value:{kind:`Variable`,name:{kind:`Name`,value:`screenName`}}}],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`PromotionsModal`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`componentId`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`title`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`description`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`subtitle`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`tagline`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`image`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`url`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`altText`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`width`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`height`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`backgroundMedia`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`platform`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`layout`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`source`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`Image`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`url`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`altText`},arguments:[],directives:[]}]}}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`mediaBadge`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`PromotionMedia`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`richDescription`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`segments`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`text`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`traits`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`fontVariant`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`fontColor`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`blockHints`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`backgroundStyle`},arguments:[],directives:[]}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`displayHints`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`title`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`textVariant`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`textColor`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`subtitle`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`textVariant`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`textColor`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`action`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`textVariant`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`textColor`},arguments:[],directives:[]}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`action`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`variant`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`label`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`url`},arguments:[],directives:[]}]}}]}}]}}]}}]}}],loc:{start:0,end:1217}};x.loc.source={body:`#import "./PromotionMediaFragment.graphql"

query PromotionByHandle($handle: String!, $screenName: String!) {
  promotion(handle: $handle) {
    handle
    display(screenName: $screenName) {
      ... on PromotionsModal {
        componentId
        title
        description
        subtitle
        tagline
        image {
          url
          altText
          width
          height
        }
        backgroundMedia {
          platform
          layout
          source {
            ... on Image {
              url
              altText
            }
          }
        }
        mediaBadge {
          ...PromotionMedia
        }
        richDescription {
          segments {
            text
            traits
            fontVariant
            fontColor
          }
          blockHints {
            backgroundStyle
          }
        }
        displayHints {
          title {
            textVariant
            textColor
          }
          subtitle {
            textVariant
            textColor
          }
          action {
            textVariant
            textColor
          }
        }
        action {
          variant
          label
          url
        }
      }
    }
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var S={};function pe(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!S[t]&&(S[t]=!0,!0)})}x.definitions=x.definitions.concat(pe(g.definitions));function C(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){C(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){C(e,t)}),e.definitions&&e.definitions.forEach(function(e){C(e,t)})}var w={};(function(){x.definitions.forEach(function(e){if(e.name){var t=new Set;C(e,t),w[e.name.value]=t}})})();function T(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function E(e,t){var n={kind:e.kind,definitions:[T(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=w[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(w[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=T(e,t);r&&n.definitions.push(r)}),n}E(x,`PromotionByHandle`);var me=f.xsm,he=f.sm,ge=150,D=e=>{var t,n,r,s,f;let h=(0,p.c)(46),{open:g,onOpenChange:_,promotionHandle:v}=e,y=a(),{reportEvent:b}=o(),{ref:S,width:pe}=le(),C=pe===void 0?0:pe,w;bb0:{if(C>0&&C<me){w=l.APP;break bb0}if(C>0&&C<he){w=l.WEB_MOBILE;break bb0}w=l.WEB}let T=w,{pageType:E}=ie(),D;h[0]===v?D=h[1]:(D={handle:v,screenName:`promotion_details`},h[0]=v,h[1]=D);let O=!g,k;h[2]!==D||h[3]!==O?(k={variables:D,skip:O,fetchPolicy:`cache-and-network`},h[2]=D,h[3]=O,h[4]=k):k=h[4];let{data:ye}=i(x,k),A=ye==null||(t=ye.promotion)==null?void 0:t.display,j=(A==null?void 0:A.__typename)===`PromotionsModal`?A:void 0,M=j==null||(n=j.displayHints)==null||(n=n.title)==null?void 0:n.textVariant,N;h[5]===M?N=h[6]:(N=ne(M,`sectionTitle`),h[5]=M,h[6]=N);let P=N,F=j==null||(r=j.displayHints)==null||(r=r.title)==null?void 0:r.textColor,I;h[7]===F?I=h[8]:(I=u(F,`text-text`,c),h[7]=F,h[8]=I);let be=I,L=j==null||(s=j.displayHints)==null||(s=s.subtitle)==null?void 0:s.textVariant,R;h[9]===L?R=h[10]:(R=ne(L,`caption`),h[9]=L,h[10]=R);let z=R,B=j==null||(f=j.displayHints)==null||(f=f.subtitle)==null?void 0:f.textColor,V;h[11]===B?V=h[12]:(V=u(B,`text-text-secondary`,c),h[11]=B,h[12]=V);let H=V,U=j==null?void 0:j.backgroundMedia,W;h[13]!==T||h[14]!==U?(W=_e(U,T),h[13]=T,h[14]=U,h[15]=W):W=h[15];let G=W,K,q;h[16]!==g||h[17]!==v||h[18]!==b?(K=()=>{g&&b({schemaId:`shop_app_interaction/2.5`,payload:{interactionType:se.PromotionDetailsSheetShown,interactionValue:v,platformVersion:`web`,deviceId:``,appVersion:``}})},q=[g,v,b],h[16]=g,h[17]=v,h[18]=b,h[19]=K,h[20]=q):(K=h[19],q=h[20]),(0,de.useEffect)(K,q);let J;h[21]!==j||h[22]!==y||h[23]!==_||h[24]!==E||h[25]!==v||h[26]!==b?(J=()=>{var e;let t=[re.Products,re.Cart];b({schemaId:`shop_app_interaction/2.5`,payload:{interactionType:se.PromotionDetailsDialogActionTapped,interactionValue:v,platformVersion:`web`,deviceId:``,appVersion:``}}),j!=null&&(e=j.action)!=null&&e.url&&!t.includes(E)&&y(j.action.url),_(!1)},h[21]=j,h[22]=y,h[23]=_,h[24]=E,h[25]=v,h[26]=b,h[27]=J):J=h[27];let Y=J;if(!j)return null;let X;if(h[28]!==G||h[29]!==S||h[30]!==j||h[31]!==Y||h[32]!==H||h[33]!==z||h[34]!==be||h[35]!==P){var xe;X=j?(0,m.jsxs)(`div`,{ref:S,className:`flex flex-col`,children:[(xe=j.image)!=null&&xe.url?(0,m.jsx)(`div`,{className:`mb-space-24 flex justify-center`,children:(0,m.jsx)(ce,{src:j.image.url,alt:j.image.altText??``,className:`object-contain`,width:j.image.width??ge,height:j.image.height??ge})}):null,(0,m.jsxs)(`div`,{className:`px-screen-margin pb-space-24`,children:[j.tagline&&(0,m.jsx)(`div`,{className:`mb-space-12 inline-flex self-start rounded-radius-6 bg-bg-overlay-fixed-dark-10 px-space-6 py-space-2`,children:(0,m.jsx)(d,{variant:`caption`,className:ae(G?`text-text-secondary-inverse`:`text-text-secondary`),children:j.tagline})}),(0,m.jsxs)(`div`,{className:j.action?`mb-space-24`:`mb-0`,children:[(0,m.jsxs)(`div`,{className:`mb-space-24`,children:[j.title&&(0,m.jsx)(d,{variant:P,className:be,children:j.title}),j.richDescription&&j.richDescription.length>0&&(0,m.jsx)(`div`,{className:`flex flex-col`,children:j.richDescription.map(ve)})]}),j.subtitle&&(0,m.jsx)(d,{variant:z,className:H,children:j.subtitle})]}),j.action&&(0,m.jsx)(oe,{variant:ee[j.action.variant??te.SECONDARY],size:`l`,text:j.action.label??void 0,onClick:Y,className:`w-full`})]})]}):null,h[28]=G,h[29]=S,h[30]=j,h[31]=Y,h[32]=H,h[33]=z,h[34]=be,h[35]=P,h[36]=X}else X=h[36];let Se=X,Z=G?`url(${G}) center / cover no-repeat`:void 0,Q;if(h[37]!==j.mediaBadge||h[38]!==j.title){var Ce;Q=(Ce=j.mediaBadge)!=null&&Ce.source?(0,m.jsx)(`div`,{"aria-label":j.title??void 0,children:(0,m.jsx)(fe,{mediaSource:j.mediaBadge.source,accessibilityLabel:j.title??void 0})}):void 0,h[37]=j.mediaBadge,h[38]=j.title,h[39]=Q}else Q=h[39];let $;return h[40]!==Se||h[41]!==_||h[42]!==g||h[43]!==Z||h[44]!==Q?($=(0,m.jsx)(ue,{open:g,onOpenChange:_,autoHeight:!0,content:Se,contentWrapperClassName:`px-0`,backgroundStyle:Z,titleElement:Q,headerContentClassName:`items-start`,floating:!0}),h[40]=Se,h[41]=_,h[42]=g,h[43]=Z,h[44]=Q,h[45]=$):$=h[45],$},_e=(e,t)=>{var n;let r=e==null||(n=e.find(e=>{var n;return(e==null?void 0:e.platform)===t&&(e==null||(n=e.source)==null?void 0:n.__typename)===`Image`&&e.source.url}))==null?void 0:n.source;return(r==null?void 0:r.__typename)===`Image`?r.url??void 0:void 0},O=e=>{let t=(0,p.c)(4),{item:n}=e;if(!n.segments)return null;let r;t[0]===n.segments?r=t[1]:(r=n.segments.map(k),t[0]=n.segments,t[1]=r);let i;return t[2]===r?i=t[3]:(i=(0,m.jsx)(d,{as:`p`,children:r}),t[2]=r,t[3]=i),i};function ve(e,t){return e?(0,m.jsx)(O,{item:e},t):null}function k(e,t){var n,r,i;if(!e)return null;let a=(n=e.traits)==null?void 0:n.includes(s.BOLD),o=(r=e.traits)==null?void 0:r.includes(s.STRIKETHROUGH),ee=(i=e.traits)==null?void 0:i.includes(s.UNDERLINE),te=u(e.fontColor,`text-text-secondary`,c);return(0,m.jsx)(d,{as:`span`,variant:`bodySmall`,className:ae(te,a&&`font-bold`,o&&`line-through`,ee&&`underline`),children:e.text},t)}export{g as n,fe as r,D as t};
//# sourceMappingURL=PromotionDetailsDialog-DLzB0DBa.js.map