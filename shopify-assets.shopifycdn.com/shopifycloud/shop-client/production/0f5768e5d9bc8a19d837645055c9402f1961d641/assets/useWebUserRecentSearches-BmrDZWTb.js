import{o as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./useApolloClient-HjYDriE4.js";import{t as r}from"./useLazyQuery-BdmB8U4r.js";import{a as i,n as a,o}from"./ShopCashIncentiveFragment-DnUntjyt.js";import{t as s}from"./MoneyV2Fragment-L6bxRLtL.js";import{t as c}from"./getLogoColor-CoLPQuPm.js";import{a as l}from"./SearchSuggestions-NUcpvNRR.js";var u=function(e){return e.ALL=`ALL`,e.GLOBAL=`GLOBAL`,e.SHOP=`SHOP`,e}({}),d=e(t(),1),f={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`ReducedShopCashIncentiveFragment`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`ShopCashIncentive`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`ShopCashOffer`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`adDisplayType`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`adMetadata`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`AdMetadata`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`totalCashDestinationAmount`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`MoneyV2Fragment`},directives:[]}]}}]}},{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`ShopCashCashbackIncentive`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`adMetadata`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`AdMetadata`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`ratePercentage`},arguments:[],directives:[]}]}},{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`FlatAmountCashbackOffer`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`adDisplayType`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`adMetadata`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`AdMetadata`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`cashbackAmount`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`MoneyV2Fragment`},directives:[]}]}}]}}]}}],loc:{start:0,end:618}};f.loc.source={body:`# eslint-disable @graphql-eslint/overlapping-fields-can-be-merged
#import "./MoneyV2Fragment.graphql"
#import "./AdMetadataFragment.graphql"

fragment ReducedShopCashIncentiveFragment on ShopCashIncentive {
  ... on ShopCashOffer {
    adDisplayType
    adMetadata {
      ...AdMetadata
    }
    totalCashDestinationAmount {
      ...MoneyV2Fragment
    }
  }
  ... on ShopCashCashbackIncentive {
    adMetadata {
      ...AdMetadata
    }
    ratePercentage
  }
  ... on FlatAmountCashbackOffer {
    adDisplayType
    adMetadata {
      ...AdMetadata
    }
    cashbackAmount {
      ...MoneyV2Fragment
    }
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var p={};function m(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!p[t]&&(p[t]=!0,!0)})}f.definitions=f.definitions.concat(m(s.definitions)),f.definitions=f.definitions.concat(m(a.definitions));function h(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){h(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){h(e,t)}),e.definitions&&e.definitions.forEach(function(e){h(e,t)})}var g={};(function(){f.definitions.forEach(function(e){if(e.name){var t=new Set;h(e,t),g[e.name.value]=t}})})();function _(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function v(e,t){var n={kind:e.kind,definitions:[_(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=g[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(g[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=_(e,t);r&&n.definitions.push(r)}),n}v(f,`ReducedShopCashIncentiveFragment`);var y={kind:`Document`,definitions:[{kind:`OperationDefinition`,operation:`query`,name:{kind:`Name`,value:`WebUserRecentSearches`},variableDefinitions:[{kind:`VariableDefinition`,variable:{kind:`Variable`,name:{kind:`Name`,value:`first`}},type:{kind:`NamedType`,name:{kind:`Name`,value:`Int`}},directives:[]},{kind:`VariableDefinition`,variable:{kind:`Variable`,name:{kind:`Name`,value:`scope`}},type:{kind:`NamedType`,name:{kind:`Name`,value:`UserSearchScope`}},directives:[]},{kind:`VariableDefinition`,variable:{kind:`Variable`,name:{kind:`Name`,value:`shopIds`}},type:{kind:`ListType`,type:{kind:`NonNullType`,type:{kind:`NamedType`,name:{kind:`Name`,value:`ID`}}}},directives:[]}],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`userRecentSearches`},arguments:[{kind:`Argument`,name:{kind:`Name`,value:`first`},value:{kind:`Variable`,name:{kind:`Name`,value:`first`}}},{kind:`Argument`,name:{kind:`Name`,value:`scope`},value:{kind:`Variable`,name:{kind:`Name`,value:`scope`}}},{kind:`Argument`,name:{kind:`Name`,value:`shopIds`},value:{kind:`Variable`,name:{kind:`Name`,value:`shopIds`}}}],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`nodes`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`query`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`scope`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`searchedAt`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`selectedResult`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`__typename`},arguments:[],directives:[]},{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`Shop`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`shopifyId`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`name`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`defaultHandle`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`visualTheme`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`LogoColors`},directives:[]},{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`logoImage`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`productReviewAnalytics`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`averageRating`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`totalProductRatings`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`totalProductReviews`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`shopCashIncentive`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`__typename`},arguments:[],directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedShopCashIncentiveFragment`},directives:[]}]}}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`shop`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`uuid`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`name`},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:1044}};y.loc.source={body:`#import "../../../data/fragments/ReducedImageFragment.graphql"
#import "../../../data/fragments/ReducedShopCashIncentiveFragment.graphql"
#import "../../../data/fragments/LogoColorsFragment.graphql"

query WebUserRecentSearches(
  $first: Int
  $scope: UserSearchScope
  $shopIds: [ID!]
) {
  userRecentSearches(first: $first, scope: $scope, shopIds: $shopIds) {
    nodes {
      id
      query
      scope
      searchedAt
      selectedResult {
        __typename
        ... on Shop {
          id
          shopifyId
          name
          defaultHandle
          visualTheme {
            ...LogoColors
            id
            logoImage {
              ...ReducedImage
            }
          }
          productReviewAnalytics {
            averageRating
            totalProductRatings
            totalProductReviews
          }
          shopCashIncentive {
            __typename
            ...ReducedShopCashIncentiveFragment
          }
        }
      }
      shop {
        id
        uuid
        name
      }
    }
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var b={};function x(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!b[t]&&(b[t]=!0,!0)})}y.definitions=y.definitions.concat(x(o.definitions)),y.definitions=y.definitions.concat(x(f.definitions)),y.definitions=y.definitions.concat(x(i.definitions));function S(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){S(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){S(e,t)}),e.definitions&&e.definitions.forEach(function(e){S(e,t)})}var C={};(function(){y.definitions.forEach(function(e){if(e.name){var t=new Set;S(e,t),C[e.name.value]=t}})})();function w(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function T(e,t){var n={kind:e.kind,definitions:[w(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=C[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(C[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=w(e,t);r&&n.definitions.push(r)}),n}T(y,`WebUserRecentSearches`);var E=({first:e=20,scope:t=u.GLOBAL,shopIds:i=[]}={})=>{let a=n(),[o,{data:s,loading:f,networkStatus:p,refetch:m,error:h}]=r(y,{notifyOnNetworkStatusChange:!0,fetchPolicy:`cache-and-network`}),g=(0,d.useMemo)(()=>s==null?void 0:s.userRecentSearches.nodes.map(e=>{let t=e.selectedResult;if(t&&t.__typename===`Shop`){var n,r,i;return{id:e.id,uuid:((n=e.shop)==null?void 0:n.uuid)??``,shopifyId:t.shopifyId,name:t.name,logoImage:(r=t.visualTheme)==null||(r=r.logoImage)==null?void 0:r.url,logoColor:c((i=t.visualTheme)==null?void 0:i.brandSettings),productReviewAnalytics:t.productReviewAnalytics,type:l.Shop,defaultHandle:t.defaultHandle,shopCashIncentive:t.shopCashIncentive}}return{id:e.id,searchTerm:e.query,type:l.Search}}),[s]),_=(0,d.useMemo)(()=>({first:e,scope:i.length>0?u.SHOP:t,shopIds:[]}),[e,t,i]);return{fetchUserRecentSearches:(0,d.useCallback)(()=>o({variables:_}),[o,_]),addSearchToCache:(0,d.useCallback)(e=>{let t=a.readQuery({query:y,variables:_});if(!t)return;let n={__typename:`UserSearch`,id:`temp-cached-id`,query:e,scope:u.GLOBAL,searchedAt:new Date().toISOString(),selectedResult:null,shop:null},r={...t,userRecentSearches:{...t.userRecentSearches,nodes:[n,...t.userRecentSearches.nodes]}};a.writeQuery({query:y,data:r,variables:_})},[a,_]),userRecentSearches:g,userRecentSearchesLoading:f,networkStatus:p,refetch:m,error:h}};export{E as t};
//# sourceMappingURL=useWebUserRecentSearches-BmrDZWTb.js.map