import{a as e,o as t}from"./ShopCashIncentiveFragment-DnUntjyt.js";var n={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`BrandSettings`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`BrandSettings`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`colors`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`primary`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`secondary`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`secondaryText`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`statusBarStyle`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`logoAverage`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`logoDominant`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`coverDominant`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`logos`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`logoImage`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]},{kind:`Field`,name:{kind:`Name`,value:`thumbhash`},arguments:[],directives:[]}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`headerTheme`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`coverImage`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]},{kind:`Field`,name:{kind:`Name`,value:`thumbhash`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`__typename`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`thumbnailImage`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]},{kind:`Field`,name:{kind:`Name`,value:`thumbhash`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`__typename`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`wordmark`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]},{kind:`Field`,name:{kind:`Name`,value:`__typename`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`videoUrl`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`startingScrimColor`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`endingScrimColor`},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:612}};n.loc.source={body:`#import "./ReducedImageFragment.graphql"

fragment BrandSettings on BrandSettings {
  id
  colors {
    id
    primary
    secondary
    secondaryText
    statusBarStyle
    logoAverage
    logoDominant
    coverDominant
  }
  logos {
    id
    logoImage {
      ...ReducedImage
      thumbhash
    }
  }
  headerTheme {
    id
    coverImage {
      ...ReducedImage
      thumbhash
      __typename
    }
    thumbnailImage {
      ...ReducedImage
      thumbhash
      __typename
    }
    wordmark {
      ...ReducedImage
      __typename
    }
    videoUrl
    startingScrimColor
    endingScrimColor
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var r={};function i(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!r[t]&&(r[t]=!0,!0)})}n.definitions=n.definitions.concat(i(t.definitions));function a(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){a(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){a(e,t)}),e.definitions&&e.definitions.forEach(function(e){a(e,t)})}var o={};(function(){n.definitions.forEach(function(e){if(e.name){var t=new Set;a(e,t),o[e.name.value]=t}})})();function s(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function c(e,t){var n={kind:e.kind,definitions:[s(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=o[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var c=a;a=new Set,c.forEach(function(e){i.has(e)||(i.add(e),(o[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=s(e,t);r&&n.definitions.push(r)}),n}c(n,`BrandSettings`);var l={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`VisualThemeLogoImage`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`VisualTheme`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`__typename`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`LogoColors`},directives:[]},{kind:`Field`,name:{kind:`Name`,value:`logoImage`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`__typename`},arguments:[],directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]}]}}]}}],loc:{start:0,end:217}};l.loc.source={body:`#import "./ReducedImageFragment.graphql"
#import "./LogoColorsFragment.graphql"

fragment VisualThemeLogoImage on VisualTheme {
  __typename
  id
  ...LogoColors
  logoImage {
    __typename
    ...ReducedImage
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var u={};function d(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!u[t]&&(u[t]=!0,!0)})}l.definitions=l.definitions.concat(d(t.definitions)),l.definitions=l.definitions.concat(d(e.definitions));function f(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){f(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){f(e,t)}),e.definitions&&e.definitions.forEach(function(e){f(e,t)})}var p={};(function(){l.definitions.forEach(function(e){if(e.name){var t=new Set;f(e,t),p[e.name.value]=t}})})();function m(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function h(e,t){var n={kind:e.kind,definitions:[m(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=p[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(p[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=m(e,t);r&&n.definitions.push(r)}),n}h(l,`VisualThemeLogoImage`);var g={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`VisualTheme`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`VisualTheme`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`heroImage`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]}]}},{kind:`FragmentSpread`,name:{kind:`Name`,value:`VisualThemeLogoImage`},directives:[]},{kind:`Field`,name:{kind:`Name`,value:`description`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`brandSettings`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`BrandSettings`},directives:[]}]}}]}}],loc:{start:0,end:299}};g.loc.source={body:`#import "./ReducedImageFragment.graphql"
#import "./BrandSettingsFragment.graphql"
#import "./VisualThemeLogoImageFragment.graphql"

fragment VisualTheme on VisualTheme {
  id
  heroImage {
    ...ReducedImage
  }
  ...VisualThemeLogoImage
  description
  brandSettings {
    ...BrandSettings
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var _={};function v(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!_[t]&&(_[t]=!0,!0)})}g.definitions=g.definitions.concat(v(t.definitions)),g.definitions=g.definitions.concat(v(n.definitions)),g.definitions=g.definitions.concat(v(l.definitions));function y(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){y(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){y(e,t)}),e.definitions&&e.definitions.forEach(function(e){y(e,t)})}var b={};(function(){g.definitions.forEach(function(e){if(e.name){var t=new Set;y(e,t),b[e.name.value]=t}})})();function x(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function S(e,t){var n={kind:e.kind,definitions:[x(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=b[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(b[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=x(e,t);r&&n.definitions.push(r)}),n}S(g,`VisualTheme`);export{l as n,n as r,g as t};
//# sourceMappingURL=VisualThemeFragment-Cjx_DH0a.js.map