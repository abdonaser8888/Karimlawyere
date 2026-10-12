import{t as e}from"./MoneyV2Fragment-L6bxRLtL.js";var t={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`ReducedImage`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`Image`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`__typename`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`url`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`altText`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`height`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`width`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`sensitive`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`thumbhash`},arguments:[],directives:[]}]}}],loc:{start:0,end:105}};t.loc.source={body:`fragment ReducedImage on Image {
  __typename
  url
  altText
  height
  width
  sensitive
  thumbhash
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};function n(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var r=e.type;r.kind===`NamedType`&&t.add(r.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){n(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){n(e,t)}),e.definitions&&e.definitions.forEach(function(e){n(e,t)})}var r={};(function(){t.definitions.forEach(function(e){if(e.name){var t=new Set;n(e,t),r[e.name.value]=t}})})();function i(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function a(e,t){var n={kind:e.kind,definitions:[i(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var a=r[t]||new Set,o=new Set,s=new Set;for(a.forEach(function(e){s.add(e)});s.size>0;){var c=s;s=new Set,c.forEach(function(e){o.has(e)||(o.add(e),(r[e]||new Set).forEach(function(e){s.add(e)}))})}return o.forEach(function(t){var r=i(e,t);r&&n.definitions.push(r)}),n}a(t,`ReducedImage`);var o={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`LogoColors`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`VisualTheme`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`brandSettings`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`colors`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`logoAverage`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`logoDominant`},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:138}};o.loc.source={body:`fragment LogoColors on VisualTheme {
  id
  brandSettings {
    id
    colors {
      id
      logoAverage
      logoDominant
    }
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};function s(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){s(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){s(e,t)}),e.definitions&&e.definitions.forEach(function(e){s(e,t)})}var c={};(function(){o.definitions.forEach(function(e){if(e.name){var t=new Set;s(e,t),c[e.name.value]=t}})})();function l(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function u(e,t){var n={kind:e.kind,definitions:[l(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=c[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(c[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=l(e,t);r&&n.definitions.push(r)}),n}u(o,`LogoColors`);var d={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`AutomaticDiscount`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`AutomaticDiscount`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`constraints`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`text`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`type`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`description`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`shortDescription`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`discountAmount`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`MoneyV2Fragment`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`discountClass`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`discountPercentage`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`discountType`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`minimumRequirementAmount`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`MoneyV2Fragment`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`minimumRequirementQuantity`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`minimumRequirementType`},arguments:[],directives:[]}]}}],loc:{start:0,end:373}};d.loc.source={body:`#import "./MoneyV2Fragment.graphql"

fragment AutomaticDiscount on AutomaticDiscount {
  id
  constraints {
    text
    type
  }
  description
  shortDescription
  discountAmount {
    ...MoneyV2Fragment
  }
  discountClass
  discountPercentage
  discountType
  minimumRequirementAmount {
    ...MoneyV2Fragment
  }
  minimumRequirementQuantity
  minimumRequirementType
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var f={};function p(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!f[t]&&(f[t]=!0,!0)})}d.definitions=d.definitions.concat(p(e.definitions));function m(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){m(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){m(e,t)}),e.definitions&&e.definitions.forEach(function(e){m(e,t)})}var h={};(function(){d.definitions.forEach(function(e){if(e.name){var t=new Set;m(e,t),h[e.name.value]=t}})})();function g(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function _(e,t){var n={kind:e.kind,definitions:[g(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=h[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(h[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=g(e,t);r&&n.definitions.push(r)}),n}_(d,`AutomaticDiscount`);var v={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`ProductCardWithoutShopCash`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`DiscoveryProduct`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`universalProductId`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`title`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`slug`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`numberOfVariants`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`inDefaultProductList`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`isProductDiscoveryEligible`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`isPublishedToOnlineStoreChannel`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`isRestricted`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`referral`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`defaultVariantId`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`shareUrl`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`offers`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`AutomaticDiscount`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`AutomaticDiscount`},directives:[]}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`price`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`amount`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`currencyCode`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`originalPrice`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`amount`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`currencyCode`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`url`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`images`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`reviewAnalytics`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`averageRating`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`count`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`shop`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`uuid`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`name`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`defaultHandle`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`nativeProductPagesEnabled`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`shopifyId`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`followedByMe`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`visualTheme`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`LogoColors`},directives:[]},{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`logoImage`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`productReviewAnalytics`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`totalProductReviews`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`totalProductRatings`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`averageRating`},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:987}};v.loc.source={body:`#import "./AutomaticDiscountFragment.graphql"
#import "./ReducedImageFragment.graphql"
#import "./LogoColorsFragment.graphql"

fragment ProductCardWithoutShopCash on DiscoveryProduct {
  id
  universalProductId
  title
  slug
  numberOfVariants
  inDefaultProductList
  isProductDiscoveryEligible
  isPublishedToOnlineStoreChannel
  isRestricted
  referral
  defaultVariantId
  shareUrl
  offers {
    id
    ... on AutomaticDiscount {
      ...AutomaticDiscount
    }
  }
  price {
    amount
    currencyCode
  }
  originalPrice {
    amount
    currencyCode
  }
  url
  images {
    ...ReducedImage
  }
  reviewAnalytics {
    averageRating
    count
  }
  shop {
    id
    uuid
    name
    defaultHandle
    nativeProductPagesEnabled
    shopifyId
    followedByMe
    visualTheme {
      ...LogoColors
      id
      logoImage {
        ...ReducedImage
      }
    }
    productReviewAnalytics {
      totalProductReviews
      totalProductRatings
      averageRating
    }
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var y={};function b(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!y[t]&&(y[t]=!0,!0)})}v.definitions=v.definitions.concat(b(d.definitions)),v.definitions=v.definitions.concat(b(t.definitions)),v.definitions=v.definitions.concat(b(o.definitions));function x(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){x(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){x(e,t)}),e.definitions&&e.definitions.forEach(function(e){x(e,t)})}var S={};(function(){v.definitions.forEach(function(e){if(e.name){var t=new Set;x(e,t),S[e.name.value]=t}})})();function C(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function w(e,t){var n={kind:e.kind,definitions:[C(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=S[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(S[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=C(e,t);r&&n.definitions.push(r)}),n}w(v,`ProductCardWithoutShopCash`);var T={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`AdMetadata`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`ShopAdMetadata`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`adResponseId`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`adType`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`campaignCountryCode`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`campaignHandle`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`source`},arguments:[],directives:[]}]}}],loc:{start:0,end:114}};T.loc.source={body:`fragment AdMetadata on ShopAdMetadata {
  adResponseId
  adType
  campaignCountryCode
  campaignHandle
  source
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};function E(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){E(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){E(e,t)}),e.definitions&&e.definitions.forEach(function(e){E(e,t)})}var D={};(function(){T.definitions.forEach(function(e){if(e.name){var t=new Set;E(e,t),D[e.name.value]=t}})})();function O(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function k(e,t){var n={kind:e.kind,definitions:[O(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=D[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(D[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=O(e,t);r&&n.definitions.push(r)}),n}k(T,`AdMetadata`);var A={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`ShopCashIncentiveFragment`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`ShopCashIncentive`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`ShopCashOffer`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`minimumOrderValue`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`MoneyV2Fragment`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`totalCashDestinationAmount`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`MoneyV2Fragment`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`adMetadata`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`AdMetadata`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`adDisplayType`},arguments:[],directives:[]}]}},{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`ShopCashCashbackIncentive`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`maxApplicableOrderAmount`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`MoneyV2Fragment`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`ratePercentage`},arguments:[],directives:[]}]}},{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`FlatAmountCashbackOffer`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`adMetadata`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`AdMetadata`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`cashbackAmount`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`MoneyV2Fragment`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`minimumOrderValue`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`MoneyV2Fragment`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`adDisplayType`},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:866}};A.loc.source={body:`#import "../fragments/MoneyV2Fragment.graphql"
#import "../fragments/AdMetadataFragment.graphql"

fragment ShopCashIncentiveFragment on ShopCashIncentive {
  ... on ShopCashOffer {
    # Note: do not include \`id\` field here, or the apollo InMemoryCache will not recognize the full objects as unique on a per-shop basis, breaking unique ad reporting
    minimumOrderValue {
      ...MoneyV2Fragment
    }
    totalCashDestinationAmount {
      ...MoneyV2Fragment
    }
    adMetadata {
      ...AdMetadata
    }
    adDisplayType
  }

  ... on ShopCashCashbackIncentive {
    maxApplicableOrderAmount {
      ...MoneyV2Fragment
    }
    ratePercentage
  }

  ... on FlatAmountCashbackOffer {
    adMetadata {
      ...AdMetadata
    }
    cashbackAmount {
      ...MoneyV2Fragment
    }
    minimumOrderValue {
      ...MoneyV2Fragment
    }
    adDisplayType
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var j={};function M(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!j[t]&&(j[t]=!0,!0)})}A.definitions=A.definitions.concat(M(e.definitions)),A.definitions=A.definitions.concat(M(T.definitions));function N(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){N(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){N(e,t)}),e.definitions&&e.definitions.forEach(function(e){N(e,t)})}var P={};(function(){A.definitions.forEach(function(e){if(e.name){var t=new Set;N(e,t),P[e.name.value]=t}})})();function F(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function I(e,t){var n={kind:e.kind,definitions:[F(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=P[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(P[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=F(e,t);r&&n.definitions.push(r)}),n}I(A,`ShopCashIncentiveFragment`);export{o as a,d as i,T as n,t as o,v as r,A as t};
//# sourceMappingURL=ShopCashIncentiveFragment-DnUntjyt.js.map