var e={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`FeedProductDailyDeal`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`DiscoveryProduct`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`dailyDeal`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`variantId`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`discountedPrice`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`amount`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`currencyCode`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`compareAtPrice`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`amount`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`currencyCode`},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:205}};e.loc.source={body:`fragment FeedProductDailyDeal on DiscoveryProduct {
  dailyDeal {
    variantId
    discountedPrice {
      amount
      currencyCode
    }
    compareAtPrice {
      amount
      currencyCode
    }
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};function t(e,n){if(e.kind===`FragmentSpread`)n.add(e.name.value);else if(e.kind===`VariableDefinition`){var r=e.type;r.kind===`NamedType`&&n.add(r.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){t(e,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){t(e,n)}),e.definitions&&e.definitions.forEach(function(e){t(e,n)})}var n={};(function(){e.definitions.forEach(function(e){if(e.name){var r=new Set;t(e,r),n[e.name.value]=r}})})();function r(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function i(e,t){var i={kind:e.kind,definitions:[r(e,t)]};e.hasOwnProperty(`loc`)&&(i.loc=e.loc);var a=n[t]||new Set,o=new Set,s=new Set;for(a.forEach(function(e){s.add(e)});s.size>0;){var c=s;s=new Set,c.forEach(function(e){o.has(e)||(o.add(e),(n[e]||new Set).forEach(function(e){s.add(e)}))})}return o.forEach(function(t){var n=r(e,t);n&&i.definitions.push(n)}),i}i(e,`FeedProductDailyDeal`);export{e as t};
//# sourceMappingURL=FeedProductDailyDealFragment-BjIVfS5l.js.map