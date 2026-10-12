import{t as e}from"./useApolloClient-HjYDriE4.js";import{t}from"./useLazyQuery-BdmB8U4r.js";import{d as n,st as r,u as i}from"./section-0Md2Y_Vd.js";import{t as a}from"./FilterUtils-pWtdodt7.js";import{a as o,o as s,t as c}from"./ShopCashIncentiveFragment-DnUntjyt.js";import{n as l,r as ee,t as te}from"./VisualThemeFragment-Cjx_DH0a.js";import{t as ne}from"./MoneyV2Fragment-L6bxRLtL.js";import{n as re}from"./ImageUtils-BDg6CS8n.js";import{n as ie}from"./utils-PMNb2YQO.js";import{t as ae}from"./dist-BySNRgL6.js";import{t as oe}from"./ProductCardFragment-CWXB3_UD.js";import{t as se}from"./FeedProductDailyDealFragment-BjIVfS5l.js";var ce=function(e){return e.BORDER=`BORDER`,e.BREADCRUMB=`BREADCRUMB`,e.DOTTED_BORDER=`DOTTED_BORDER`,e.DROP_DOWN=`DROP_DOWN`,e.HERO=`HERO`,e.ICON_ONLY=`ICON_ONLY`,e.NO_GLASS=`NO_GLASS`,e.OFFSET_IMAGE=`OFFSET_IMAGE`,e.PILL=`PILL`,e.PILL_LARGE=`PILL_LARGE`,e.RECTANGLE=`RECTANGLE`,e.SQUARE=`SQUARE`,e.TILE=`TILE`,e.VERBOSE=`VERBOSE`,e.VERTICAL=`VERTICAL`,e.WITH_SAMPLE_RESOURCES=`WITH_SAMPLE_RESOURCES`,e}({}),le=`#00000026`;function ue(e){switch(e==null?void 0:e.__typename){case`Image`:return de(e);case`Video`:case`Animation`:case void 0:return null}}function de(e){return e!=null&&e.sensitive?null:(e==null?void 0:e.url)??null}function fe(e,t){return`rgb(from ${e} r g b / ${t})`}function pe(e){let t={backgroundMediaStyle:null,backgroundVideo:null};if(!a(e))return t;let{options:n,backgroundMedia:i,overlayColor:o,dominantCoverColor:s}=e;if(!n.includes(r.ELEVATED))return t;if(n.includes(r.IMAGE)){let e=ue(i==null?void 0:i.source),[n,r]=me(o,s);if(a(e)){let i=ie(e,re.xlUrl),a=ie(e,re.xxxlUrl);t.backgroundMediaStyle={classKey:`ImageFeedSection`,style:{"--image-feed-section-first-color":n,"--image-feed-section-second-color":r,"--image-feed-section-image":`url("${i}")`,"--image-feed-section-image-set":`image-set(url("${i}") 1x, url("${a}") 2x)`},brandedBackgroundColor:`black`}}}if(n.includes(r.VIDEO)){(i==null?void 0:i.source.__typename)===`Video`&&(t.backgroundVideo=i.source);let[e,n]=me(o,s);a(t.backgroundVideo)&&(t.backgroundMediaStyle={classKey:`VideoFeedSection`,style:{"--video-feed-section-first-color":e,"--video-feed-section-second-color":n},brandedBackgroundColor:`black`})}return t}function me(e,t){let n=e??`#00000026`;return[n,t??fe(n,1)]}var u={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`ResourceAction`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`ResourceAction`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`label`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`url`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`icon`},arguments:[],directives:[]}]}}],loc:{start:0,end:67}};u.loc.source={body:`fragment ResourceAction on ResourceAction {
  label
  url
  icon
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};function he(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){he(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){he(e,t)}),e.definitions&&e.definitions.forEach(function(e){he(e,t)})}var ge={};(function(){u.definitions.forEach(function(e){if(e.name){var t=new Set;he(e,t),ge[e.name.value]=t}})})();function _e(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function ve(e,t){var n={kind:e.kind,definitions:[_e(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=ge[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(ge[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=_e(e,t);r&&n.definitions.push(r)}),n}ve(u,`ResourceAction`);var d={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`SectionGeneralHeader`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`SectionGeneralHeader`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`title`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`eyebrow`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`subtitle`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`Label`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`text`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`icon`},arguments:[],directives:[]}]}},{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`ShopProductReviewAnalytics`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`averageRating`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`totalProductRatings`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`totalProductReviews`},arguments:[],directives:[]}]}},{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`ShopCashSubtitle`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`summary`},arguments:[],directives:[]}]}},{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`ShopCashOffer`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`minimumOrderValue`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`MoneyV2Fragment`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`totalCashDestinationAmount`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`MoneyV2Fragment`},directives:[]}]}}]}},{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`ShopCashCashbackIncentive`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`ratePercentage`},arguments:[],directives:[]}]}},{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`FlatAmountCashbackOffer`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`cashbackAmount`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`MoneyV2Fragment`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`minimumOrderValue`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`MoneyV2Fragment`},directives:[]}]}}]}},{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`CountdownSubtitle`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`endDate`},arguments:[],directives:[]},{kind:`Field`,alias:{kind:`Name`,value:`countdownText`},name:{kind:`Name`,value:`text`},arguments:[],directives:[]}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`primaryAction`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ResourceAction`},directives:[]},{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`NotificationBadge`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`label`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`action`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`label`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`url`},arguments:[],directives:[]}]}}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`logo`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`icon`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`image`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`fallbackText`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`image`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]}]}}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`wordmark`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`actions`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ResourceAction`},directives:[]},{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`OverflowAction`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`label`},arguments:[],directives:[]}]}},{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`ShopFollowAction`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`label`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`renderable`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`shop`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`uuid`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`name`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`followedByMe`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`visualTheme`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`VisualThemeLogoImage`},directives:[]}]}}]}}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`displayHints`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`contentHints`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`alignment`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`horizontal`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`vertical`},arguments:[],directives:[]}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`subtitle`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`componentStyle`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`eyebrow`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`textVariant`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`textColor`},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:1795}};d.loc.source={body:`#import "../../../data/fragments/ReducedImageFragment.graphql"
#import "../../../data/fragments/MoneyV2Fragment.graphql"
#import "../../../data/fragments/VisualThemeLogoImageFragment.graphql"
#import "./ResourceActionFragment.graphql"

fragment SectionGeneralHeader on SectionGeneralHeader {
  title
  eyebrow
  subtitle {
    ... on Label {
      text
      icon
    }
    ... on ShopProductReviewAnalytics {
      averageRating
      totalProductRatings
      totalProductReviews
    }
    ... on ShopCashSubtitle {
      summary
    }
    ... on ShopCashOffer {
      minimumOrderValue {
        ...MoneyV2Fragment
      }
      totalCashDestinationAmount {
        ...MoneyV2Fragment
      }
    }
    ... on ShopCashCashbackIncentive {
      ratePercentage
    }
    ... on FlatAmountCashbackOffer {
      cashbackAmount {
        ...MoneyV2Fragment
      }
      minimumOrderValue {
        ...MoneyV2Fragment
      }
    }
    ... on CountdownSubtitle {
      endDate
      countdownText: text
    }
  }
  primaryAction {
    ...ResourceAction
    ... on NotificationBadge {
      label
      action {
        label
        url
      }
    }
  }
  logo {
    icon
    image {
      fallbackText
      image {
        ...ReducedImage
      }
    }
  }
  wordmark {
    ...ReducedImage
  }
  actions {
    ...ResourceAction
    ... on OverflowAction {
      label
    }
    ... on ShopFollowAction {
      label
      renderable
      shop {
        id
        uuid
        name
        followedByMe
        visualTheme {
          ...VisualThemeLogoImage
        }
      }
    }
  }
  displayHints {
    contentHints {
      alignment {
        horizontal
        vertical
      }
    }
    subtitle {
      componentStyle
    }
    eyebrow {
      textVariant
      textColor
    }
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var ye={};function be(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!ye[t]&&(ye[t]=!0,!0)})}d.definitions=d.definitions.concat(be(s.definitions)),d.definitions=d.definitions.concat(be(ne.definitions)),d.definitions=d.definitions.concat(be(l.definitions)),d.definitions=d.definitions.concat(be(u.definitions));function xe(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){xe(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){xe(e,t)}),e.definitions&&e.definitions.forEach(function(e){xe(e,t)})}var Se={};(function(){d.definitions.forEach(function(e){if(e.name){var t=new Set;xe(e,t),Se[e.name.value]=t}})})();function Ce(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function we(e,t){var n={kind:e.kind,definitions:[Ce(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=Se[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(Se[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=Ce(e,t);r&&n.definitions.push(r)}),n}we(d,`SectionGeneralHeader`);var f={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`FeedActionCard`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`ActionCard`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`displayHints`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`badgeText`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`options`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`textAlignment`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`vertical`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`horizontal`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`textDisplayHints`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`textVariant`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`maxLines`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`textColor`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`backgroundColor`},arguments:[],directives:[]}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`action`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`label`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`url`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`backgroundImage`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`sampleResources`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`subtitle`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`backgroundColor`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`icon`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`metadata`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`__typename`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`candidateId`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`candidateRank`},arguments:[],directives:[]},{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`MerchantCollectionMetadata`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`collection`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`shop`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`uuid`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`shopifyId`},arguments:[],directives:[]}]}}]}}]}},{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`DepartmentCurationMetadata`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`curation`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`versionId`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`departmentId`},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:812}};f.loc.source={body:`#import "../../../data/fragments/ReducedImageFragment.graphql"

fragment FeedActionCard on ActionCard {
  displayHints {
    badgeText
    options
    textAlignment {
      vertical
      horizontal
    }
    textDisplayHints {
      textVariant
      maxLines
      textColor
      backgroundColor
    }
  }
  action {
    label
    url
  }
  backgroundImage {
    ...ReducedImage
  }
  sampleResources {
    ...ReducedImage
  }
  subtitle
  backgroundColor
  icon
  metadata {
    __typename
    candidateId
    candidateRank
    ... on MerchantCollectionMetadata {
      collection {
        id
        shop {
          id
          uuid
          shopifyId
        }
      }
    }
    ... on DepartmentCurationMetadata {
      curation {
        id
        versionId
        departmentId
      }
    }
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var Te={};function Ee(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!Te[t]&&(Te[t]=!0,!0)})}f.definitions=f.definitions.concat(Ee(s.definitions));function De(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){De(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){De(e,t)}),e.definitions&&e.definitions.forEach(function(e){De(e,t)})}var Oe={};(function(){f.definitions.forEach(function(e){if(e.name){var t=new Set;De(e,t),Oe[e.name.value]=t}})})();function ke(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function Ae(e,t){var n={kind:e.kind,definitions:[ke(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=Oe[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(Oe[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=ke(e,t);r&&n.definitions.push(r)}),n}Ae(f,`FeedActionCard`);var p={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`SectionActionsHeader`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`SectionActionsHeader`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`actions`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedActionCard`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`primaryAction`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedActionCard`},directives:[]}]}}]}}],loc:{start:0,end:180}};p.loc.source={body:`#import "./ActionCardFragment.graphql"

fragment SectionActionsHeader on SectionActionsHeader {
  actions {
    ...FeedActionCard
  }
  primaryAction {
    ...FeedActionCard
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var je={};function Me(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!je[t]&&(je[t]=!0,!0)})}p.definitions=p.definitions.concat(Me(f.definitions));function Ne(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){Ne(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){Ne(e,t)}),e.definitions&&e.definitions.forEach(function(e){Ne(e,t)})}var Pe={};(function(){p.definitions.forEach(function(e){if(e.name){var t=new Set;Ne(e,t),Pe[e.name.value]=t}})})();function Fe(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function Ie(e,t){var n={kind:e.kind,definitions:[Fe(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=Pe[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(Pe[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=Fe(e,t);r&&n.definitions.push(r)}),n}Ie(p,`SectionActionsHeader`);var m={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`SectionHeader`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`SectionHeader`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`SectionGeneralHeader`},directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`SectionActionsHeader`},directives:[]}]}}],loc:{start:0,end:195}};m.loc.source={body:`#import "./SectionGeneralHeaderFragment.graphql"
#import "./SectionActionsHeaderFragment.graphql"

fragment SectionHeader on SectionHeader {
  ...SectionGeneralHeader
  ...SectionActionsHeader
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var Le={};function Re(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!Le[t]&&(Le[t]=!0,!0)})}m.definitions=m.definitions.concat(Re(d.definitions)),m.definitions=m.definitions.concat(Re(p.definitions));function ze(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){ze(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){ze(e,t)}),e.definitions&&e.definitions.forEach(function(e){ze(e,t)})}var Be={};(function(){m.definitions.forEach(function(e){if(e.name){var t=new Set;ze(e,t),Be[e.name.value]=t}})})();function Ve(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function He(e,t){var n={kind:e.kind,definitions:[Ve(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=Be[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(Be[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=Ve(e,t);r&&n.definitions.push(r)}),n}He(m,`SectionHeader`);var Ue={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`FeedSingleActionFooter`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`FeedSingleActionFooter`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`action`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`label`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`url`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`buttonVariant`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`displayHints`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`options`},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:144}};Ue.loc.source={body:`fragment FeedSingleActionFooter on FeedSingleActionFooter {
  action {
    label
    url
  }
  buttonVariant
  displayHints {
    options
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};function We(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){We(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){We(e,t)}),e.definitions&&e.definitions.forEach(function(e){We(e,t)})}var Ge={};(function(){Ue.definitions.forEach(function(e){if(e.name){var t=new Set;We(e,t),Ge[e.name.value]=t}})})();function Ke(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function qe(e,t){var n={kind:e.kind,definitions:[Ke(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=Ge[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(Ge[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=Ke(e,t);r&&n.definitions.push(r)}),n}qe(Ue,`FeedSingleActionFooter`);var Je={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`PaginationFooter`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`PaginationSectionFooter`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`nextLabel`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`prevLabel`},arguments:[],directives:[]}]}}],loc:{start:0,end:81}};Je.loc.source={body:`fragment PaginationFooter on PaginationSectionFooter {
  nextLabel
  prevLabel
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};function Ye(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){Ye(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){Ye(e,t)}),e.definitions&&e.definitions.forEach(function(e){Ye(e,t)})}var Xe={};(function(){Je.definitions.forEach(function(e){if(e.name){var t=new Set;Ye(e,t),Xe[e.name.value]=t}})})();function Ze(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function Qe(e,t){var n={kind:e.kind,definitions:[Ze(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=Xe[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(Xe[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=Ze(e,t);r&&n.definitions.push(r)}),n}Qe(Je,`PaginationFooter`);var $e={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`SectionGeneralFooter`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`SectionGeneralFooter`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`title`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`subtitle`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`primaryAction`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ResourceAction`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`actions`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ResourceAction`},directives:[]}]}}]}}],loc:{start:0,end:203}};$e.loc.source={body:`#import "./ResourceActionFragment.graphql"

fragment SectionGeneralFooter on SectionGeneralFooter {
  title
  subtitle
  primaryAction {
    ...ResourceAction
  }
  actions {
    ...ResourceAction
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var et={};function tt(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!et[t]&&(et[t]=!0,!0)})}$e.definitions=$e.definitions.concat(tt(u.definitions));function nt(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){nt(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){nt(e,t)}),e.definitions&&e.definitions.forEach(function(e){nt(e,t)})}var rt={};(function(){$e.definitions.forEach(function(e){if(e.name){var t=new Set;nt(e,t),rt[e.name.value]=t}})})();function it(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function at(e,t){var n={kind:e.kind,definitions:[it(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=rt[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(rt[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=it(e,t);r&&n.definitions.push(r)}),n}at($e,`SectionGeneralFooter`);var h={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`SectionFooter`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`SectionFooter`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedSingleActionFooter`},directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`PaginationFooter`},directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`SectionGeneralFooter`},directives:[]}]}}],loc:{start:0,end:262}};h.loc.source={body:`#import "./SingleActionFooterFragment.graphql"
#import "./PaginationFooterFragment.graphql"
#import "./SectionGeneralFooterFragment.graphql"

fragment SectionFooter on SectionFooter {
  ...FeedSingleActionFooter
  ...PaginationFooter
  ...SectionGeneralFooter
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var ot={};function st(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!ot[t]&&(ot[t]=!0,!0)})}h.definitions=h.definitions.concat(st(Ue.definitions)),h.definitions=h.definitions.concat(st(Je.definitions)),h.definitions=h.definitions.concat(st($e.definitions));function ct(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){ct(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){ct(e,t)}),e.definitions&&e.definitions.forEach(function(e){ct(e,t)})}var lt={};(function(){h.definitions.forEach(function(e){if(e.name){var t=new Set;ct(e,t),lt[e.name.value]=t}})})();function ut(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function dt(e,t){var n={kind:e.kind,definitions:[ut(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=lt[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(lt[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=ut(e,t);r&&n.definitions.push(r)}),n}dt(h,`SectionFooter`);var g={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`FeedOverlayItem`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`OverlayItem`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`kind`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`label`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`position`},arguments:[],directives:[]}]}}],loc:{start:0,end:70}};g.loc.source={body:`fragment FeedOverlayItem on OverlayItem {
  kind
  label
  position
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};function ft(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){ft(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){ft(e,t)}),e.definitions&&e.definitions.forEach(function(e){ft(e,t)})}var pt={};(function(){g.definitions.forEach(function(e){if(e.name){var t=new Set;ft(e,t),pt[e.name.value]=t}})})();function mt(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function ht(e,t){var n={kind:e.kind,definitions:[mt(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=pt[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(pt[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=mt(e,t);r&&n.definitions.push(r)}),n}ht(g,`FeedOverlayItem`);var _={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`FeedProductCard`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`ProductCard`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`displayHints`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`options`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`priceColor`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`product`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`ProductCard`},directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedProductDailyDeal`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`overlayItems`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedOverlayItem`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`algorithm`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`name`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`score`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`version`},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:407}};_.loc.source={body:`#import "../../../data/fragments/ProductCardFragment.graphql"
#import "./FeedProductDailyDealFragment.graphql"
#import "./OverlayItemFragment.graphql"

fragment FeedProductCard on ProductCard {
  displayHints {
    options
    priceColor
  }
  product {
    id
    ...ProductCard
    ...FeedProductDailyDeal
  }
  overlayItems {
    ...FeedOverlayItem
  }
  algorithm {
    name
    score
    version
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var gt={};function _t(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!gt[t]&&(gt[t]=!0,!0)})}_.definitions=_.definitions.concat(_t(oe.definitions)),_.definitions=_.definitions.concat(_t(se.definitions)),_.definitions=_.definitions.concat(_t(g.definitions));function vt(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){vt(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){vt(e,t)}),e.definitions&&e.definitions.forEach(function(e){vt(e,t)})}var yt={};(function(){_.definitions.forEach(function(e){if(e.name){var t=new Set;vt(e,t),yt[e.name.value]=t}})})();function bt(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function xt(e,t){var n={kind:e.kind,definitions:[bt(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=yt[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(yt[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=bt(e,t);r&&n.definitions.push(r)}),n}xt(_,`FeedProductCard`);var v={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`FeedMerchantCard`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`MerchantCard`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`displayHints`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`options`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`overlayItems`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedOverlayItem`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`shop`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`uuid`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`name`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`defaultHandle`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`followedByMe`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`shopNetwork`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`shareUrl`},arguments:[],directives:[]},{kind:`Field`,alias:{kind:`Name`,value:`recognizedWebsiteUrl`},name:{kind:`Name`,value:`websiteUrl`},arguments:[{kind:`Argument`,name:{kind:`Name`,value:`includeRecognition`},value:{kind:`BooleanValue`,value:!0}}],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`shopifyId`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`nativeProductPagesEnabled`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`inAppVisibilityStatus`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`storeEligible`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`productReviewAnalytics`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`totalProductReviews`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`totalProductRatings`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`averageRating`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`shopCashIncentive`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ShopCashIncentiveFragment`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`visualTheme`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`logoImage`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`featuredImages`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`brandSettings`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`BrandSettings`},directives:[]}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`offers`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`AutomaticDiscount`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:1048}};v.loc.source={body:`#import "../../../data/fragments/ReducedImageFragment.graphql"
#import "../../../data/fragments/ShopCashIncentiveFragment.graphql"
#import "../../../data/fragments/BrandSettingsFragment.graphql"
#import "./OverlayItemFragment.graphql"

fragment FeedMerchantCard on MerchantCard {
  displayHints {
    options
  }
  overlayItems {
    ...FeedOverlayItem
  }
  shop {
    id
    uuid
    name
    defaultHandle
    followedByMe
    shopNetwork
    shareUrl
    recognizedWebsiteUrl: websiteUrl(includeRecognition: true)
    shopifyId
    nativeProductPagesEnabled
    inAppVisibilityStatus
    storeEligible
    productReviewAnalytics {
      totalProductReviews
      totalProductRatings
      averageRating
    }
    shopCashIncentive {
      ...ShopCashIncentiveFragment
    }
    visualTheme {
      id
      logoImage {
        ...ReducedImage
      }
      featuredImages {
        ...ReducedImage
      }
      brandSettings {
        ...BrandSettings
      }
    }
    offers {
      ... on AutomaticDiscount {
        id
      }
    }
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var St={};function Ct(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!St[t]&&(St[t]=!0,!0)})}v.definitions=v.definitions.concat(Ct(s.definitions)),v.definitions=v.definitions.concat(Ct(c.definitions)),v.definitions=v.definitions.concat(Ct(ee.definitions)),v.definitions=v.definitions.concat(Ct(g.definitions));function wt(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){wt(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){wt(e,t)}),e.definitions&&e.definitions.forEach(function(e){wt(e,t)})}var Tt={};(function(){v.definitions.forEach(function(e){if(e.name){var t=new Set;wt(e,t),Tt[e.name.value]=t}})})();function Et(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function Dt(e,t){var n={kind:e.kind,definitions:[Et(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=Tt[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(Tt[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=Et(e,t);r&&n.definitions.push(r)}),n}Dt(v,`FeedMerchantCard`);var y={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`ShopCashBackPromotionFragment`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`ShopCashBackPromotion`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`rate`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`limit`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`MoneyV2Fragment`},directives:[]}]}}]}}],loc:{start:0,end:149}};y.loc.source={body:`#import "./MoneyV2Fragment.graphql"

fragment ShopCashBackPromotionFragment on ShopCashBackPromotion {
  rate
  limit {
    ...MoneyV2Fragment
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var Ot={};function kt(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!Ot[t]&&(Ot[t]=!0,!0)})}y.definitions=y.definitions.concat(kt(ne.definitions));function At(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){At(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){At(e,t)}),e.definitions&&e.definitions.forEach(function(e){At(e,t)})}var jt={};(function(){y.definitions.forEach(function(e){if(e.name){var t=new Set;At(e,t),jt[e.name.value]=t}})})();function Mt(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function Nt(e,t){var n={kind:e.kind,definitions:[Mt(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=jt[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(jt[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=Mt(e,t);r&&n.definitions.push(r)}),n}Nt(y,`ShopCashBackPromotionFragment`);var b={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`FeedProductFocusedMerchantCard`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`ProductFocusedMerchantCard`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`productCards`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`product`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`ProductCard`},directives:[]}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`overlayItems`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedOverlayItem`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`displayHints`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`options`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`shop`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`uuid`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`name`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`defaultHandle`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`followedByMe`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`shopNetwork`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`shareUrl`},arguments:[],directives:[]},{kind:`Field`,alias:{kind:`Name`,value:`recognizedWebsiteUrl`},name:{kind:`Name`,value:`websiteUrl`},arguments:[{kind:`Argument`,name:{kind:`Name`,value:`includeRecognition`},value:{kind:`BooleanValue`,value:!0}}],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`shopifyId`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`nativeProductPagesEnabled`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`inAppVisibilityStatus`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`storeEligible`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`productReviewAnalytics`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`totalProductReviews`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`totalProductRatings`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`averageRating`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`shopCashBackPromotion`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ShopCashBackPromotionFragment`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`shopCashIncentive`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ShopCashIncentiveFragment`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`visualTheme`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`VisualTheme`},directives:[]}]}}]}}]}}],loc:{start:0,end:1133}};b.loc.source={body:`#import "../../../data/fragments/ProductCardFragment.graphql"
#import "../../../data/fragments/ReducedImageFragment.graphql"
#import "../../../data/fragments/VisualThemeFragment.graphql"
#import "../../../data/fragments/ShopCashIncentiveFragment.graphql"
#import "../../../data/fragments/ShopCashBackPromotionFragment.graphql"
#import "./OverlayItemFragment.graphql"

fragment FeedProductFocusedMerchantCard on ProductFocusedMerchantCard {
  productCards {
    product {
      id
      ...ProductCard
    }
  }
  overlayItems {
    ...FeedOverlayItem
  }
  displayHints {
    options
  }
  shop {
    id
    uuid
    name
    defaultHandle
    followedByMe
    shopNetwork
    shareUrl
    recognizedWebsiteUrl: websiteUrl(includeRecognition: true)
    shopifyId
    nativeProductPagesEnabled
    inAppVisibilityStatus
    storeEligible
    productReviewAnalytics {
      totalProductReviews
      totalProductRatings
      averageRating
    }
    shopCashBackPromotion {
      ...ShopCashBackPromotionFragment
    }
    shopCashIncentive {
      ...ShopCashIncentiveFragment
    }
    visualTheme {
      ...VisualTheme
    }
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var Pt={};function x(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!Pt[t]&&(Pt[t]=!0,!0)})}b.definitions=b.definitions.concat(x(oe.definitions)),b.definitions=b.definitions.concat(x(s.definitions)),b.definitions=b.definitions.concat(x(te.definitions)),b.definitions=b.definitions.concat(x(c.definitions)),b.definitions=b.definitions.concat(x(y.definitions)),b.definitions=b.definitions.concat(x(g.definitions));function Ft(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){Ft(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){Ft(e,t)}),e.definitions&&e.definitions.forEach(function(e){Ft(e,t)})}var It={};(function(){b.definitions.forEach(function(e){if(e.name){var t=new Set;Ft(e,t),It[e.name.value]=t}})})();function Lt(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function Rt(e,t){var n={kind:e.kind,definitions:[Lt(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=It[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(It[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=Lt(e,t);r&&n.definitions.push(r)}),n}Rt(b,`FeedProductFocusedMerchantCard`);var S={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`FeedCollectionCard`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`CollectionCard`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`collectionId`},arguments:[],directives:[]},{kind:`Field`,alias:{kind:`Name`,value:`collectionTitle`},name:{kind:`Name`,value:`title`},arguments:[],directives:[]},{kind:`Field`,alias:{kind:`Name`,value:`collectionAction`},name:{kind:`Name`,value:`action`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`url`},arguments:[],directives:[]}]}},{kind:`Field`,alias:{kind:`Name`,value:`collectionImage`},name:{kind:`Name`,value:`image`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]}]}},{kind:`Field`,alias:{kind:`Name`,value:`collectionOwner`},name:{kind:`Name`,value:`owner`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`kind`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`name`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`avatar`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`shop`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`uuid`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`shopifyId`},arguments:[],directives:[]},{kind:`Field`,alias:{kind:`Name`,value:`collectionSavingsIncentive`},name:{kind:`Name`,value:`shopCashIncentive`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ShopCashIncentiveFragment`},directives:[]}]}}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`productPreviews`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`productId`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`imageUrl`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`imageThumbhash`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`algorithm`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`name`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`score`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`version`},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:675}};S.loc.source={body:`#import "../../../data/fragments/ReducedImageFragment.graphql"
#import "../../../data/fragments/ShopCashIncentiveFragment.graphql"

fragment FeedCollectionCard on CollectionCard {
  collectionId
  collectionTitle: title
  collectionAction: action {
    url
  }
  collectionImage: image {
    ...ReducedImage
  }
  collectionOwner: owner {
    kind
    name
    avatar {
      ...ReducedImage
    }
    shop {
      id
      uuid
      shopifyId
      collectionSavingsIncentive: shopCashIncentive {
        ...ShopCashIncentiveFragment
      }
    }
  }
  productPreviews {
    productId
    imageUrl
    imageThumbhash
  }
  algorithm {
    name
    score
    version
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var zt={};function Bt(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!zt[t]&&(zt[t]=!0,!0)})}S.definitions=S.definitions.concat(Bt(s.definitions)),S.definitions=S.definitions.concat(Bt(c.definitions));function Vt(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){Vt(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){Vt(e,t)}),e.definitions&&e.definitions.forEach(function(e){Vt(e,t)})}var Ht={};(function(){S.definitions.forEach(function(e){if(e.name){var t=new Set;Vt(e,t),Ht[e.name.value]=t}})})();function Ut(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function Wt(e,t){var n={kind:e.kind,definitions:[Ut(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=Ht[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(Ht[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=Ut(e,t);r&&n.definitions.push(r)}),n}Wt(S,`FeedCollectionCard`);var Gt={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`FeedViewAllCard`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`ViewAllCard`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`icon`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`displayHints`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`iconOnly`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`action`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`url`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`label`},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:118}};Gt.loc.source={body:`fragment FeedViewAllCard on ViewAllCard {
  icon
  displayHints {
    iconOnly
  }
  action {
    url
    label
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};function Kt(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){Kt(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){Kt(e,t)}),e.definitions&&e.definitions.forEach(function(e){Kt(e,t)})}var qt={};(function(){Gt.definitions.forEach(function(e){if(e.name){var t=new Set;Kt(e,t),qt[e.name.value]=t}})})();function Jt(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function Yt(e,t){var n={kind:e.kind,definitions:[Jt(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=qt[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(qt[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=Jt(e,t);r&&n.definitions.push(r)}),n}Yt(Gt,`FeedViewAllCard`);var Xt={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`FeedShopCashBalanceCard`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`ShopCashBalanceContentNode`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`balance`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`amount`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`currencyCode`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`title`},arguments:[],directives:[]}]}}],loc:{start:0,end:119}};Xt.loc.source={body:`fragment FeedShopCashBalanceCard on ShopCashBalanceContentNode {
  balance {
    amount
    currencyCode
  }
  title
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};function Zt(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){Zt(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){Zt(e,t)}),e.definitions&&e.definitions.forEach(function(e){Zt(e,t)})}var Qt={};(function(){Xt.definitions.forEach(function(e){if(e.name){var t=new Set;Zt(e,t),Qt[e.name.value]=t}})})();function $t(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function en(e,t){var n={kind:e.kind,definitions:[$t(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=Qt[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(Qt[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=$t(e,t);r&&n.definitions.push(r)}),n}en(Xt,`FeedShopCashBalanceCard`);var C={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`FeedProductVariantCard`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`ProductVariantCard`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`displayHints`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`options`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`productVariant`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`title`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`price`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`currencyCode`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`amount`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`compareAtPrice`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`currencyCode`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`amount`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`inDefaultProductList`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`product`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`ProductCard`},directives:[]}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`overlayItems`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedOverlayItem`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`algorithm`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`name`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`score`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`version`},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:512}};C.loc.source={body:`#import "./OverlayItemFragment.graphql"
#import "../../../data/fragments/ProductCardFragment.graphql"

fragment FeedProductVariantCard on ProductVariantCard {
  displayHints {
    options
  }
  productVariant {
    id
    title
    price {
      currencyCode
      amount
    }
    compareAtPrice {
      currencyCode
      amount
    }
    inDefaultProductList

    product {
      id
      ...ProductCard
    }
  }
  overlayItems {
    ...FeedOverlayItem
  }
  algorithm {
    name
    score
    version
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var tn={};function nn(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!tn[t]&&(tn[t]=!0,!0)})}C.definitions=C.definitions.concat(nn(g.definitions)),C.definitions=C.definitions.concat(nn(oe.definitions));function rn(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){rn(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){rn(e,t)}),e.definitions&&e.definitions.forEach(function(e){rn(e,t)})}var an={};(function(){C.definitions.forEach(function(e){if(e.name){var t=new Set;rn(e,t),an[e.name.value]=t}})})();function on(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function sn(e,t){var n={kind:e.kind,definitions:[on(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=an[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(an[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=on(e,t);r&&n.definitions.push(r)}),n}sn(C,`FeedProductVariantCard`);var cn={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`ShoppingEvent`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`ShoppingEvent`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`handle`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`endDate`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`destinationUrl`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`giveaway`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`handle`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`eligibility`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`isClaimable`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`knownVoucherAmount`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`amount`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`currencyCode`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`screenCustomizations`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`name`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`screenName`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`medium`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`value`},arguments:[],directives:[]}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`discovery`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`topBannerEnabled`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`topBannerOnExploreAndCategoryPagesEnabled`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`media`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`handle`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`url`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`backgroundColor`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`texts`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`bannerTitle`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`bannerSubtitles`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`expandedBannerTitle`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`expandedBannerSubtitle`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`countdownText`},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:546}};cn.loc.source={body:`fragment ShoppingEvent on ShoppingEvent {
  handle
  endDate
  destinationUrl
  giveaway {
    handle
    eligibility
    isClaimable
    knownVoucherAmount {
      amount
      currencyCode
    }
    screenCustomizations {
      name
      screenName
      medium
      value
    }
  }
  discovery {
    topBannerEnabled
    topBannerOnExploreAndCategoryPagesEnabled
  }
  media {
    handle
    url
    backgroundColor
  }
  texts {
    bannerTitle
    bannerSubtitles
    expandedBannerTitle
    expandedBannerSubtitle
    countdownText
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};function ln(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){ln(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){ln(e,t)}),e.definitions&&e.definitions.forEach(function(e){ln(e,t)})}var un={};(function(){cn.definitions.forEach(function(e){if(e.name){var t=new Set;ln(e,t),un[e.name.value]=t}})})();function dn(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function fn(e,t){var n={kind:e.kind,definitions:[dn(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=un[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(un[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=dn(e,t);r&&n.definitions.push(r)}),n}fn(cn,`ShoppingEvent`);var w={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`FeedShoppingEventCard`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`ShoppingEventCard`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`shoppingEvent`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ShoppingEvent`},directives:[]}]}}]}}],loc:{start:0,end:142}};w.loc.source={body:`#import "./ShoppingEventFragment.graphql"

fragment FeedShoppingEventCard on ShoppingEventCard {
  shoppingEvent {
    ...ShoppingEvent
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var pn={};function mn(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!pn[t]&&(pn[t]=!0,!0)})}w.definitions=w.definitions.concat(mn(cn.definitions));function hn(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){hn(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){hn(e,t)}),e.definitions&&e.definitions.forEach(function(e){hn(e,t)})}var gn={};(function(){w.definitions.forEach(function(e){if(e.name){var t=new Set;hn(e,t),gn[e.name.value]=t}})})();function _n(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function vn(e,t){var n={kind:e.kind,definitions:[_n(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=gn[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(gn[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=_n(e,t);r&&n.definitions.push(r)}),n}vn(w,`FeedShoppingEventCard`);var T={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`FeedRichText`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`RichText`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`blockHints`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`alignment`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`horizontal`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`vertical`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`backgroundColor`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`backgroundStyle`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`formatOptions`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`lineSpacing`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`maxLines`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`textDirection`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`segments`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`action`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ResourceAction`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`fontColor`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`fontVariant`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`icon`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`image`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`text`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`traits`},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:482}};T.loc.source={body:`#import "../../../data/fragments/ReducedImageFragment.graphql"
#import "./ResourceActionFragment.graphql"

fragment FeedRichText on RichText {
  blockHints {
    alignment {
      horizontal
      vertical
    }
    backgroundColor
    backgroundStyle
    formatOptions
    lineSpacing
    maxLines
    textDirection
  }
  segments {
    action {
      ...ResourceAction
    }
    fontColor
    fontVariant
    icon
    image {
      ...ReducedImage
    }
    text
    traits
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var yn={};function bn(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!yn[t]&&(yn[t]=!0,!0)})}T.definitions=T.definitions.concat(bn(s.definitions)),T.definitions=T.definitions.concat(bn(u.definitions));function xn(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){xn(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){xn(e,t)}),e.definitions&&e.definitions.forEach(function(e){xn(e,t)})}var Sn={};(function(){T.definitions.forEach(function(e){if(e.name){var t=new Set;xn(e,t),Sn[e.name.value]=t}})})();function Cn(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function wn(e,t){var n={kind:e.kind,definitions:[Cn(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=Sn[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(Sn[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=Cn(e,t);r&&n.definitions.push(r)}),n}wn(T,`FeedRichText`);var E={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`FeedProductDetailsCard`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`ProductDetailsCard`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`displayHints`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`options`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`product`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`ProductCard`},directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedProductDailyDeal`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`overlayItems`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedOverlayItem`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`descriptors`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedRichText`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`algorithm`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`name`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`score`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`version`},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:483}};E.loc.source={body:`#import "../../../data/fragments/ProductCardFragment.graphql"
#import "./FeedProductDailyDealFragment.graphql"
#import "./OverlayItemFragment.graphql"
#import "./RichTextFragment.graphql"

fragment FeedProductDetailsCard on ProductDetailsCard {
  displayHints {
    options
  }
  product {
    id
    ...ProductCard
    ...FeedProductDailyDeal
  }
  overlayItems {
    ...FeedOverlayItem
  }
  descriptors {
    ...FeedRichText
  }
  algorithm {
    name
    score
    version
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var Tn={};function En(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!Tn[t]&&(Tn[t]=!0,!0)})}E.definitions=E.definitions.concat(En(oe.definitions)),E.definitions=E.definitions.concat(En(se.definitions)),E.definitions=E.definitions.concat(En(g.definitions)),E.definitions=E.definitions.concat(En(T.definitions));function Dn(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){Dn(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){Dn(e,t)}),e.definitions&&e.definitions.forEach(function(e){Dn(e,t)})}var On={};(function(){E.definitions.forEach(function(e){if(e.name){var t=new Set;Dn(e,t),On[e.name.value]=t}})})();function kn(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function An(e,t){var n={kind:e.kind,definitions:[kn(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=On[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(On[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=kn(e,t);r&&n.definitions.push(r)}),n}An(E,`FeedProductDetailsCard`);var D={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`FeedThreadCard`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`ThreadCard`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`conversation`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`title`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`lastUpdatedAt`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`recentProductImages`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]}]}}]}}]}}],loc:{start:0,end:216}};D.loc.source={body:`#import "../../../data/fragments/ReducedImageFragment.graphql"

fragment FeedThreadCard on ThreadCard {
  conversation {
    id
    title
    lastUpdatedAt
    recentProductImages {
      ...ReducedImage
    }
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var jn={};function Mn(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!jn[t]&&(jn[t]=!0,!0)})}D.definitions=D.definitions.concat(Mn(s.definitions));function Nn(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){Nn(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){Nn(e,t)}),e.definitions&&e.definitions.forEach(function(e){Nn(e,t)})}var Pn={};(function(){D.definitions.forEach(function(e){if(e.name){var t=new Set;Nn(e,t),Pn[e.name.value]=t}})})();function Fn(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function In(e,t){var n={kind:e.kind,definitions:[Fn(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=Pn[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(Pn[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=Fn(e,t);r&&n.definitions.push(r)}),n}In(D,`FeedThreadCard`);var O={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`FeedOrderDeliveryCard`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`OrderDeliveryCard`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`trackedItem`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`Delivery`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`sellerName`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`customName`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`status`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`deliveryFlags`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`etaInfo`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`formattedEtaDateAndTime`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`tracker`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`carrierInfo`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`name`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`imageUrl`},arguments:[],directives:[]}]}}]}}]}},{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`Order`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`__typename`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`uuid`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`name`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`loading`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`shippingMethod`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`paymentStatus`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`lineItems`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`nodes`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`productTitle`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`variantTitle`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`shopifyProductId`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`shopifyVariantId`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`currentTotalPrice`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`MoneyV2Fragment`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`image`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]}]}}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`deliveryStatus`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`displayStatus`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`markedAsDeliveredAt`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`markedAsDelivered`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`createdAt`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`deliveryType`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`etaInfo`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`formattedEta`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`formattedEtaTime`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`isFuture`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`effectiveTotalPrice`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`MoneyV2Fragment`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`totalPriceAfterOfferApplied`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`MoneyV2Fragment`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`totalPrice`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`MoneyV2Fragment`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`totalItemCount`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`deliveries`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`nodes`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`status`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`deliveredAt`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`deliveryMethodType`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`etaInfo`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`formattedEtaDateAndTime`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`tracker`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`trackingCode`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`trackingUrl`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`carrierInfo`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`imageUrl`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`name`},arguments:[],directives:[]}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`events`},arguments:[{kind:`Argument`,name:{kind:`Name`,value:`last`},value:{kind:`IntValue`,value:`1`}}],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`nodes`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`TrackerDeliveryEvent`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`happenedAt`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`message`},arguments:[],directives:[]}]}}]}}]}}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`shop`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`uuid`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`name`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`defaultHandle`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`inAppVisibilityStatus`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`shopifyId`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`visualTheme`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`LogoColors`},directives:[]},{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`logoImage`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]}]}}]}}]}}]}}]}}]}}],loc:{start:0,end:2201}};O.loc.source={body:`#import "../../../data/fragments/ReducedImageFragment.graphql"
#import "../../../data/fragments/MoneyV2Fragment.graphql"
#import "../../../data/fragments/LogoColorsFragment.graphql"

fragment FeedOrderDeliveryCard on OrderDeliveryCard {
  trackedItem {
    id
    ... on Delivery {
      id
      sellerName
      customName
      status
      deliveryFlags
      etaInfo {
        formattedEtaDateAndTime
      }
      tracker {
        carrierInfo {
          id
          name
          imageUrl
        }
      }
    }
    ... on Order {
      __typename
      id
      uuid
      name
      loading
      shippingMethod
      paymentStatus
      lineItems {
        nodes {
          id
          productTitle
          variantTitle
          shopifyProductId
          shopifyVariantId
          currentTotalPrice {
            ...MoneyV2Fragment
          }
          image {
            ...ReducedImage
          }
        }
      }
      deliveryStatus
      displayStatus
      markedAsDeliveredAt
      markedAsDelivered
      createdAt
      deliveryType
      etaInfo {
        formattedEta
        formattedEtaTime
        isFuture
      }
      effectiveTotalPrice {
        ...MoneyV2Fragment
      }
      totalPriceAfterOfferApplied {
        ...MoneyV2Fragment
      }
      totalPrice {
        ...MoneyV2Fragment
      }
      totalItemCount
      deliveries {
        nodes {
          id
          status
          deliveredAt
          deliveryMethodType
          etaInfo {
            formattedEtaDateAndTime
          }
          tracker {
            trackingCode
            trackingUrl
            carrierInfo {
              id
              imageUrl
              name
            }
          }
          events(last: 1) {
            nodes {
              ... on TrackerDeliveryEvent {
                happenedAt
                message
              }
            }
          }
        }
      }
      shop {
        id
        uuid
        name
        defaultHandle
        inAppVisibilityStatus
        shopifyId
        visualTheme {
          ...LogoColors
          id
          logoImage {
            ...ReducedImage
          }
        }
      }
    }
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var Ln={};function Rn(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!Ln[t]&&(Ln[t]=!0,!0)})}O.definitions=O.definitions.concat(Rn(s.definitions)),O.definitions=O.definitions.concat(Rn(ne.definitions)),O.definitions=O.definitions.concat(Rn(o.definitions));function zn(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){zn(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){zn(e,t)}),e.definitions&&e.definitions.forEach(function(e){zn(e,t)})}var Bn={};(function(){O.definitions.forEach(function(e){if(e.name){var t=new Set;zn(e,t),Bn[e.name.value]=t}})})();function Vn(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function Hn(e,t){var n={kind:e.kind,definitions:[Vn(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=Bn[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(Bn[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=Vn(e,t);r&&n.definitions.push(r)}),n}Hn(O,`FeedOrderDeliveryCard`);var Un={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`FeedCartCard`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`CartCard`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`cart`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`referral`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`totalQuantity`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`cartCost`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`totalPrice`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`amount`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`currencyCode`},arguments:[],directives:[]}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`lines`},arguments:[{kind:`Argument`,name:{kind:`Name`,value:`first`},value:{kind:`IntValue`,value:`2`}}],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`nodes`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`productVariant`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`variantImage`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`image`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`url`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`altText`},arguments:[],directives:[]}]}}]}}]}}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`shop`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`name`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`defaultHandle`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`visualTheme`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`logoImage`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`url`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`altText`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`brandSettings`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`colors`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`logoAverage`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`logoDominant`},arguments:[],directives:[]}]}}]}}]}}]}}]}}]}}],loc:{start:0,end:630}};Un.loc.source={body:`fragment FeedCartCard on CartCard {
  cart {
    id
    referral
    totalQuantity
    cartCost {
      totalPrice {
        amount
        currencyCode
      }
    }
    lines(first: 2) {
      nodes {
        productVariant {
          variantImage {
            image {
              url
              altText
            }
          }
        }
      }
    }
    shop {
      id
      name
      defaultHandle
      visualTheme {
        logoImage {
          url
          altText
        }
        brandSettings {
          colors {
            logoAverage
            logoDominant
          }
        }
      }
    }
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};function Wn(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){Wn(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){Wn(e,t)}),e.definitions&&e.definitions.forEach(function(e){Wn(e,t)})}var Gn={};(function(){Un.definitions.forEach(function(e){if(e.name){var t=new Set;Wn(e,t),Gn[e.name.value]=t}})})();function Kn(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function qn(e,t){var n={kind:e.kind,definitions:[Kn(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=Gn[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(Gn[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=Kn(e,t);r&&n.definitions.push(r)}),n}qn(Un,`FeedCartCard`);var k={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`FeedCartSetCard`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`CartSetCard`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`cartSet`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`totalQuantity`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`subtotals`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`MoneyV2Fragment`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`carts`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`referral`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`totalQuantity`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`shop`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`name`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`defaultHandle`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`websiteUrl`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`visualTheme`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`logoImage`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]}]}}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`lines`},arguments:[{kind:`Argument`,name:{kind:`Name`,value:`first`},value:{kind:`IntValue`,value:`50`}}],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`nodes`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`quantity`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`productVariant`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`title`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`product`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`title`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`slug`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`variantImage`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`image`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]}]}}]}}]}}]}}]}}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`destination`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`remainingShopCount`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`previewImages`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`visibleShops`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`name`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`defaultHandle`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`websiteUrl`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`visualTheme`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`logoImage`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]}]}}]}}]}}]}}],loc:{start:0,end:1083}};k.loc.source={body:`#import "../../../data/fragments/MoneyV2Fragment.graphql"
#import "../../../data/fragments/ReducedImageFragment.graphql"

fragment FeedCartSetCard on CartSetCard {
  cartSet {
    id
    totalQuantity
    subtotals {
      ...MoneyV2Fragment
    }
    carts {
      id
      referral
      totalQuantity
      shop {
        id
        name
        defaultHandle
        websiteUrl
        visualTheme {
          logoImage {
            ...ReducedImage
          }
        }
      }
      lines(first: 50) {
        nodes {
          id
          quantity
          productVariant {
            id
            title
            product {
              id
              title
              slug
            }
            variantImage {
              image {
                ...ReducedImage
              }
            }
          }
        }
      }
    }
  }
  destination
  remainingShopCount
  previewImages {
    ...ReducedImage
  }
  visibleShops {
    id
    name
    defaultHandle
    websiteUrl
    visualTheme {
      logoImage {
        ...ReducedImage
      }
    }
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var Jn={};function Yn(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!Jn[t]&&(Jn[t]=!0,!0)})}k.definitions=k.definitions.concat(Yn(ne.definitions)),k.definitions=k.definitions.concat(Yn(s.definitions));function Xn(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){Xn(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){Xn(e,t)}),e.definitions&&e.definitions.forEach(function(e){Xn(e,t)})}var Zn={};(function(){k.definitions.forEach(function(e){if(e.name){var t=new Set;Xn(e,t),Zn[e.name.value]=t}})})();function Qn(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function $n(e,t){var n={kind:e.kind,definitions:[Qn(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=Zn[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(Zn[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=Qn(e,t);r&&n.definitions.push(r)}),n}$n(k,`FeedCartSetCard`);var er={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`FeedCategoryCard`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`CategoryCard`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`categoryGid`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`displayHints`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`options`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`subcategories`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`categoryGid`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`imageUrl`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`title`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`url`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`title`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`url`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`imageUrl`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`videoSources`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`url`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`mimeType`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`backgroundColor`},arguments:[],directives:[]}]}}],loc:{start:0,end:247}};er.loc.source={body:`fragment FeedCategoryCard on CategoryCard {
  categoryGid
  displayHints {
    options
  }
  subcategories {
    categoryGid
    imageUrl
    title
    url
  }
  title
  url
  imageUrl
  videoSources {
    url
    mimeType
  }
  backgroundColor
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};function tr(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){tr(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){tr(e,t)}),e.definitions&&e.definitions.forEach(function(e){tr(e,t)})}var nr={};(function(){er.definitions.forEach(function(e){if(e.name){var t=new Set;tr(e,t),nr[e.name.value]=t}})})();function rr(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function ir(e,t){var n={kind:e.kind,definitions:[rr(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=nr[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(nr[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=rr(e,t);r&&n.definitions.push(r)}),n}ir(er,`FeedCategoryCard`);var ar={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`FeedCategoryProductGridCard`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`CategoryProductGridCard`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`backgroundColor`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`categoryKey`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`productPreviews`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`imageThumbhash`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`imageUrl`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`productId`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`title`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`url`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`title`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`url`},arguments:[],directives:[]}]}}],loc:{start:0,end:202}};ar.loc.source={body:`fragment FeedCategoryProductGridCard on CategoryProductGridCard {
  backgroundColor
  categoryKey
  productPreviews {
    imageThumbhash
    imageUrl
    productId
    title
    url
  }
  title
  url
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};function or(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){or(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){or(e,t)}),e.definitions&&e.definitions.forEach(function(e){or(e,t)})}var sr={};(function(){ar.definitions.forEach(function(e){if(e.name){var t=new Set;or(e,t),sr[e.name.value]=t}})})();function cr(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function lr(e,t){var n={kind:e.kind,definitions:[cr(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=sr[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(sr[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=cr(e,t);r&&n.definitions.push(r)}),n}lr(ar,`FeedCategoryProductGridCard`);var A={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`FeedCuratorInfoCard`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`CuratorInfoCard`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`text`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`image`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]}]}}]}}],loc:{start:0,end:157}};A.loc.source={body:`#import "../../../data/fragments/ReducedImageFragment.graphql"

fragment FeedCuratorInfoCard on CuratorInfoCard {
  text
  image {
    ...ReducedImage
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var ur={};function dr(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!ur[t]&&(ur[t]=!0,!0)})}A.definitions=A.definitions.concat(dr(s.definitions));function fr(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){fr(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){fr(e,t)}),e.definitions&&e.definitions.forEach(function(e){fr(e,t)})}var pr={};(function(){A.definitions.forEach(function(e){if(e.name){var t=new Set;fr(e,t),pr[e.name.value]=t}})})();function mr(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function hr(e,t){var n={kind:e.kind,definitions:[mr(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=pr[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(pr[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=mr(e,t);r&&n.definitions.push(r)}),n}hr(A,`FeedCuratorInfoCard`);var j={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`FeedUniversalProductCard`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`UniversalProductCard`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`displayHints`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`options`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`priceColor`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`highlightedProduct`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`ProductCard`},directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedProductDailyDeal`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`overlayItems`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedOverlayItem`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`algorithm`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`name`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`score`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`version`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`inferenceId`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`rerankerScore`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`cgSources`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`algorithmId`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`rank`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`version`},arguments:[],directives:[]}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`universalProductMetadata`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`clusterProductIds`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`shopCount`},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:611}};j.loc.source={body:`#import "../../../data/fragments/ProductCardFragment.graphql"
#import "./FeedProductDailyDealFragment.graphql"
#import "./OverlayItemFragment.graphql"

fragment FeedUniversalProductCard on UniversalProductCard {
  displayHints {
    options
    priceColor
  }
  highlightedProduct {
    id
    ...ProductCard
    ...FeedProductDailyDeal
  }
  overlayItems {
    ...FeedOverlayItem
  }
  algorithm {
    name
    score
    version
    inferenceId
    rerankerScore
    cgSources {
      algorithmId
      rank
      version
    }
  }
  universalProductMetadata {
    id
    clusterProductIds
    shopCount
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var gr={};function _r(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!gr[t]&&(gr[t]=!0,!0)})}j.definitions=j.definitions.concat(_r(oe.definitions)),j.definitions=j.definitions.concat(_r(se.definitions)),j.definitions=j.definitions.concat(_r(g.definitions));function vr(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){vr(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){vr(e,t)}),e.definitions&&e.definitions.forEach(function(e){vr(e,t)})}var yr={};(function(){j.definitions.forEach(function(e){if(e.name){var t=new Set;vr(e,t),yr[e.name.value]=t}})})();function br(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function xr(e,t){var n={kind:e.kind,definitions:[br(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=yr[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(yr[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=br(e,t);r&&n.definitions.push(r)}),n}xr(j,`FeedUniversalProductCard`);var M={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`FeedAsSeenInCard`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`AsSeenInCard`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`eyebrow`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`title`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`logos`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]},{kind:`Field`,alias:{kind:`Name`,value:`sizedUrl`},name:{kind:`Name`,value:`url`},arguments:[{kind:`Argument`,name:{kind:`Name`,value:`maxWidth`},value:{kind:`IntValue`,value:`240`}}],directives:[]}]}}]}}],loc:{start:0,end:195}};M.loc.source={body:`#import "../../../data/fragments/ReducedImageFragment.graphql"

fragment FeedAsSeenInCard on AsSeenInCard {
  eyebrow
  title
  logos {
    ...ReducedImage
    sizedUrl: url(maxWidth: 240)
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var Sr={};function Cr(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!Sr[t]&&(Sr[t]=!0,!0)})}M.definitions=M.definitions.concat(Cr(s.definitions));function wr(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){wr(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){wr(e,t)}),e.definitions&&e.definitions.forEach(function(e){wr(e,t)})}var Tr={};(function(){M.definitions.forEach(function(e){if(e.name){var t=new Set;wr(e,t),Tr[e.name.value]=t}})})();function Er(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function Dr(e,t){var n={kind:e.kind,definitions:[Er(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=Tr[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(Tr[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=Er(e,t);r&&n.definitions.push(r)}),n}Dr(M,`FeedAsSeenInCard`);var N={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`FeedSocialEmbedCard`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`SocialEmbedCard`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`platform`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`title`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`handle`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`action`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ResourceAction`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`items`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`image`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]},{kind:`Field`,alias:{kind:`Name`,value:`sizedUrl`},name:{kind:`Name`,value:`url`},arguments:[{kind:`Argument`,name:{kind:`Name`,value:`maxWidth`},value:{kind:`IntValue`,value:`360`}}],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`action`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ResourceAction`},directives:[]}]}}]}}]}}],loc:{start:0,end:356}};N.loc.source={body:`#import "../../../data/fragments/ReducedImageFragment.graphql"
#import "./ResourceActionFragment.graphql"

fragment FeedSocialEmbedCard on SocialEmbedCard {
  platform
  title
  handle
  action {
    ...ResourceAction
  }
  items {
    image {
      ...ReducedImage
      sizedUrl: url(maxWidth: 360)
    }
    action {
      ...ResourceAction
    }
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var Or={};function kr(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!Or[t]&&(Or[t]=!0,!0)})}N.definitions=N.definitions.concat(kr(s.definitions)),N.definitions=N.definitions.concat(kr(u.definitions));function Ar(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){Ar(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){Ar(e,t)}),e.definitions&&e.definitions.forEach(function(e){Ar(e,t)})}var jr={};(function(){N.definitions.forEach(function(e){if(e.name){var t=new Set;Ar(e,t),jr[e.name.value]=t}})})();function Mr(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function Nr(e,t){var n={kind:e.kind,definitions:[Mr(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=jr[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(jr[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=Mr(e,t);r&&n.definitions.push(r)}),n}Nr(N,`FeedSocialEmbedCard`);var P={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`FeedShopTheLookCard`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`ShopTheLookCard`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`eyebrow`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`title`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`aspectRatio`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`image`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]},{kind:`Field`,alias:{kind:`Name`,value:`sizedUrl`},name:{kind:`Name`,value:`url`},arguments:[{kind:`Argument`,name:{kind:`Name`,value:`maxWidth`},value:{kind:`IntValue`,value:`1200`}}],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`hotspots`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`x`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`y`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`product`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`product`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`universalProductId`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`title`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`url`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`shop`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`shopifyId`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`price`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`amount`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`currencyCode`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`images`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]},{kind:`Field`,alias:{kind:`Name`,value:`sizedUrl`},name:{kind:`Name`,value:`url`},arguments:[{kind:`Argument`,name:{kind:`Name`,value:`maxWidth`},value:{kind:`IntValue`,value:`320`}}],directives:[]}]}}]}}]}}]}}]}}],loc:{start:0,end:569}};P.loc.source={body:`#import "../../../data/fragments/ReducedImageFragment.graphql"

fragment FeedShopTheLookCard on ShopTheLookCard {
  eyebrow
  title
  aspectRatio
  image {
    ...ReducedImage
    sizedUrl: url(maxWidth: 1200)
  }
  hotspots {
    x
    y
    product {
      product {
        id
        universalProductId
        title
        url
        shop {
          id
          shopifyId
        }
        price {
          amount
          currencyCode
        }
        images {
          ...ReducedImage
          sizedUrl: url(maxWidth: 320)
        }
      }
    }
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var Pr={};function Fr(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!Pr[t]&&(Pr[t]=!0,!0)})}P.definitions=P.definitions.concat(Fr(s.definitions));function Ir(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){Ir(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){Ir(e,t)}),e.definitions&&e.definitions.forEach(function(e){Ir(e,t)})}var Lr={};(function(){P.definitions.forEach(function(e){if(e.name){var t=new Set;Ir(e,t),Lr[e.name.value]=t}})})();function Rr(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function zr(e,t){var n={kind:e.kind,definitions:[Rr(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=Lr[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(Lr[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=Rr(e,t);r&&n.definitions.push(r)}),n}zr(P,`FeedShopTheLookCard`);var F={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`FeedMediaCard`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`MediaCard`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`__typename`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`aspectRatio`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`items`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`__typename`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`eyebrow`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`title`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`subtitle`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`video`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`image`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`action`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`label`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`url`},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:286}};F.loc.source={body:`#import "../../../data/fragments/ReducedImageFragment.graphql"

fragment FeedMediaCard on MediaCard {
  __typename
  aspectRatio
  items {
    __typename
    eyebrow
    title
    subtitle
    video
    image {
      ...ReducedImage
    }
    action {
      label
      url
    }
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var Br={};function Vr(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!Br[t]&&(Br[t]=!0,!0)})}F.definitions=F.definitions.concat(Vr(s.definitions));function Hr(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){Hr(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){Hr(e,t)}),e.definitions&&e.definitions.forEach(function(e){Hr(e,t)})}var Ur={};(function(){F.definitions.forEach(function(e){if(e.name){var t=new Set;Hr(e,t),Ur[e.name.value]=t}})})();function Wr(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function Gr(e,t){var n={kind:e.kind,definitions:[Wr(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=Ur[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(Ur[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=Wr(e,t);r&&n.definitions.push(r)}),n}Gr(F,`FeedMediaCard`);var Kr={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`FeedPressCard`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`PressCard`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`__typename`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`heading`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`quote`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`source`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`quotes`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`__typename`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`quote`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`source`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`displayHints`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`__typename`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`variant`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`options`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`backgroundColor`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`sourceColor`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`quoteColor`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`avatarBackgroundColor`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`avatarTextColor`},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:295}};Kr.loc.source={body:`fragment FeedPressCard on PressCard {
  __typename
  heading
  quote
  source
  quotes {
    __typename
    id
    quote
    source
  }
  displayHints {
    __typename
    variant
    options
    backgroundColor
    sourceColor
    quoteColor
    avatarBackgroundColor
    avatarTextColor
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};function qr(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){qr(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){qr(e,t)}),e.definitions&&e.definitions.forEach(function(e){qr(e,t)})}var Jr={};(function(){Kr.definitions.forEach(function(e){if(e.name){var t=new Set;qr(e,t),Jr[e.name.value]=t}})})();function Yr(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function Xr(e,t){var n={kind:e.kind,definitions:[Yr(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=Jr[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(Jr[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=Yr(e,t);r&&n.definitions.push(r)}),n}Xr(Kr,`FeedPressCard`);var I={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`FeedStoriesCard`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`StoriesCard`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`__typename`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`title`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`displayHints`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`__typename`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`titleColor`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`stories`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`__typename`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`creator`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`title`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`video`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`thumbnail`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]}]}}]}}]}}],loc:{start:0,end:287}};I.loc.source={body:`#import "../../../data/fragments/ReducedImageFragment.graphql"

fragment FeedStoriesCard on StoriesCard {
  __typename
  title
  displayHints {
    __typename
    titleColor
  }
  stories {
    __typename
    creator
    title
    video
    thumbnail {
      ...ReducedImage
    }
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var Zr={};function Qr(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!Zr[t]&&(Zr[t]=!0,!0)})}I.definitions=I.definitions.concat(Qr(s.definitions));function $r(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){$r(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){$r(e,t)}),e.definitions&&e.definitions.forEach(function(e){$r(e,t)})}var ei={};(function(){I.definitions.forEach(function(e){if(e.name){var t=new Set;$r(e,t),ei[e.name.value]=t}})})();function ti(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function ni(e,t){var n={kind:e.kind,definitions:[ti(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=ei[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(ei[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=ti(e,t);r&&n.definitions.push(r)}),n}ni(I,`FeedStoriesCard`);var ri={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`FeedValuePillarsCard`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`ValuePillarsCard`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`__typename`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`pillars`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`__typename`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`title`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`body`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`displayHints`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`__typename`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`backgroundColor`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`sublabelColor`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`textColor`},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:205}};ri.loc.source={body:`fragment FeedValuePillarsCard on ValuePillarsCard {
  __typename
  pillars {
    __typename
    title
    body
  }
  displayHints {
    __typename
    backgroundColor
    sublabelColor
    textColor
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};function ii(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){ii(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){ii(e,t)}),e.definitions&&e.definitions.forEach(function(e){ii(e,t)})}var ai={};(function(){ri.definitions.forEach(function(e){if(e.name){var t=new Set;ii(e,t),ai[e.name.value]=t}})})();function oi(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function si(e,t){var n={kind:e.kind,definitions:[oi(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=ai[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(ai[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=oi(e,t);r&&n.definitions.push(r)}),n}si(ri,`FeedValuePillarsCard`);var L={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`FeedQuickLinksCard`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`QuickLinksCard`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`__typename`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`title`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`items`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`label`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`image`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`action`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ResourceAction`},directives:[]}]}}]}}]}}],loc:{start:0,end:285}};L.loc.source={body:`#import "../../../data/fragments/ReducedImageFragment.graphql"
#import "./ResourceActionFragment.graphql"

fragment FeedQuickLinksCard on QuickLinksCard {
  __typename
  title
  items {
    label
    image {
      ...ReducedImage
    }
    action {
      ...ResourceAction
    }
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var ci={};function li(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!ci[t]&&(ci[t]=!0,!0)})}L.definitions=L.definitions.concat(li(s.definitions)),L.definitions=L.definitions.concat(li(u.definitions));function ui(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){ui(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){ui(e,t)}),e.definitions&&e.definitions.forEach(function(e){ui(e,t)})}var di={};(function(){L.definitions.forEach(function(e){if(e.name){var t=new Set;ui(e,t),di[e.name.value]=t}})})();function fi(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function pi(e,t){var n={kind:e.kind,definitions:[fi(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=di[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(di[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=fi(e,t);r&&n.definitions.push(r)}),n}pi(L,`FeedQuickLinksCard`);var R={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`FeedPostCard`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`PostCard`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`algorithm`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`name`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`score`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`version`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`overlay`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`post`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`action`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ResourceAction`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`title`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedRichText`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`caption`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedRichText`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`subtitle`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedRichText`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`media`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`uuid`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`source`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`Image`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]}]}},{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`Video`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`url`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`height`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`width`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`previewImage`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]}]}}]}}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`shop`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`uuid`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`name`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`defaultHandle`},arguments:[],directives:[]},{kind:`Field`,alias:{kind:`Name`,value:`recognizedWebsiteUrl`},name:{kind:`Name`,value:`websiteUrl`},arguments:[{kind:`Argument`,name:{kind:`Name`,value:`includeRecognition`},value:{kind:`BooleanValue`,value:!0}}],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`shopifyId`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`inAppVisibilityStatus`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`shopCashIncentive`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ShopCashIncentiveFragment`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`visualTheme`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`LogoColors`},directives:[]},{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`logoImage`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]}]}}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`attachment`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`kind`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`title`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`subtitle`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`images`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`action`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ResourceAction`},directives:[]}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`items`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedProductCard`},directives:[]}]}}]}}]}}],loc:{start:0,end:1419}};R.loc.source={body:`#import "../../../data/fragments/ReducedImageFragment.graphql"
#import "../../../data/fragments/ShopCashIncentiveFragment.graphql"
#import "./ProductCardFragment.graphql"
#import "./RichTextFragment.graphql"
#import "./ResourceActionFragment.graphql"
#import "../../../data/fragments/LogoColorsFragment.graphql"

fragment FeedPostCard on PostCard {
  algorithm {
    name
    score
    version
  }
  overlay
  post {
    id
    action {
      ...ResourceAction
    }
    title {
      ...FeedRichText
    }
    caption {
      ...FeedRichText
    }
    subtitle {
      ...FeedRichText
    }
    media {
      uuid
      source {
        ... on Image {
          ...ReducedImage
        }
        ... on Video {
          url
          height
          width
          previewImage {
            ...ReducedImage
          }
        }
      }
    }
    shop {
      id
      uuid
      name
      defaultHandle
      recognizedWebsiteUrl: websiteUrl(includeRecognition: true)
      shopifyId
      inAppVisibilityStatus
      shopCashIncentive {
        ...ShopCashIncentiveFragment
      }
      visualTheme {
        ...LogoColors
        id
        logoImage {
          ...ReducedImage
        }
      }
    }
    attachment {
      kind
      title
      subtitle
      images {
        ...ReducedImage
      }
      action {
        ...ResourceAction
      }
    }
    items {
      ...FeedProductCard
    }
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var mi={};function z(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!mi[t]&&(mi[t]=!0,!0)})}R.definitions=R.definitions.concat(z(s.definitions)),R.definitions=R.definitions.concat(z(c.definitions)),R.definitions=R.definitions.concat(z(_.definitions)),R.definitions=R.definitions.concat(z(T.definitions)),R.definitions=R.definitions.concat(z(u.definitions)),R.definitions=R.definitions.concat(z(o.definitions));function hi(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){hi(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){hi(e,t)}),e.definitions&&e.definitions.forEach(function(e){hi(e,t)})}var gi={};(function(){R.definitions.forEach(function(e){if(e.name){var t=new Set;hi(e,t),gi[e.name.value]=t}})})();function _i(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function vi(e,t){var n={kind:e.kind,definitions:[_i(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=gi[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(gi[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=_i(e,t);r&&n.definitions.push(r)}),n}vi(R,`FeedPostCard`);var B={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`FeedContentLeaf`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`ContentNode`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedProductCard`},directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedMerchantCard`},directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedProductFocusedMerchantCard`},directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedActionCard`},directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedCollectionCard`},directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedViewAllCard`},directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedShopCashBalanceCard`},directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedProductVariantCard`},directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedShoppingEventCard`},directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedProductDetailsCard`},directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedRichText`},directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedThreadCard`},directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedOrderDeliveryCard`},directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedCartCard`},directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedCartSetCard`},directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedCategoryCard`},directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedCategoryProductGridCard`},directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedCuratorInfoCard`},directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedUniversalProductCard`},directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedAsSeenInCard`},directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedSocialEmbedCard`},directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedShopTheLookCard`},directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedMediaCard`},directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedPressCard`},directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedStoriesCard`},directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedValuePillarsCard`},directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedQuickLinksCard`},directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedPostCard`},directives:[]}]}}],loc:{start:0,end:1919}};B.loc.source={body:`#import "./ProductCardFragment.graphql"
#import "./MerchantCardFragment.graphql"
#import "./ProductFocusedMerchantCardFragment.graphql"
#import "./ActionCardFragment.graphql"
#import "./CollectionCardFragment.graphql"
#import "./ViewAllCardFragment.graphql"
#import "./ShopCashBalanceCardFragment.graphql"
#import "./ProductVariantCardFragment.graphql"
#import "./ShoppingEventCardFragment.graphql"
#import "./ProductDetailsCardFragment.graphql"
#import "./RichTextFragment.graphql"
#import "./ThreadCardFragment.graphql"
#import "./OrderDeliveryCardFragment.graphql"
#import "./CartCardFragment.graphql"
#import "./CartSetCardFragment.graphql"
#import "./CategoryCardFragment.graphql"
#import "./CategoryProductGridCardFragment.graphql"
#import "./CuratorInfoCardFragment.graphql"
#import "./FeedUniversalProductCardFragment.graphql"
#import "./AsSeenInCardFragment.graphql"
#import "./SocialEmbedCardFragment.graphql"
#import "./ShopTheLookCardFragment.graphql"
#import "./MediaCardFragment.graphql"
#import "./PressCardFragment.graphql"
#import "./StoriesCardFragment.graphql"
#import "./ValuePillarsCardFragment.graphql"
#import "./QuickLinksCardFragment.graphql"
#import "./PostCardFragment.graphql"

fragment FeedContentLeaf on ContentNode {
  ...FeedProductCard
  ...FeedMerchantCard
  ...FeedProductFocusedMerchantCard
  ...FeedActionCard
  ...FeedCollectionCard
  ...FeedViewAllCard
  ...FeedShopCashBalanceCard
  ...FeedProductVariantCard
  ...FeedShoppingEventCard
  ...FeedProductDetailsCard
  ...FeedRichText
  ...FeedThreadCard
  ...FeedOrderDeliveryCard
  ...FeedCartCard
  ...FeedCartSetCard
  ...FeedCategoryCard
  ...FeedCategoryProductGridCard
  ...FeedCuratorInfoCard
  ...FeedUniversalProductCard
  ...FeedAsSeenInCard
  ...FeedSocialEmbedCard
  ...FeedShopTheLookCard
  ...FeedMediaCard
  ...FeedPressCard
  ...FeedStoriesCard
  ...FeedValuePillarsCard
  ...FeedQuickLinksCard
  ...FeedPostCard
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var yi={};function V(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!yi[t]&&(yi[t]=!0,!0)})}B.definitions=B.definitions.concat(V(_.definitions)),B.definitions=B.definitions.concat(V(v.definitions)),B.definitions=B.definitions.concat(V(b.definitions)),B.definitions=B.definitions.concat(V(f.definitions)),B.definitions=B.definitions.concat(V(S.definitions)),B.definitions=B.definitions.concat(V(Gt.definitions)),B.definitions=B.definitions.concat(V(Xt.definitions)),B.definitions=B.definitions.concat(V(C.definitions)),B.definitions=B.definitions.concat(V(w.definitions)),B.definitions=B.definitions.concat(V(E.definitions)),B.definitions=B.definitions.concat(V(T.definitions)),B.definitions=B.definitions.concat(V(D.definitions)),B.definitions=B.definitions.concat(V(O.definitions)),B.definitions=B.definitions.concat(V(Un.definitions)),B.definitions=B.definitions.concat(V(k.definitions)),B.definitions=B.definitions.concat(V(er.definitions)),B.definitions=B.definitions.concat(V(ar.definitions)),B.definitions=B.definitions.concat(V(A.definitions)),B.definitions=B.definitions.concat(V(j.definitions)),B.definitions=B.definitions.concat(V(M.definitions)),B.definitions=B.definitions.concat(V(N.definitions)),B.definitions=B.definitions.concat(V(P.definitions)),B.definitions=B.definitions.concat(V(F.definitions)),B.definitions=B.definitions.concat(V(Kr.definitions)),B.definitions=B.definitions.concat(V(I.definitions)),B.definitions=B.definitions.concat(V(ri.definitions)),B.definitions=B.definitions.concat(V(L.definitions)),B.definitions=B.definitions.concat(V(R.definitions));function bi(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){bi(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){bi(e,t)}),e.definitions&&e.definitions.forEach(function(e){bi(e,t)})}var xi={};(function(){B.definitions.forEach(function(e){if(e.name){var t=new Set;bi(e,t),xi[e.name.value]=t}})})();function Si(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function Ci(e,t){var n={kind:e.kind,definitions:[Si(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=xi[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(xi[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=Si(e,t);r&&n.definitions.push(r)}),n}Ci(B,`FeedContentLeaf`);var H={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`SectionDisplayHints`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`SectionDisplayHints`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`backgroundMedia`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`source`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`Image`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]}]}},{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`Video`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`url`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`previewImage`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]}]}}]}}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`dominantCoverColor`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`overlayColor`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`backgroundColorHsl`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`wordmark`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`url`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`altText`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`sensitive`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`margin`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`top`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`bottom`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`gapSize`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`grouped`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`options`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`contentHints`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`options`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`experimentalOptions`},arguments:[],directives:[]}]}}],loc:{start:0,end:543}};H.loc.source={body:`#import "../../../data/fragments/ReducedImageFragment.graphql"

fragment SectionDisplayHints on SectionDisplayHints {
  backgroundMedia {
    source {
      ... on Image {
        ...ReducedImage
      }
      ... on Video {
        url
        previewImage {
          ...ReducedImage
        }
      }
    }
  }
  dominantCoverColor
  overlayColor
  backgroundColorHsl
  wordmark {
    url
    altText
    sensitive
  }
  margin {
    top
    bottom
  }
  gapSize
  grouped
  options
  contentHints {
    options
  }
  experimentalOptions
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var wi={};function Ti(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!wi[t]&&(wi[t]=!0,!0)})}H.definitions=H.definitions.concat(Ti(s.definitions));function Ei(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){Ei(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){Ei(e,t)}),e.definitions&&e.definitions.forEach(function(e){Ei(e,t)})}var Di={};(function(){H.definitions.forEach(function(e){if(e.name){var t=new Set;Ei(e,t),Di[e.name.value]=t}})})();function Oi(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function ki(e,t){var n={kind:e.kind,definitions:[Oi(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=Di[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(Di[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=Oi(e,t);r&&n.definitions.push(r)}),n}ki(H,`SectionDisplayHints`);var U={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`SectionMetadata`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`FeedSectionMetaData`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`sectionId`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`subSectionId`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`searchRequestId`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`candidateId`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`candidateRank`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`itemTypes`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`itemSize`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`recommendationContext`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`algorithm`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`name`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`score`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`version`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`sectionGid`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`attributes`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`domain`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`modelId`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`modelName`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`scope`},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:304}};U.loc.source={body:`fragment SectionMetadata on FeedSectionMetaData {
  sectionId
  subSectionId
  searchRequestId
  candidateId
  candidateRank
  itemTypes
  itemSize
  recommendationContext
  algorithm {
    name
    score
    version
  }
  sectionGid {
    attributes
    domain
    modelId
    modelName
    scope
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};function Ai(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){Ai(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){Ai(e,t)}),e.definitions&&e.definitions.forEach(function(e){Ai(e,t)})}var ji={};(function(){U.definitions.forEach(function(e){if(e.name){var t=new Set;Ai(e,t),ji[e.name.value]=t}})})();function Mi(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function Ni(e,t){var n={kind:e.kind,definitions:[Mi(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=ji[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(ji[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=Mi(e,t);r&&n.definitions.push(r)}),n}Ni(U,`SectionMetadata`);var W={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`ShopSubject`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`ShopSubject`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`subjectId`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`subjectKind`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`shop`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`uuid`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`shopifyId`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`followedByMe`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`name`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`productReviewAnalytics`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`totalProductReviews`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`totalProductRatings`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`averageRating`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`defaultHandle`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`visualTheme`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`LogoColors`},directives:[]},{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`logoImage`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`brandSettings`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`colors`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`logoDominant`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`coverDominant`},arguments:[],directives:[]}]}}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`shopCashIncentive`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ShopCashIncentiveFragment`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`websiteUrl`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`myshopifyDomain`},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:784}};W.loc.source={body:`#import "../../../data/fragments/ReducedImageFragment.graphql"
#import "../../../data/fragments/ShopCashIncentiveFragment.graphql"
#import "../../../data/fragments/LogoColorsFragment.graphql"

fragment ShopSubject on ShopSubject {
  subjectId
  subjectKind
  shop {
    id
    uuid
    shopifyId
    followedByMe
    name
    productReviewAnalytics {
      totalProductReviews
      totalProductRatings
      averageRating
    }
    defaultHandle
    visualTheme {
      ...LogoColors
      id
      logoImage {
        ...ReducedImage
      }
      brandSettings {
        id
        colors {
          id
          logoDominant
          coverDominant
        }
      }
    }
    shopCashIncentive {
      ...ShopCashIncentiveFragment
    }
    websiteUrl
    myshopifyDomain
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var Pi={};function Fi(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!Pi[t]&&(Pi[t]=!0,!0)})}W.definitions=W.definitions.concat(Fi(s.definitions)),W.definitions=W.definitions.concat(Fi(c.definitions)),W.definitions=W.definitions.concat(Fi(o.definitions));function Ii(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){Ii(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){Ii(e,t)}),e.definitions&&e.definitions.forEach(function(e){Ii(e,t)})}var Li={};(function(){W.definitions.forEach(function(e){if(e.name){var t=new Set;Ii(e,t),Li[e.name.value]=t}})})();function Ri(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function zi(e,t){var n={kind:e.kind,definitions:[Ri(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=Li[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(Li[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=Ri(e,t);r&&n.definitions.push(r)}),n}zi(W,`ShopSubject`);var G={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`SectionUnderlay`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`SectionUnderlay`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`ShopCashIncentiveUnderlay`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`action`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`url`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`incentive`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ShopCashIncentiveFragment`},directives:[]}]}}]}}]}}],loc:{start:0,end:244}};G.loc.source={body:`#import "../../../data/fragments/ShopCashIncentiveFragment.graphql"

fragment SectionUnderlay on SectionUnderlay {
  ... on ShopCashIncentiveUnderlay {
    action {
      url
    }
    incentive {
      ...ShopCashIncentiveFragment
    }
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var Bi={};function Vi(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!Bi[t]&&(Bi[t]=!0,!0)})}G.definitions=G.definitions.concat(Vi(c.definitions));function Hi(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){Hi(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){Hi(e,t)}),e.definitions&&e.definitions.forEach(function(e){Hi(e,t)})}var Ui={};(function(){G.definitions.forEach(function(e){if(e.name){var t=new Set;Hi(e,t),Ui[e.name.value]=t}})})();function Wi(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function Gi(e,t){var n={kind:e.kind,definitions:[Wi(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=Ui[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(Ui[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=Wi(e,t);r&&n.definitions.push(r)}),n}Gi(G,`SectionUnderlay`);var Ki={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`FeedAnnouncementCard`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`AnnouncementCard`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`title`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`text`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`subtitle`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`text`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`backgroundMedia`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`platform`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`source`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`Image`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]}]}},{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`Video`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`url`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`previewImage`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]}]}}]}}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`buttons`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`text`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`icon`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`action`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`accessibilityLabel`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`label`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`url`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`variant`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`displayHints`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`visibility`},arguments:[],directives:[]}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`displayHints`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`backgroundColor`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`title`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`textColor`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`textVariant`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`subtitle`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`textColor`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`textVariant`},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:802}};Ki.loc.source={body:`#import "../../../data/fragments/ReducedImageFragment.graphql"

# ContainerSection includes this in every feed query. Select only what the
# Shop Introduction banner slide renders.
fragment FeedAnnouncementCard on AnnouncementCard {
  id
  title {
    text
  }
  subtitle {
    text
  }
  backgroundMedia {
    platform
    source {
      ... on Image {
        ...ReducedImage
      }
      ... on Video {
        url
        previewImage {
          ...ReducedImage
        }
      }
    }
  }
  buttons {
    text
    icon
    action {
      accessibilityLabel
      label
      url
      variant
    }
    displayHints {
      visibility
    }
  }
  displayHints {
    backgroundColor
    title {
      textColor
      textVariant
    }
    subtitle {
      textColor
      textVariant
    }
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var qi={};function Ji(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!qi[t]&&(qi[t]=!0,!0)})}Ki.definitions=Ki.definitions.concat(Ji(s.definitions));function Yi(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){Yi(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){Yi(e,t)}),e.definitions&&e.definitions.forEach(function(e){Yi(e,t)})}var Xi={};(function(){Ki.definitions.forEach(function(e){if(e.name){var t=new Set;Yi(e,t),Xi[e.name.value]=t}})})();function Zi(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function Qi(e,t){var n={kind:e.kind,definitions:[Zi(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=Xi[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(Xi[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=Zi(e,t);r&&n.definitions.push(r)}),n}Qi(Ki,`FeedAnnouncementCard`);var K={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`ContainerSection`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`ContainerSection`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`__typename`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`direction`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`displayHints`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`SectionDisplayHints`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`header`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`SectionHeader`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`footer`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`SectionFooter`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`underlay`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`SectionUnderlay`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`metadata`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`SectionMetadata`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`action`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ResourceAction`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`subject`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`subjectId`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`subjectKind`},arguments:[],directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`ShopSubject`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`sections`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`__typename`},arguments:[],directives:[]},{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`ListSection`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`itemsPerRow`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`displayHints`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`SectionDisplayHints`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`header`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`SectionHeader`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`footer`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`SectionFooter`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`underlay`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`SectionUnderlay`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`metadata`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`SectionMetadata`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`action`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ResourceAction`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`subject`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`subjectId`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`subjectKind`},arguments:[],directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`ShopSubject`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`items`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`nodes`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedContentLeaf`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`pageInfo`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`hasNextPage`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`endCursor`},arguments:[],directives:[]}]}}]}}]}},{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`ShelfSection`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`itemsInView`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`displayHints`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`SectionDisplayHints`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`header`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`SectionHeader`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`footer`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`SectionFooter`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`underlay`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`SectionUnderlay`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`metadata`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`SectionMetadata`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`action`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ResourceAction`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`subject`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`subjectId`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`subjectKind`},arguments:[],directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`ShopSubject`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`items`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`nodes`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedContentLeaf`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`pageInfo`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`hasNextPage`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`endCursor`},arguments:[],directives:[]}]}}]}}]}},{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`SingleSection`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`item`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedAnnouncementCard`},directives:[]}]}}]}}]}}]}}],loc:{start:0,end:2175}};K.loc.source={body:`#import "./SectionHeaderFragment.graphql"
#import "./SectionFooterFragment.graphql"
#import "./SectionDisplayHintsFragment.graphql"
#import "./SectionMetadataFragment.graphql"
#import "./ShopSubjectFragment.graphql"
#import "./SectionUnderlayFragment.graphql"
#import "./ResourceActionFragment.graphql"
#import "./FeedContentLeafFragment.graphql"
#import "./AnnouncementCardFragment.graphql"

fragment ContainerSection on ContainerSection {
  __typename
  id
  direction
  displayHints {
    ...SectionDisplayHints
  }
  header {
    ...SectionHeader
  }
  footer {
    ...SectionFooter
  }
  underlay {
    ...SectionUnderlay
  }
  metadata {
    ...SectionMetadata
  }
  action {
    ...ResourceAction
  }
  subject {
    subjectId
    subjectKind
    ...ShopSubject
  }
  sections {
    __typename
    ... on ListSection {
      id
      itemsPerRow
      displayHints {
        ...SectionDisplayHints
      }
      header {
        ...SectionHeader
      }
      footer {
        ...SectionFooter
      }
      underlay {
        ...SectionUnderlay
      }
      metadata {
        ...SectionMetadata
      }
      action {
        ...ResourceAction
      }
      subject {
        subjectId
        subjectKind
        ...ShopSubject
      }
      items {
        nodes {
          ...FeedContentLeaf
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
    ... on ShelfSection {
      id
      itemsInView
      displayHints {
        ...SectionDisplayHints
      }
      header {
        ...SectionHeader
      }
      footer {
        ...SectionFooter
      }
      underlay {
        ...SectionUnderlay
      }
      metadata {
        ...SectionMetadata
      }
      action {
        ...ResourceAction
      }
      subject {
        subjectId
        subjectKind
        ...ShopSubject
      }
      items {
        nodes {
          ...FeedContentLeaf
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
    # Only the announcement item is consumed by the introduction slide.
    ... on SingleSection {
      id
      item {
        ...FeedAnnouncementCard
      }
    }
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var $i={};function q(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!$i[t]&&($i[t]=!0,!0)})}K.definitions=K.definitions.concat(q(m.definitions)),K.definitions=K.definitions.concat(q(h.definitions)),K.definitions=K.definitions.concat(q(H.definitions)),K.definitions=K.definitions.concat(q(U.definitions)),K.definitions=K.definitions.concat(q(W.definitions)),K.definitions=K.definitions.concat(q(G.definitions)),K.definitions=K.definitions.concat(q(u.definitions)),K.definitions=K.definitions.concat(q(B.definitions)),K.definitions=K.definitions.concat(q(Ki.definitions));function ea(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){ea(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){ea(e,t)}),e.definitions&&e.definitions.forEach(function(e){ea(e,t)})}var ta={};(function(){K.definitions.forEach(function(e){if(e.name){var t=new Set;ea(e,t),ta[e.name.value]=t}})})();function na(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function ra(e,t){var n={kind:e.kind,definitions:[na(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=ta[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(ta[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=na(e,t);r&&n.definitions.push(r)}),n}ra(K,`ContainerSection`);var J={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`FeedContent`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`ContentNode`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedContentLeaf`},directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`ContainerSection`},directives:[]}]}}],loc:{start:0,end:173}};J.loc.source={body:`#import "./FeedContentLeafFragment.graphql"
#import "./ContainerSectionFragment.graphql"

fragment FeedContent on ContentNode {
  ...FeedContentLeaf
  ...ContainerSection
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var ia={};function aa(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!ia[t]&&(ia[t]=!0,!0)})}J.definitions=J.definitions.concat(aa(B.definitions)),J.definitions=J.definitions.concat(aa(K.definitions));function oa(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){oa(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){oa(e,t)}),e.definitions&&e.definitions.forEach(function(e){oa(e,t)})}var sa={};(function(){J.definitions.forEach(function(e){if(e.name){var t=new Set;oa(e,t),sa[e.name.value]=t}})})();function ca(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function la(e,t){var n={kind:e.kind,definitions:[ca(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=sa[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(sa[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=ca(e,t);r&&n.definitions.push(r)}),n}la(J,`FeedContent`);var Y={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`ListSection`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`ListSection`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`itemsPerRow`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`displayHints`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`SectionDisplayHints`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`subject`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`subjectId`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`subjectKind`},arguments:[],directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`ShopSubject`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`header`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`SectionHeader`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`footer`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`SectionFooter`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`underlay`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`SectionUnderlay`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`metadata`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`SectionMetadata`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`action`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ResourceAction`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`items`},arguments:[{kind:`Argument`,name:{kind:`Name`,value:`after`},value:{kind:`Variable`,name:{kind:`Name`,value:`itemsAfter`}}}],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`nodes`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedContent`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`pageInfo`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`hasNextPage`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`endCursor`},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:833}};Y.loc.source={body:`#import "./SectionHeaderFragment.graphql"
#import "./SectionFooterFragment.graphql"
#import "./FeedContentFragment.graphql"
#import "./SectionDisplayHintsFragment.graphql"
#import "./SectionMetadataFragment.graphql"
#import "./ShopSubjectFragment.graphql"
#import "./SectionUnderlayFragment.graphql"
#import "./ResourceActionFragment.graphql"

fragment ListSection on ListSection {
  id
  itemsPerRow
  displayHints {
    ...SectionDisplayHints
  }
  subject {
    subjectId
    subjectKind
    ...ShopSubject
  }
  header {
    ...SectionHeader
  }
  footer {
    ...SectionFooter
  }
  underlay {
    ...SectionUnderlay
  }
  metadata {
    ...SectionMetadata
  }
  action {
    ...ResourceAction
  }
  items(after: $itemsAfter) {
    nodes {
      ...FeedContent
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var ua={};function X(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!ua[t]&&(ua[t]=!0,!0)})}Y.definitions=Y.definitions.concat(X(m.definitions)),Y.definitions=Y.definitions.concat(X(h.definitions)),Y.definitions=Y.definitions.concat(X(J.definitions)),Y.definitions=Y.definitions.concat(X(H.definitions)),Y.definitions=Y.definitions.concat(X(U.definitions)),Y.definitions=Y.definitions.concat(X(W.definitions)),Y.definitions=Y.definitions.concat(X(G.definitions)),Y.definitions=Y.definitions.concat(X(u.definitions));function da(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){da(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){da(e,t)}),e.definitions&&e.definitions.forEach(function(e){da(e,t)})}var fa={};(function(){Y.definitions.forEach(function(e){if(e.name){var t=new Set;da(e,t),fa[e.name.value]=t}})})();function pa(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function ma(e,t){var n={kind:e.kind,definitions:[pa(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=fa[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(fa[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=pa(e,t);r&&n.definitions.push(r)}),n}ma(Y,`ListSection`);var Z={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`ShelfSection`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`ShelfSection`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`displayHints`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`SectionDisplayHints`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`header`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`SectionHeader`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`footer`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`SectionFooter`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`underlay`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`SectionUnderlay`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`metadata`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`SectionMetadata`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`action`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ResourceAction`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`itemsInView`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`subject`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`subjectId`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`subjectKind`},arguments:[],directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`ShopSubject`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`items`},arguments:[{kind:`Argument`,name:{kind:`Name`,value:`after`},value:{kind:`Variable`,name:{kind:`Name`,value:`itemsAfter`}}}],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`nodes`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`FeedContent`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`pageInfo`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`hasNextPage`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`endCursor`},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:835}};Z.loc.source={body:`#import "./SectionHeaderFragment.graphql"
#import "./SectionFooterFragment.graphql"
#import "./FeedContentFragment.graphql"
#import "./SectionDisplayHintsFragment.graphql"
#import "./SectionMetadataFragment.graphql"
#import "./ShopSubjectFragment.graphql"
#import "./SectionUnderlayFragment.graphql"
#import "./ResourceActionFragment.graphql"

fragment ShelfSection on ShelfSection {
  id
  displayHints {
    ...SectionDisplayHints
  }
  header {
    ...SectionHeader
  }
  footer {
    ...SectionFooter
  }
  underlay {
    ...SectionUnderlay
  }
  metadata {
    ...SectionMetadata
  }
  action {
    ...ResourceAction
  }
  itemsInView
  subject {
    subjectId
    subjectKind
    ...ShopSubject
  }
  items(after: $itemsAfter) {
    nodes {
      ...FeedContent
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var ha={};function Q(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!ha[t]&&(ha[t]=!0,!0)})}Z.definitions=Z.definitions.concat(Q(m.definitions)),Z.definitions=Z.definitions.concat(Q(h.definitions)),Z.definitions=Z.definitions.concat(Q(J.definitions)),Z.definitions=Z.definitions.concat(Q(H.definitions)),Z.definitions=Z.definitions.concat(Q(U.definitions)),Z.definitions=Z.definitions.concat(Q(W.definitions)),Z.definitions=Z.definitions.concat(Q(G.definitions)),Z.definitions=Z.definitions.concat(Q(u.definitions));function ga(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){ga(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){ga(e,t)}),e.definitions&&e.definitions.forEach(function(e){ga(e,t)})}var _a={};(function(){Z.definitions.forEach(function(e){if(e.name){var t=new Set;ga(e,t),_a[e.name.value]=t}})})();function va(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function ya(e,t){var n={kind:e.kind,definitions:[va(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=_a[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(_a[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=va(e,t);r&&n.definitions.push(r)}),n}ya(Z,`ShelfSection`);var $={kind:`Document`,definitions:[{kind:`OperationDefinition`,operation:`query`,name:{kind:`Name`,value:`FeedSection`},variableDefinitions:[{kind:`VariableDefinition`,variable:{kind:`Variable`,name:{kind:`Name`,value:`sectionGid`}},type:{kind:`NonNullType`,type:{kind:`NamedType`,name:{kind:`Name`,value:`FeedSectionGID`}}},directives:[]},{kind:`VariableDefinition`,variable:{kind:`Variable`,name:{kind:`Name`,value:`maxSubsections`}},type:{kind:`NamedType`,name:{kind:`Name`,value:`Int`}},directives:[]},{kind:`VariableDefinition`,variable:{kind:`Variable`,name:{kind:`Name`,value:`itemsAfter`}},type:{kind:`NamedType`,name:{kind:`Name`,value:`String`}},directives:[]}],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`feedSection`},arguments:[{kind:`Argument`,name:{kind:`Name`,value:`sectionGid`},value:{kind:`Variable`,name:{kind:`Name`,value:`sectionGid`}}},{kind:`Argument`,name:{kind:`Name`,value:`maxSubsections`},value:{kind:`Variable`,name:{kind:`Name`,value:`maxSubsections`}}}],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`ListSection`},directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`ShelfSection`},directives:[]}]}}]}}],loc:{start:0,end:351}};$.loc.source={body:`#import "./ListSectionFragment.graphql"
#import "./ShelfSectionFragment.graphql"
#import "./SectionMetadataFragment.graphql"

query FeedSection(
  $sectionGid: FeedSectionGID!
  $maxSubsections: Int
  $itemsAfter: String
) {
  feedSection(sectionGid: $sectionGid, maxSubsections: $maxSubsections) {
    id
    ...ListSection
    ...ShelfSection
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var ba={};function xa(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!ba[t]&&(ba[t]=!0,!0)})}$.definitions=$.definitions.concat(xa(Y.definitions)),$.definitions=$.definitions.concat(xa(Z.definitions)),$.definitions=$.definitions.concat(xa(U.definitions));function Sa(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){Sa(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){Sa(e,t)}),e.definitions&&e.definitions.forEach(function(e){Sa(e,t)})}var Ca={};(function(){$.definitions.forEach(function(e){if(e.name){var t=new Set;Sa(e,t),Ca[e.name.value]=t}})})();function wa(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function Ta(e,t){var n={kind:e.kind,definitions:[wa(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=Ca[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(Ca[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=wa(e,t);r&&n.definitions.push(r)}),n}Ta($,`FeedSection`);function Ea(e){return(t,n)=>{var r;if(!n||typeof n!=`object`)return!1;let i=n[e];if(!i||typeof i!=`object`||[`UNAUTHORIZED`,`UNAUTHENTICATED`,`FORBIDDEN`,`SESSION_EXPIRED`].includes(String((r=t.extensions)==null?void 0:r.code)))return!1;let a=t.path;return(a==null?void 0:a[0])===e&&a.length>=4&&a[a.length-3]===`collectionOwner`&&a[a.length-2]===`shop`&&a[a.length-1]===`collectionSavingsIncentive`}}var Da=Ea(`feed`),Oa=Ea(`feedSection`);function ka({sectionId:r}){let a=e(),[o]=t($,{errorPolicy:`none`,context:{isRecoverableGraphqlError:Oa}}),{send:s}=ae(()=>({async fetchMoreItems({endCursor:e}){var t;let{data:s,error:c}=await o({variables:{sectionGid:r,maxSubsections:1,itemsAfter:e||null},fetchPolicy:`network-only`});if(c||!(s!=null&&(t=s.feedSection)!=null&&t[0]))return;let l=s.feedSection[0];!i(l)||n(l)||a.cache.modify({id:a.cache.identify({__typename:l.__typename,id:l.id}),fields:{items:t=>{var n;return t&&(e?((n=t.pageInfo)==null?void 0:n.endCursor)===e?{...t,pageInfo:l.items.pageInfo,nodes:[...t.nodes||[],...l.items.nodes]}:t:l.items)}}})}}));return s}export{ue as _,J as a,U as c,T as d,cn as f,pe as g,u as h,Y as i,H as l,m,Da as n,G as o,h as p,Z as r,W as s,ka as t,D as u,le as v,ce as y};
//# sourceMappingURL=useFetchMoreItems-Cl6JCSgJ.js.map