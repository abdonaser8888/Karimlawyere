import{t as e}from"./MoneyV2Fragment-L6bxRLtL.js";var t={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`SellingPlanAllocationFragment`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`SellingPlanAllocation`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`priceAdjustments`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`price`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`MoneyV2Fragment`},directives:[]},{kind:`Field`,name:{kind:`Name`,value:`__typename`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`compareAtPrice`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`MoneyV2Fragment`},directives:[]},{kind:`Field`,name:{kind:`Name`,value:`__typename`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`perDeliveryPrice`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`MoneyV2Fragment`},directives:[]},{kind:`Field`,name:{kind:`Name`,value:`__typename`},arguments:[],directives:[]}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`sellingPlan`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`name`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`billingPolicy`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`__typename`},arguments:[],directives:[]},{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`SellingPlanRecurringBillingPolicy`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`interval`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`intervalCount`},arguments:[],directives:[]}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`deliveryPolicy`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`__typename`},arguments:[],directives:[]},{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`SellingPlanRecurringDeliveryPolicy`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`interval`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`intervalCount`},arguments:[],directives:[]}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`priceAdjustments`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`orderCount`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`adjustmentValue`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`__typename`},arguments:[],directives:[]},{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`SellingPlanPercentagePriceAdjustment`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`adjustmentPercentage`},arguments:[],directives:[]}]}},{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`SellingPlanFixedPriceAdjustment`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`price`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`MoneyV2Fragment`},directives:[]},{kind:`Field`,name:{kind:`Name`,value:`__typename`},arguments:[],directives:[]}]}}]}},{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`SellingPlanFixedAmountPriceAdjustment`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`adjustmentAmount`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`MoneyV2Fragment`},directives:[]},{kind:`Field`,name:{kind:`Name`,value:`__typename`},arguments:[],directives:[]}]}}]}}]}}]}}]}}]}}],loc:{start:0,end:1141}};t.loc.source={body:`#import "./MoneyV2Fragment.graphql"

fragment SellingPlanAllocationFragment on SellingPlanAllocation {
  priceAdjustments {
    price {
      ...MoneyV2Fragment
      __typename
    }
    compareAtPrice {
      ...MoneyV2Fragment
      __typename
    }
    perDeliveryPrice {
      ...MoneyV2Fragment
      __typename
    }
  }
  sellingPlan {
    id
    name
    billingPolicy {
      __typename
      ... on SellingPlanRecurringBillingPolicy {
        interval
        intervalCount
      }
    }
    deliveryPolicy {
      __typename
      ... on SellingPlanRecurringDeliveryPolicy {
        interval
        intervalCount
      }
    }
    priceAdjustments {
      orderCount
      adjustmentValue {
        __typename
        ... on SellingPlanPercentagePriceAdjustment {
          adjustmentPercentage
        }
        ... on SellingPlanFixedPriceAdjustment {
          price {
            ...MoneyV2Fragment
            __typename
          }
        }
        ... on SellingPlanFixedAmountPriceAdjustment {
          adjustmentAmount {
            ...MoneyV2Fragment
            __typename
          }
        }
      }
    }
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var n={};function r(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!n[t]&&(n[t]=!0,!0)})}t.definitions=t.definitions.concat(r(e.definitions));function i(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){i(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){i(e,t)}),e.definitions&&e.definitions.forEach(function(e){i(e,t)})}var a={};(function(){t.definitions.forEach(function(e){if(e.name){var t=new Set;i(e,t),a[e.name.value]=t}})})();function o(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function s(e,t){var n={kind:e.kind,definitions:[o(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=a[t]||new Set,i=new Set,s=new Set;for(r.forEach(function(e){s.add(e)});s.size>0;){var c=s;s=new Set,c.forEach(function(e){i.has(e)||(i.add(e),(a[e]||new Set).forEach(function(e){s.add(e)}))})}return i.forEach(function(t){var r=o(e,t);r&&n.definitions.push(r)}),n}s(t,`SellingPlanAllocationFragment`);export{t};
//# sourceMappingURL=SellingPlanAllocationFragment-DhVOF1Xf.js.map