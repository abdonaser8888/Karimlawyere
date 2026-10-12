import{n as e}from"./jsx-runtime-CSuk6psM.js";import{a as t}from"./useQuery-w4WLtFjn.js";import{n,r}from"./AuthenticationProvider-B-Yrcpxk.js";import{t as i}from"./use-hydrated-CHsfTLOs.js";var a=e(),o={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`PayAddressFragment`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`PayAddress`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`uuid`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`address`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`city`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`phone`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`company`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`country`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`address1`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`address2`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`addressLineComponents`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`additionalInformation`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`district`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`streetName`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`streetNumber`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`subdistrict`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`zoneCode`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`lastName`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`firstName`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`formatted`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`postalCode`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`userPreferred`},arguments:[],directives:[]}]}}],loc:{start:0,end:359}};o.loc.source={body:`fragment PayAddressFragment on PayAddress {
  id
  uuid
  address {
    city
    phone
    company
    country
    address1
    address2
    addressLineComponents {
      additionalInformation
      district
      streetName
      streetNumber
      subdistrict
    }
    zoneCode
    lastName
    firstName
    formatted
    postalCode
  }
  userPreferred
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};function s(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){s(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){s(e,t)}),e.definitions&&e.definitions.forEach(function(e){s(e,t)})}var c={};(function(){o.definitions.forEach(function(e){if(e.name){var t=new Set;s(e,t),c[e.name.value]=t}})})();function l(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function u(e,t){var n={kind:e.kind,definitions:[l(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=c[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(c[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=l(e,t);r&&n.definitions.push(r)}),n}u(o,`PayAddressFragment`);var d={kind:`Document`,definitions:[{kind:`OperationDefinition`,operation:`query`,name:{kind:`Name`,value:`PayAddressesQuery`},variableDefinitions:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`payAddresses`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`nodes`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`PayAddressFragment`},directives:[]}]}}]}}]}}],loc:{start:0,end:157}};d.loc.source={body:`#import "../../../data/fragments/PayAddressFragment.graphql"

query PayAddressesQuery {
  payAddresses {
    nodes {
      ...PayAddressFragment
    }
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var f={};function p(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!f[t]&&(f[t]=!0,!0)})}d.definitions=d.definitions.concat(p(o.definitions));function m(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){m(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){m(e,t)}),e.definitions&&e.definitions.forEach(function(e){m(e,t)})}var h={};(function(){d.definitions.forEach(function(e){if(e.name){var t=new Set;m(e,t),h[e.name.value]=t}})})();function g(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function _(e,t){var n={kind:e.kind,definitions:[g(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=h[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(h[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=g(e,t);r&&n.definitions.push(r)}),n}_(d,`PayAddressesQuery`);function v(e){let o=(0,a.c)(18),s;o[0]===e?s=o[1]:(s=e===void 0?{}:e,o[0]=e,o[1]=s);let{fetchPolicy:c,skip:l,ssr:u}=s,f=l!==void 0&&l,p=i(),{userAuthState:m,identityDataLoading:h}=n(),g=!u&&!p,_=f||g||h||m===r.Anonymous,v=c||`cache-and-network`,b;o[2]!==_||o[3]!==v?(b={skip:_,fetchPolicy:v},o[2]=_,o[3]=v,o[4]=b):b=o[4];let{data:x,loading:S,refetch:C}=t(d,b),w;bb0:{if(!x){let e;o[5]===Symbol.for(`react.memo_cache_sentinel`)?(e={addresses:[],preferredAddress:void 0},o[5]=e):e=o[5],w=e;break bb0}let e;o[6]===x.payAddresses.nodes?e=o[7]:(e=x.payAddresses.nodes??[],o[6]=x.payAddresses.nodes,o[7]=e);let t=e,n;o[8]===t?n=o[9]:(n=t.find(y),o[8]=t,o[9]=n);let r=n,i;o[10]!==t||o[11]!==r?(i={addresses:t,preferredAddress:r},o[10]=t,o[11]=r,o[12]=i):i=o[12],w=i}let{addresses:T,preferredAddress:E}=w,D=g||!f&&S,O;return o[13]!==T||o[14]!==E||o[15]!==C||o[16]!==D?(O={loading:D,refetch:C,addresses:T,preferredAddress:E},o[13]=T,o[14]=E,o[15]=C,o[16]=D,o[17]=O):O=o[17],O}function y(e){return e.userPreferred}export{o as n,v as t};
//# sourceMappingURL=usePayAddresses-BIYlqnmI.js.map