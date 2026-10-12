import{o as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{n,t as r}from"./jsx-runtime-CSuk6psM.js";import{t as i}from"./useMutation-CyiORk-y.js";import{t as a}from"./useTranslation-pNNkanqr.js";import{t as o}from"./defineProperty-BbfpZ9Tg.js";import{O as s,S as c,y as l}from"./components-D-pkByQq.js";import{c as u}from"./_virtual_permissions-45_EbSPd.js";import{t as d}from"./href-Dc8Pjj-5.js";import{i as f}from"./openTelemetry-C-b-vFUe.js";import{t as p}from"./errorLogger-B35uBGb0.js";import{a as m,s as h}from"./batchMiddlewareFlush-CNbc2eXL.js";import{n as g,r as _}from"./AuthenticationProvider-B-Yrcpxk.js";import{n as v}from"./types-Bl7ZDWSI.js";import{t as y}from"./useRouteHandle-W2YDvMqC.js";import{n as b,t as x}from"./types-hN7lqqf0.js";import{t as S}from"./createGuestUser-WQsrpODm.js";import{t as C}from"./useResolvePromise-BU_pbyZo.js";import{t as w}from"./buildResourceUrl-C4n3ilbW.js";import{i as T,n as ee}from"./useExperimentExposure-RcNozMld.js";import{t as E}from"./LocalizableError-CrZf7nL7.js";import{t as te}from"./postJsonAction-DtaJTRp8.js";import{o as D,r as ne,t as O}from"./ShopCashIncentiveFragment-DnUntjyt.js";import{t as re}from"./VisualThemeFragment-Cjx_DH0a.js";import{t as k}from"./MoneyV2Fragment-L6bxRLtL.js";import{t as ie}from"./SellingPlanAllocationFragment-DhVOF1Xf.js";var ae=n(),A=e(t(),1),j=d(`/web/api/cart/item-count`);function oe({skip:e}){var t;let n=s(`root`),{userAuthState:r,currentUser:i}=g(),{data:a,load:o}=u({key:`cart-item-count`}),[c,l]=(0,A.useState)(),d=(0,A.useRef)(null),f=i==null?void 0:i.id,p=f===(n==null||(t=n.userData)==null||(t=t.currentUser)==null?void 0:t.id),m=(0,A.useMemo)(()=>{var e;return n==null||(e=n.initialCartItemCount)==null?void 0:e.catch(()=>null)},[n==null?void 0:n.initialCartItemCount]),h=(0,A.useCallback)(()=>l(null),[]);C({promiseOrValue:p?m:void 0,onResolved:l,onResolvedNull:h,errorContext:`Error resolving initial cart item count promise`});let v=r!==_.Anonymous&&r!==_.PhoneOnlyVerified,y=p&&m!==void 0&&c!==null,b=(0,A.useCallback)(()=>{d.current=f??null,o(j)},[f,o]);return(0,A.useEffect)(()=>{e||!v||y||d.current!==f&&b()},[e,v,y,f,b]),{itemCount:v?(a==null?void 0:a.totalItemCount)??(p?c:null)??void 0:void 0,reloadItemCount:b}}var se=d(`/web/api/cart`);function ce({includeCartRedesignFields:e=!1}={}){var t,n,r,i,a,o;let c=s(`routes/cart`),l=u({key:`cart-data`}),d=u({key:`cart-data-pagination`}),f=u({key:`cart-data-promotions`}),{userAuthState:p}=g(),m=e||void 0,h=(0,A.useRef)(null),[v,y]=(0,A.useState)(),[b,x]=(0,A.useState)((c==null?void 0:c.carts)===null),[S,T]=(0,A.useState)(),[ee,E]=(0,A.useState)(),te=(0,A.useCallback)(e=>{T(e),y(e),x(!0)},[]),D=(0,A.useCallback)(()=>{T(null),x(!0)},[]);C({promiseOrValue:c==null?void 0:c.carts,onResolved:te,onResolvedNull:D,errorContext:`Error resolving cart data promise`}),C({promiseOrValue:c==null?void 0:c.cartPromotionCardData,onResolved:E,errorContext:`Error resolving promotion announcement card data promise`});let ne=(0,A.useCallback)(e=>{let t=new Map(e.map(e=>[e.id,e.recommendations]));y(e=>e&&{...e,nodes:e.nodes.map(e=>{let n=t.get(e.id);return e.recommendations===void 0&&n!==void 0?{...e,recommendations:n}:e})})},[]);C({promiseOrValue:c==null?void 0:c.cartRecommendations,onResolved:ne,errorContext:`Error resolving cart recommendations promise`}),C({promiseOrValue:(t=l.data)==null?void 0:t.carts,onResolved:te,onResolvedNull:D,errorContext:`Error resolving carts data promise`}),C({promiseOrValue:(n=l.data)==null?void 0:n.cartPromotionCardData,onResolved:E,errorContext:`Error resolving promotion announcement card fetcher data promise`}),C({promiseOrValue:(r=f.data)==null?void 0:r.cartPromotionCardData,onResolved:E,errorContext:`Error resolving promotion announcement card refetch promise`});let O=p!==_.Anonymous&&p!==_.PhoneOnlyVerified,re=v!==void 0||!!(c!=null&&c.carts),{load:k}=l,ie=(0,A.useCallback)(()=>{!O||re||l.data||l.state!==`idle`||k(w(se,{fetchPromotions:!1,includeRecommendations:m}))},[O,re,l.data,l.state,k,m]),ae=(0,A.useRef)(!1);(0,A.useEffect)(()=>{l.state===`idle`&&(ae.current=!1)},[l.state]);let j=(0,A.useCallback)(({fetchPromotions:e=!0}={})=>{let t=e||ae.current;ae.current=t,k(w(se,{fetchPromotions:t,includeRecommendations:m}))},[k,m]),oe=(0,A.useCallback)(async()=>{f.state===`idle`&&await f.load(w(se,{fetchPromotions:!0,fetchCart:!1}))},[]),ce=(0,A.useCallback)(e=>{y(t=>{let n=new Set(t==null?void 0:t.nodes.map(e=>e.id)),r=new Map(e.nodes.map(e=>[e.id,e])),i=(t==null?void 0:t.nodes.map(e=>r.get(e.id)??e))||[],a=e.nodes.filter(e=>!n.has(e.id));return{...e,nodes:[...i,...a]}})},[]);C({promiseOrValue:(i=d.data)==null?void 0:i.carts,onResolved:ce,errorContext:`Error resolving fetch more carts data promise`});let{hasNextPage:M,endCursor:N}=(v==null?void 0:v.pageInfo)||{hasNextPage:!1};(0,A.useEffect)(()=>{h.current=null},[(a=l.data)==null?void 0:a.carts,c==null?void 0:c.carts]);let P=(0,A.useCallback)(()=>{M&&d.state===`idle`&&N!==h.current&&(h.current=N,d.load(w(se,{after:N,fetchPromotions:!1,includeRecommendations:m})))},[M,d,N,m]),le=(0,A.useCallback)(e=>{y(t=>{if(!t)return;let n=t.nodes.find(t=>t.id===e.id);if(!n)return t.pageInfo.hasNextPage?t:{...t,totalItemCount:t.totalItemCount+e.totalQuantity,nodes:[e,...t.nodes]};let r=t.totalItemCount===void 0?t.totalItemCount:Math.max(0,t.totalItemCount+e.totalQuantity-n.totalQuantity);return{...t,totalItemCount:r,nodes:t.nodes.map(t=>t.id===e.id?{...t,...e}:t)}})},[]),ue=(0,A.useCallback)(e=>{y(t=>{if(!t)return;let n=t.nodes.find(t=>t.id===e);return n?{...t,totalItemCount:Math.max(0,t.totalItemCount-n.totalQuantity),nodes:t.nodes.filter(t=>t.id!==e)}:t})},[]),de=((o=l.data)==null?void 0:o.carts)!==void 0&&l.data.carts!==S;return{carts:v,cartPromotionCardData:ee,isLoading:l.state===`loading`||de||c!==void 0&&O&&!b,loadCarts:ie,refetch:j,refetchPromotions:oe,fetchMore:P,updateCart:le,removeCart:ue}}var M=`v_151ee815`;function N({handle:e,experiments:t}){let n=t==null?void 0:t.find(t=>t.startsWith(e));if(!n)return;let[,r]=n.split(`=`);return r}var P=(e,t)=>{let n=s(`root`),r=n==null?void 0:n.flags;return(0,A.useMemo)(()=>n!=null&&n.isCookiesConsentRequired&&!(n!=null&&n.hasConsentedAnalytics)||!r?t:N({handle:e,experiments:r==null?void 0:r.experiments})||t,[e,r,n==null?void 0:n.isCookiesConsentRequired,n==null?void 0:n.hasConsentedAnalytics,t])};function le(){let e=P(T),t=ee(),{pageType:n}=y(),r=(0,A.useCallback)(()=>{t({handle:T,variant:e})},[t,e]),i=e===M;return{variant:e,isEnabled:i,includeCartRedesignFields:i&&n===v.Cart,logExposure:r}}var ue=d(`/web/api/preferred-pay-address`);function de(){let{currentUser:e}=g(),t=e==null?void 0:e.id,n=(0,A.useRef)(null);return(0,A.useCallback)(()=>{var e;if(!t)return Promise.resolve(void 0);if(((e=n.current)==null?void 0:e.userId)===t)return n.current.address;let r=fetch(ue,{credentials:`same-origin`,cache:`no-store`}).then(e=>e.json()).then(({mailingAddress:e,error:t})=>{if(t)throw Error(t);return e??void 0}).catch(()=>{var e;((e=n.current)==null?void 0:e.address)===r&&(n.current=null)});return n.current={userId:t,address:r},r},[t])}var fe=new Set,pe=d(`/web/api/cart/shop`);function me(){let{key:e}=l(),{data:t,load:n}=u({key:`shop-cart`}),[r,i]=(0,A.useState)(()=>new Map),[a,o]=(0,A.useState)({locationKey:e,shopIds:fe}),s=a.locationKey===e?a.shopIds:fe,c=(0,A.useRef)(null),d=(0,A.useCallback)(({shopId:t,cart:n,error:r})=>{if(t){if(c.current===t&&(c.current=null),r){o(n=>({locationKey:e,shopIds:new Set(n.locationKey===e?n.shopIds:fe).add(t)}));return}i(e=>e.has(t)?e:new Map(e).set(t,n))}},[e]);return C({promiseOrValue:t,onResolved:d,errorContext:`Error resolving shop cart data`}),{shopCarts:r,failedShopIds:s,loadShopCart:(0,A.useCallback)(e=>{c.current!==e&&(c.current=e,n(w(pe,{shopId:e})))},[n]),updateShopCart:(0,A.useCallback)(e=>{i(t=>{let n=t.get(e.shop.id);return new Map(t).set(e.shop.id,n?{...n,...e}:e)})},[]),removeShopCart:(0,A.useCallback)(e=>{i(t=>{var n;let r=(n=[...t].find(([,t])=>(t==null?void 0:t.id)===e))==null?void 0:n[0];return r?new Map(t).set(r,null):t})},[])}}var he=class extends E{constructor(e,t){super(e.message??``,t),o(this,`code`,void 0),this.code=e.code,this.name=`CartError`,this.message=this.localizeErrorMessage(e.message)}localizeErrorMessage(e){let t={CART_PRODUCT_NOT_FOUND:this.t(`LocalizedErrorMessage.CartProductNotFound`),CART_PRODUCT_OUT_OF_STOCK:this.t(`LocalizedErrorMessage.CartProductOutOfStock`),CART_SHOP_INELIGIBLE:this.t(`LocalizedErrorMessage.CartShopNotEligible`),CART_PRODUCT_NOT_ENOUGH_STOCK:this.t(`LocalizedErrorMessage.CartProductNotEnoughStock`),CART_PRODUCT_QUANTITY_INVALID:this.t(`LocalizedErrorMessage.CartProductQuantityInvalid`),CART_PRODUCT_STOCK_LIMIT_REACHED:this.t(`LocalizedErrorMessage.CartProductStockLimitReached`)};return this.code===`CART_VALIDATION_CUSTOM`?e!=null&&e.trim().length?e:this.t(`LocalizedErrorMessage.Default`):t[this.code]??this.t(`LocalizedErrorMessage.Default`)}},F={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`ShopInfo`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`Shop`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`uuid`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`name`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`followedByMe`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`websiteUrl`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`shareUrl`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`shopNetwork`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`nativeProductPagesEnabled`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`storeEligible`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`defaultHandle`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`visualTheme`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`VisualTheme`},directives:[]}]}}]}}],loc:{start:0,end:242}};F.loc.source={body:`#import "./VisualThemeFragment.graphql"

fragment ShopInfo on Shop {
  id
  uuid
  name
  followedByMe
  websiteUrl
  shareUrl
  shopNetwork
  nativeProductPagesEnabled
  storeEligible
  defaultHandle
  visualTheme {
    ...VisualTheme
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var ge={};function _e(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!ge[t]&&(ge[t]=!0,!0)})}F.definitions=F.definitions.concat(_e(re.definitions));function I(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){I(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){I(e,t)}),e.definitions&&e.definitions.forEach(function(e){I(e,t)})}var ve={};(function(){F.definitions.forEach(function(e){if(e.name){var t=new Set;I(e,t),ve[e.name.value]=t}})})();function ye(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function L(e,t){var n={kind:e.kind,definitions:[ye(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=ve[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(ve[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=ye(e,t);r&&n.definitions.push(r)}),n}L(F,`ShopInfo`);var R={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`CartOfferFragment`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`CartOffer`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`title`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`description`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`discountSummary`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`addToCartSummary`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`percentThresholdMet`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`hideProgressBar`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`source`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`ShopCashOffer`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`adResponseId`},arguments:[],directives:[]}]}},{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`ShopCashCashbackIncentive`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`__typename`},arguments:[],directives:[]}]}},{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`AutomaticDiscount`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`discountAmount`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`MoneyV2Fragment`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`discountPercentage`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`discountType`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`discountClass`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`constraints`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`type`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`text`},arguments:[],directives:[]}]}}]}},{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`FreeDeliveryCartOffer`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:745}};R.loc.source={body:`#import "../../../data/fragments/MoneyV2Fragment.graphql"

fragment CartOfferFragment on CartOffer {
  id
  title
  description
  discountSummary
  addToCartSummary
  percentThresholdMet
  hideProgressBar
  source {
    ... on ShopCashOffer {
      id
      adResponseId # including for legacy reasons; this can be removed once all callsites are using shopCashIncentive and cacheConfig gets updated
    }
    ... on ShopCashCashbackIncentive {
      __typename
    }
    ... on AutomaticDiscount {
      id
      discountAmount {
        ...MoneyV2Fragment
      }
      discountPercentage
      discountType
      discountClass
      constraints {
        type
        text
      }
    }
    ... on FreeDeliveryCartOffer {
      id
    }
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var be={};function xe(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!be[t]&&(be[t]=!0,!0)})}R.definitions=R.definitions.concat(xe(k.definitions));function z(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){z(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){z(e,t)}),e.definitions&&e.definitions.forEach(function(e){z(e,t)})}var B={};(function(){R.definitions.forEach(function(e){if(e.name){var t=new Set;z(e,t),B[e.name.value]=t}})})();function Se(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function Ce(e,t){var n={kind:e.kind,definitions:[Se(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=B[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(B[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=Se(e,t);r&&n.definitions.push(r)}),n}Ce(R,`CartOfferFragment`);var we={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`DiscountAllocations`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`DiscountAllocation`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`CartCodeDiscountAllocation`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`code`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`discountedAmount`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`amount`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`currencyCode`},arguments:[],directives:[]}]}}]}},{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`CartAutomaticDiscountAllocation`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`title`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`discountedAmount`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`amount`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`currencyCode`},arguments:[],directives:[]}]}}]}},{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`CartCustomDiscountAllocation`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`title`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`discountedAmount`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`amount`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`currencyCode`},arguments:[],directives:[]}]}}]}},{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`CartShopCashDiscountAllocation`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`title`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`discountedAmount`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`amount`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`currencyCode`},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:517}};we.loc.source={body:`fragment DiscountAllocations on DiscountAllocation {
  ... on CartCodeDiscountAllocation {
    code
    discountedAmount {
      amount
      currencyCode
    }
  }
  ... on CartAutomaticDiscountAllocation {
    title
    discountedAmount {
      amount
      currencyCode
    }
  }
  ... on CartCustomDiscountAllocation {
    title
    discountedAmount {
      amount
      currencyCode
    }
  }
  ... on CartShopCashDiscountAllocation {
    title
    discountedAmount {
      amount
      currencyCode
    }
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};function V(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){V(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){V(e,t)}),e.definitions&&e.definitions.forEach(function(e){V(e,t)})}var Te={};(function(){we.definitions.forEach(function(e){if(e.name){var t=new Set;V(e,t),Te[e.name.value]=t}})})();function H(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function U(e,t){var n={kind:e.kind,definitions:[H(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=Te[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(Te[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=H(e,t);r&&n.definitions.push(r)}),n}U(we,`DiscountAllocations`);var W={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`CartVariantFragment`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`StorefrontProductVariant`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`title`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`product`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`url`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`title`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`slug`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`referral`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`isPublishedToOnlineStoreChannel`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`variantImage`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`image`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ReducedImage`},directives:[]}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`availableForSale`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`quantityAvailable`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`compareAtPrice`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`amount`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`currencyCode`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`price`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`amount`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`currencyCode`},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:437}};W.loc.source={body:`#import "../../../data/fragments/ReducedImageFragment.graphql"

fragment CartVariantFragment on StorefrontProductVariant {
  id
  title
  product {
    id
    url
    title
    slug
    referral
    isPublishedToOnlineStoreChannel
  }
  variantImage {
    id
    image {
      ...ReducedImage
    }
  }
  availableForSale
  quantityAvailable
  compareAtPrice {
    amount
    currencyCode
  }
  price {
    amount
    currencyCode
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var Ee={};function De(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!Ee[t]&&(Ee[t]=!0,!0)})}W.definitions=W.definitions.concat(De(D.definitions));function G(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){G(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){G(e,t)}),e.definitions&&e.definitions.forEach(function(e){G(e,t)})}var K={};(function(){W.definitions.forEach(function(e){if(e.name){var t=new Set;G(e,t),K[e.name.value]=t}})})();function Oe(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function ke(e,t){var n={kind:e.kind,definitions:[Oe(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=K[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(K[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=Oe(e,t);r&&n.definitions.push(r)}),n}ke(W,`CartVariantFragment`);var Ae={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`CartWarningFragment`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`CartWarning`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`code`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`message`},arguments:[],directives:[]}]}}],loc:{start:0,end:65}};Ae.loc.source={body:`fragment CartWarningFragment on CartWarning {
  code
  message
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};function je(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){je(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){je(e,t)}),e.definitions&&e.definitions.forEach(function(e){je(e,t)})}var Me={};(function(){Ae.definitions.forEach(function(e){if(e.name){var t=new Set;je(e,t),Me[e.name.value]=t}})})();function Ne(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function Pe(e,t){var n={kind:e.kind,definitions:[Ne(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=Me[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(Me[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=Ne(e,t);r&&n.definitions.push(r)}),n}Pe(Ae,`CartWarningFragment`);var q={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`CartFragment`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`Cart`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`cartType`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`referral`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`updatedBy`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`cartCost`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`totalPrice`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`MoneyV2Fragment`},directives:[]}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`discountAllocations`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`DiscountAllocations`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`warnings`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`CartWarningFragment`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`lines`},arguments:[{kind:`Argument`,name:{kind:`Name`,value:`first`},value:{kind:`IntValue`,value:`50`}}],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`nodes`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`cost`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`totalPrice`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`MoneyV2Fragment`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`subtotalPrice`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`MoneyV2Fragment`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`pricePerQuantity`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`MoneyV2Fragment`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`compareAtPricePerQuantity`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`MoneyV2Fragment`},directives:[]}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`sellingPlanAllocation`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`SellingPlanAllocationFragment`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`status`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`quantity`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`addedByUser`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`lineComponents`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`productVariant`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`CartVariantFragment`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`quantity`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`productVariant`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`CartVariantFragment`},directives:[]},{kind:`Field`,name:{kind:`Name`,value:`lowStockAmount`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`product`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`salesData`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`approximateQuantitySoldLast30Days`},arguments:[],directives:[]}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`bundledBy`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`nodes`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`CartVariantFragment`},directives:[]},{kind:`Field`,name:{kind:`Name`,value:`product`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ProductCardWithoutShopCash`},directives:[]}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`pageInfo`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`hasNextPage`},arguments:[],directives:[]}]}}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`lineItemErrors`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`code`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`message`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`warnings`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`CartWarningFragment`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`discountAllocations`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`DiscountAllocations`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`inDefaultProductList`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`totalCount`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`shop`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`uuid`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`shopifyId`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`nativeSubscriptionsEnabled`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`defaultHandle`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`shopCashCampaignValue`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`amount`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`currencyCode`},arguments:[],directives:[]}]}},{kind:`FragmentSpread`,name:{kind:`Name`,value:`ShopInfo`},directives:[]},{kind:`Field`,name:{kind:`Name`,value:`productReviewAnalytics`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`totalProductReviews`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`totalProductRatings`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`averageRating`},arguments:[],directives:[]}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`shopCashIncentive`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`ShopCashIncentiveFragment`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`totalQuantity`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`offers`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`CartOfferFragment`},directives:[]}]}}]}}],loc:{start:0,end:2366}};q.loc.source={body:`#import "../../../data/fragments/ShopInfoFragment.graphql"
#import "../../../data/fragments/MoneyV2Fragment.graphql"
#import "../../../data/fragments/ProductCardWithoutShopCashFragment.graphql"
#import "../../../data/fragments/ShopCashIncentiveFragment.graphql"
#import "../../../data/fragments/SellingPlanAllocationFragment.graphql"
#import "./CartOfferFragment.graphql"
#import "./DiscountAllocations.graphql"
#import "./CartVariantFragment.graphql"
#import "./CartWarningFragment.graphql"

fragment CartFragment on Cart {
  id
  cartType
  referral
  updatedBy
  cartCost {
    totalPrice {
      ...MoneyV2Fragment
    }
  }
  discountAllocations {
    ...DiscountAllocations
  }
  warnings {
    ...CartWarningFragment
  }
  lines(first: 50) {
    nodes {
      id
      cost {
        totalPrice {
          ...MoneyV2Fragment
        }
        subtotalPrice {
          ...MoneyV2Fragment
        }
        pricePerQuantity {
          ...MoneyV2Fragment
        }
        compareAtPricePerQuantity {
          ...MoneyV2Fragment
        }
      }
      sellingPlanAllocation {
        ...SellingPlanAllocationFragment
      }
      status
      quantity
      addedByUser
      lineComponents {
        id
        productVariant {
          ...CartVariantFragment
        }
        quantity
      }
      productVariant {
        ...CartVariantFragment
        lowStockAmount
        product {
          salesData {
            approximateQuantitySoldLast30Days
          }
        }
        bundledBy {
          nodes {
            ...CartVariantFragment
            product {
              ...ProductCardWithoutShopCash
            }
          }
          pageInfo {
            hasNextPage
          }
        }
      }
      lineItemErrors {
        code
        message
      }
      warnings {
        ...CartWarningFragment
      }
      discountAllocations {
        ...DiscountAllocations
      }
      inDefaultProductList
    }
    totalCount
  }
  shop {
    id
    uuid
    shopifyId
    nativeSubscriptionsEnabled
    defaultHandle
    shopCashCampaignValue {
      amount
      currencyCode
    }
    ...ShopInfo

    productReviewAnalytics {
      totalProductReviews
      totalProductRatings
      averageRating
    }
  }
  shopCashIncentive {
    ...ShopCashIncentiveFragment
  }
  totalQuantity
  offers {
    ...CartOfferFragment
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var Fe={};function J(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!Fe[t]&&(Fe[t]=!0,!0)})}q.definitions=q.definitions.concat(J(F.definitions)),q.definitions=q.definitions.concat(J(k.definitions)),q.definitions=q.definitions.concat(J(ne.definitions)),q.definitions=q.definitions.concat(J(O.definitions)),q.definitions=q.definitions.concat(J(ie.definitions)),q.definitions=q.definitions.concat(J(R.definitions)),q.definitions=q.definitions.concat(J(we.definitions)),q.definitions=q.definitions.concat(J(W.definitions)),q.definitions=q.definitions.concat(J(Ae.definitions));function Ie(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){Ie(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){Ie(e,t)}),e.definitions&&e.definitions.forEach(function(e){Ie(e,t)})}var Le={};(function(){q.definitions.forEach(function(e){if(e.name){var t=new Set;Ie(e,t),Le[e.name.value]=t}})})();function Re(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function ze(e,t){var n={kind:e.kind,definitions:[Re(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=Le[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(Le[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=Re(e,t);r&&n.definitions.push(r)}),n}ze(q,`CartFragment`);var Y={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`CartUnderlay`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`CartUnderlay`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`CartTextUnderlay`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`text`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`displayHints`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`backgroundColor`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`text`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`textColor`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`textVariant`},arguments:[],directives:[]}]}}]}}]}},{kind:`InlineFragment`,typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`CartProgressUnderlay`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`progress`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`action`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`url`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`label`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`icon`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`accessibilityLabel`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`displayHints`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`action`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`textColor`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`textVariant`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`backgroundColor`},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:423}};Y.loc.source={body:`fragment CartUnderlay on CartUnderlay {
  ... on CartTextUnderlay {
    text
    displayHints {
      backgroundColor
      text {
        textColor
        textVariant
      }
    }
  }
  ... on CartProgressUnderlay {
    progress
    action {
      url
      label
      icon
      accessibilityLabel
    }
    displayHints {
      action {
        textColor
        textVariant
      }
      backgroundColor
    }
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};function Be(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){Be(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){Be(e,t)}),e.definitions&&e.definitions.forEach(function(e){Be(e,t)})}var Ve={};(function(){Y.definitions.forEach(function(e){if(e.name){var t=new Set;Be(e,t),Ve[e.name.value]=t}})})();function He(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function Ue(e,t){var n={kind:e.kind,definitions:[He(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=Ve[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(Ve[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=He(e,t);r&&n.definitions.push(r)}),n}Ue(Y,`CartUnderlay`);var X={kind:`Document`,definitions:[{kind:`OperationDefinition`,operation:`mutation`,name:{kind:`Name`,value:`CartDiscountCodesUpdate`},variableDefinitions:[{kind:`VariableDefinition`,variable:{kind:`Variable`,name:{kind:`Name`,value:`shopId`}},type:{kind:`NonNullType`,type:{kind:`NamedType`,name:{kind:`Name`,value:`ID`}}},directives:[]},{kind:`VariableDefinition`,variable:{kind:`Variable`,name:{kind:`Name`,value:`discountCodes`}},type:{kind:`NonNullType`,type:{kind:`ListType`,type:{kind:`NonNullType`,type:{kind:`NamedType`,name:{kind:`Name`,value:`String`}}}}},directives:[]}],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`cartDiscountCodesUpdate`},arguments:[{kind:`Argument`,name:{kind:`Name`,value:`shopId`},value:{kind:`Variable`,name:{kind:`Name`,value:`shopId`}}},{kind:`Argument`,name:{kind:`Name`,value:`discountCodes`},value:{kind:`Variable`,name:{kind:`Name`,value:`discountCodes`}}}],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`cart`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`CartFragment`},directives:[]},{kind:`Field`,name:{kind:`Name`,value:`underlay`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`CartUnderlay`},directives:[]}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`userErrors`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`field`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`message`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`code`},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:391}};X.loc.source={body:`#import "./CartFragment.graphql"
#import "./CartUnderlayFragment.graphql"

mutation CartDiscountCodesUpdate($shopId: ID!, $discountCodes: [String!]!) {
  cartDiscountCodesUpdate(shopId: $shopId, discountCodes: $discountCodes) {
    cart {
      id
      ...CartFragment
      underlay {
        ...CartUnderlay
      }
    }
    userErrors {
      field
      message
      code
    }
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var We={};function Ge(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!We[t]&&(We[t]=!0,!0)})}X.definitions=X.definitions.concat(Ge(q.definitions)),X.definitions=X.definitions.concat(Ge(Y.definitions));function Ke(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){Ke(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){Ke(e,t)}),e.definitions&&e.definitions.forEach(function(e){Ke(e,t)})}var qe={};(function(){X.definitions.forEach(function(e){if(e.name){var t=new Set;Ke(e,t),qe[e.name.value]=t}})})();function Je(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function Ye(e,t){var n={kind:e.kind,definitions:[Je(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=qe[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(qe[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=Je(e,t);r&&n.definitions.push(r)}),n}Ye(X,`CartDiscountCodesUpdate`);var Z={kind:`Document`,definitions:[{kind:`OperationDefinition`,operation:`mutation`,name:{kind:`Name`,value:`CartLineItemAdd`},variableDefinitions:[{kind:`VariableDefinition`,variable:{kind:`Variable`,name:{kind:`Name`,value:`input`}},type:{kind:`NonNullType`,type:{kind:`NamedType`,name:{kind:`Name`,value:`CartLineItemAddInput`}}},directives:[]}],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`cartLineItemAdd`},arguments:[{kind:`Argument`,name:{kind:`Name`,value:`input`},value:{kind:`Variable`,name:{kind:`Name`,value:`input`}}}],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`cart`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`CartFragment`},directives:[]},{kind:`Field`,name:{kind:`Name`,value:`underlay`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`CartUnderlay`},directives:[]}]}}]}},{kind:`Field`,name:{kind:`Name`,value:`userErrors`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`field`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`message`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`code`},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:331}};Z.loc.source={body:`#import "./CartFragment.graphql"
#import "./CartUnderlayFragment.graphql"

mutation CartLineItemAdd($input: CartLineItemAddInput!) {
  cartLineItemAdd(input: $input) {
    cart {
      id
      ...CartFragment
      underlay {
        ...CartUnderlay
      }
    }
    userErrors {
      field
      message
      code
    }
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var Xe={};function Ze(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!Xe[t]&&(Xe[t]=!0,!0)})}Z.definitions=Z.definitions.concat(Ze(q.definitions)),Z.definitions=Z.definitions.concat(Ze(Y.definitions));function Qe(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){Qe(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){Qe(e,t)}),e.definitions&&e.definitions.forEach(function(e){Qe(e,t)})}var $e={};(function(){Z.definitions.forEach(function(e){if(e.name){var t=new Set;Qe(e,t),$e[e.name.value]=t}})})();function et(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function tt(e,t){var n={kind:e.kind,definitions:[et(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=$e[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),($e[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=et(e,t);r&&n.definitions.push(r)}),n}tt(Z,`CartLineItemAdd`);var Q={kind:`Document`,definitions:[{kind:`FragmentDefinition`,name:{kind:`Name`,value:`CartDeliveryPredictionFragment`},typeCondition:{kind:`NamedType`,name:{kind:`Name`,value:`Cart`}},directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`deliveryPrediction`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`deliveryAt`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`timezone`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`cost`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`MoneyV2Fragment`},directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`brandedPromise`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`handle`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`name`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`compactLogo`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`url`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`width`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`height`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`altText`},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:355}};Q.loc.source={body:`#import "../../../data/fragments/MoneyV2Fragment.graphql"

fragment CartDeliveryPredictionFragment on Cart {
  deliveryPrediction {
    deliveryAt
    timezone
    cost {
      ...MoneyV2Fragment
    }
    brandedPromise {
      handle
      name
      compactLogo {
        id
        url
        width
        height
        altText
      }
    }
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var nt={};function rt(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!nt[t]&&(nt[t]=!0,!0)})}Q.definitions=Q.definitions.concat(rt(k.definitions));function it(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){it(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){it(e,t)}),e.definitions&&e.definitions.forEach(function(e){it(e,t)})}var at={};(function(){Q.definitions.forEach(function(e){if(e.name){var t=new Set;it(e,t),at[e.name.value]=t}})})();function ot(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function st(e,t){var n={kind:e.kind,definitions:[ot(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=at[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(at[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=ot(e,t);r&&n.definitions.push(r)}),n}st(Q,`CartDeliveryPredictionFragment`);var $={kind:`Document`,definitions:[{kind:`OperationDefinition`,operation:`mutation`,name:{kind:`Name`,value:`CartLineItemSet`},variableDefinitions:[{kind:`VariableDefinition`,variable:{kind:`Variable`,name:{kind:`Name`,value:`shopId`}},type:{kind:`NonNullType`,type:{kind:`NamedType`,name:{kind:`Name`,value:`ID`}}},directives:[]},{kind:`VariableDefinition`,variable:{kind:`Variable`,name:{kind:`Name`,value:`lineItemId`}},type:{kind:`NonNullType`,type:{kind:`NamedType`,name:{kind:`Name`,value:`ID`}}},directives:[]},{kind:`VariableDefinition`,variable:{kind:`Variable`,name:{kind:`Name`,value:`quantity`}},type:{kind:`NonNullType`,type:{kind:`NamedType`,name:{kind:`Name`,value:`Int`}}},directives:[]},{kind:`VariableDefinition`,variable:{kind:`Variable`,name:{kind:`Name`,value:`includeDeliveryPrediction`}},type:{kind:`NonNullType`,type:{kind:`NamedType`,name:{kind:`Name`,value:`Boolean`}}},defaultValue:{kind:`BooleanValue`,value:!1},directives:[]}],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`cartLineItemSet`},arguments:[{kind:`Argument`,name:{kind:`Name`,value:`input`},value:{kind:`ObjectValue`,fields:[{kind:`ObjectField`,name:{kind:`Name`,value:`shopId`},value:{kind:`Variable`,name:{kind:`Name`,value:`shopId`}}},{kind:`ObjectField`,name:{kind:`Name`,value:`lineItemId`},value:{kind:`Variable`,name:{kind:`Name`,value:`lineItemId`}}},{kind:`ObjectField`,name:{kind:`Name`,value:`quantity`},value:{kind:`Variable`,name:{kind:`Name`,value:`quantity`}}}]}}],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`cart`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`FragmentSpread`,name:{kind:`Name`,value:`CartFragment`},directives:[]},{kind:`Field`,name:{kind:`Name`,value:`underlay`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`FragmentSpread`,name:{kind:`Name`,value:`CartUnderlay`},directives:[]}]}},{kind:`FragmentSpread`,name:{kind:`Name`,value:`CartDeliveryPredictionFragment`},directives:[{kind:`Directive`,name:{kind:`Name`,value:`include`},arguments:[{kind:`Argument`,name:{kind:`Name`,value:`if`},value:{kind:`Variable`,name:{kind:`Name`,value:`includeDeliveryPrediction`}}}]}]}]}},{kind:`Field`,name:{kind:`Name`,value:`userErrors`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`code`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`field`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`message`},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:599}};$.loc.source={body:`#import "./CartFragment.graphql"
#import "./CartDeliveryPredictionFragment.graphql"
#import "./CartUnderlayFragment.graphql"

mutation CartLineItemSet(
  $shopId: ID!
  $lineItemId: ID!
  $quantity: Int!
  $includeDeliveryPrediction: Boolean! = false
) {
  cartLineItemSet(
    input: {shopId: $shopId, lineItemId: $lineItemId, quantity: $quantity}
  ) {
    cart {
      id
      ...CartFragment
      underlay {
        ...CartUnderlay
      }
      ...CartDeliveryPredictionFragment @include(if: $includeDeliveryPrediction)
    }
    userErrors {
      code
      field
      message
    }
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};var ct={};function lt(e){return e.filter(function(e){if(e.kind!==`FragmentDefinition`)return!0;var t=e.name.value;return!ct[t]&&(ct[t]=!0,!0)})}$.definitions=$.definitions.concat(lt(q.definitions)),$.definitions=$.definitions.concat(lt(Q.definitions)),$.definitions=$.definitions.concat(lt(Y.definitions));function ut(e,t){if(e.kind===`FragmentSpread`)t.add(e.name.value);else if(e.kind===`VariableDefinition`){var n=e.type;n.kind===`NamedType`&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){ut(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){ut(e,t)}),e.definitions&&e.definitions.forEach(function(e){ut(e,t)})}var dt={};(function(){$.definitions.forEach(function(e){if(e.name){var t=new Set;ut(e,t),dt[e.name.value]=t}})})();function ft(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function pt(e,t){var n={kind:e.kind,definitions:[ft(e,t)]};e.hasOwnProperty(`loc`)&&(n.loc=e.loc);var r=dt[t]||new Set,i=new Set,a=new Set;for(r.forEach(function(e){a.add(e)});a.size>0;){var o=a;a=new Set,o.forEach(function(e){i.has(e)||(i.add(e),(dt[e]||new Set).forEach(function(e){a.add(e)}))})}return i.forEach(function(t){var r=ft(e,t);r&&n.definitions.push(r)}),n}pt($,`CartLineItemSet`);var mt=r(),ht=d(`/web/api/cart/delete`),gt={deletedCartId:null,userError:null},_t=d(`/web/api/cart/save-for-later`),vt={deletedCartId:null,cart:null,userError:null},yt=class extends Error{constructor(e,t){super(e.message),o(this,`reason`,void 0),o(this,`keptLineIds`,void 0),this.name=`SaveAllForLaterError`,this.reason=e,this.keptLineIds=t}},bt=(0,A.createContext)({data:void 0,loadCarts(){},refetch(){},refetchPromotions:()=>Promise.resolve(),addToCart:()=>Promise.resolve(void 0),addToCartLoading:!1,setQuantity:()=>Promise.resolve(void 0),removeAllFromCart:()=>Promise.resolve(),saveAllForLater:()=>Promise.resolve(),fetchMore(){},hasActiveCarts:!1,cartCount:{totalCartItems:0,totalCarts:0},shopCarts:new Map,failedShopCartReads:new Set,loadShopCart(){},cartsLoading:!1,cartPromotionCardData:void 0,removingLineItemIds:new Set,updateCart:()=>{}}),xt=(0,A.createContext)(void 0);function St(){return(0,A.useContext)(bt)}function Ct(e){let t=e===void 0?0:e;return(0,A.useContext)(xt)??t}function wt(e){let t=(0,ae.c)(19),{data:n,shopCarts:r,failedShopCartReads:i,loadShopCart:a}=St(),{userAuthState:o}=g(),s=n==null?void 0:n.carts,c;t[0]!==(s==null?void 0:s.nodes)||t[1]!==e?(c=e?s==null?void 0:s.nodes.find(t=>t.shop.id===e):void 0,t[0]=s==null?void 0:s.nodes,t[1]=e,t[2]=c):c=t[2];let l=c,u=l!==void 0||s!==void 0&&!s.pageInfo.hasNextPage,d;t[3]!==r||t[4]!==e?(d=e?r.get(e):void 0,t[3]=r,t[4]=e,t[5]=d):d=t[5];let f=d,p;t[6]!==i||t[7]!==e?(p=e?i.has(e):!1,t[6]=i,t[7]=e,t[8]=p):p=t[8];let m=!!e&&!u&&f===void 0&&!p&&o!==_.Anonymous&&o!==_.PhoneOnlyVerified,h,v;if(t[9]!==a||t[10]!==m||t[11]!==e?(h=()=>{m&&e&&a(e)},v=[m,e,a],t[9]=a,t[10]=m,t[11]=e,t[12]=h,t[13]=v):(h=t[12],v=t[13]),(0,A.useEffect)(h,v),u){let e;return t[14]===l?e=t[15]:(e={cart:l,loading:!1},t[14]=l,t[15]=e),e}let y=f??void 0,b;return t[16]!==m||t[17]!==y?(b={cart:y,loading:m},t[16]=m,t[17]=y,t[18]=b):b=t[18],b}var Tt=({children:e})=>{let{t}=a(),[n,r]=(0,A.useState)(!1),{userAuthState:o,currentUser:l,refetchIdentity:u}=g(),[d,C]=(0,A.useState)(!1),[w,T]=(0,A.useState)(new Set),ee=b(),E=m(),{isCookiesConsentRequired:D,isVerifiedBot:ne}=s(`root`)||{isCookiesConsentRequired:!1},O=de(),[re]=i(Z),[k]=i($),[ie]=i(X),{includeCartRedesignFields:ae}=le(),{carts:j,cartPromotionCardData:se,fetchMore:M,loadCarts:N,refetch:P,refetchPromotions:ue,updateCart:fe,removeCart:pe,isLoading:F}=ce({includeCartRedesignFields:ae}),{shopCarts:ge,failedShopIds:_e,loadShopCart:I,updateShopCart:ve,removeShopCart:ye}=me(),L=(0,A.useCallback)(e=>{fe(e),ve(e)},[fe,ve]),R=(0,A.useCallback)(e=>{pe(e),ye(e)},[pe,ye]);(0,A.useEffect)(()=>{F||(j!=null&&j.nodes&&(j==null?void 0:j.nodes.length)>0?r(!0):r(!1))},[F,j==null?void 0:j.nodes,r]);let{pageType:be}=y(),xe=c().state!==`idle`,z=be===v.Cart,B=j!==void 0,Se=(j==null?void 0:j.pageInfo.hasNextPage)??!1,{itemCount:Ce,reloadItemCount:we}=oe({skip:z||B||F}),V={isCartPage:z,hasMoreCarts:Se,isListLoaded:B,isNavigating:xe,refetch:P,reloadItemCount:we},Te=(0,A.useRef)(V);(0,A.useLayoutEffect)(()=>{Te.current=V});let H=(0,A.useRef)(!1),U=(0,A.useCallback)(()=>{let e=Te.current;e.isNavigating?H.current=!0:e.isCartPage||e.hasMoreCarts?e.refetch({fetchPromotions:!1}):e.isListLoaded||e.reloadItemCount()},[]);(0,A.useEffect)(()=>{xe||!H.current||(H.current=!1,U())},[xe,U]);let W=(0,A.useCallback)(async({brokerId:e,variantId:i,quantity:a=1,attribution:s,sellingPlanId:c,discountCodes:d})=>{try{if(o===_.PhoneOnlyVerified){ee({entityId:x.AddToCart,email:l==null?void 0:l.email,scope:`EMAIL`});return}C(!0);let w;if(o===_.Anonymous&&(w=await S({triggerSignIn:()=>ee({entityId:x.AddToCart,scope:`EMAIL`}),cookies:E}),u()),w!=null&&w.ok||o!==_.Anonymous){var m,g,v;let{errors:l,data:u}=await re({variables:{input:{shopId:e,variantId:i,quantity:a,attribution:s,sellingPlanId:c,mailingAddress:o===_.Anonymous?void 0:await O()}}});if(l)throw l;let x=u==null||(m=u.cartLineItemAdd)==null?void 0:m.userErrors;if(x&&x.length>0)throw new he(x[0],t);if((u==null||(g=u.cartLineItemAdd)==null?void 0:g.cart)===null)throw Error(`null cart no userErrors`);let S=u==null||(v=u.cartLineItemAdd)==null?void 0:v.cart;if(d!=null&&d.length){let t=((S==null?void 0:S.discountAllocations)??[]).filter(e=>e.__typename===`CartCodeDiscountAllocation`).map(e=>e.code).filter(e=>!!e);try{let{errors:n,data:r}=await ie({variables:{shopId:e,discountCodes:[...t,...d]}});if(n)p.notify(Error(`cartDiscountCodesUpdate errors`),{metadata:{discountErrors:n,discountCodes:d}});else{var y,b;let e=r==null||(y=r.cartDiscountCodesUpdate)==null?void 0:y.userErrors;e&&e.length>0?p.notify(Error(`cartDiscountCodesUpdate userErrors`),{metadata:{discountUserErrors:e,discountCodes:d}}):r!=null&&(b=r.cartDiscountCodesUpdate)!=null&&b.cart&&(S=r.cartDiscountCodesUpdate.cart)}}catch(e){p.notify(e,{metadata:{discountCodes:d,context:`addToCart`}})}}return S&&L(S),U(),n||r(!0),h(f.AddToCart,{success:!0,isCookiesConsentRequired:D,isBot:!!ne}),C(!1),S}throw(w==null?void 0:w.ok)===!1?Error(`Failed to create guest user`):Error(`Failed to add to cart`)}catch(e){throw C(!1),h(f.AddToCart,{success:!1,isCookiesConsentRequired:D,isBot:!!ne}),e}},[o,ee,l==null?void 0:l.email,E,u,re,ie,O,n,D,ne,t,U,L]),Ee=(0,A.useCallback)(async({shopId:e,lineItemId:n,quantity:r=1})=>{var i,a,o,s;r===0&&T(e=>new Set(e).add(n));let{errors:c,data:l}=await k({variables:{shopId:e,lineItemId:n,quantity:r,includeDeliveryPrediction:r===0}}).finally(()=>{r===0&&T(e=>{let t=new Set(e);return t.delete(n),t})});if(c)throw c;let u=l==null||(i=l.cartLineItemSet)==null?void 0:i.userErrors;if(u&&u.length>0)throw new he(u[0],t);if((l==null||(a=l.cartLineItemSet)==null?void 0:a.cart)===null)throw Error(`null cart no userErrors`);return l!=null&&(o=l.cartLineItemSet)!=null&&o.cart&&L(l.cartLineItemSet.cart),U(),l==null||(s=l.cartLineItemSet)==null||(s=s.cart)==null?void 0:s.id},[k,t,L,U]),De=(0,A.useCallback)(async({cartId:e,shopUuid:n})=>{let{userError:r,deletedCartId:i,error:a}=await te({endpoint:ht,body:{shopId:n},emptyResult:gt,failureLabel:`Cart delete request`});if(r)throw new he(r,t);if(a||i!==e)throw Error(a??`Cart delete returned another cart`);R(e),U()},[t,R,U]),G=(0,A.useCallback)(async({cartId:e,shopUuid:n})=>{let{userError:r,deletedCartId:i,cart:a,error:o}=await te({endpoint:_t,body:{shopId:n},emptyResult:vt,failureLabel:`Cart save for later request`});if(i===e?R(e):a&&L(a),U(),r||o||i&&i!==e){let e=a?new Set((a.lines.nodes??[]).flatMap(e=>e?[e.id]:[])):null;throw new yt(r?new he(r,t):Error(o??`Cart save for later returned another cart`),e)}},[t,R,L,U]),K=(0,A.useMemo)(()=>({totalCartItems:(j==null?void 0:j.totalItemCount)??(j==null?void 0:j.nodes.reduce((e,t)=>e+t.totalQuantity,0))??0,totalCarts:(j==null?void 0:j.nodes.length)??0}),[j==null?void 0:j.nodes,j==null?void 0:j.totalItemCount]),Oe=se,ke=(0,A.useMemo)(()=>({data:j?{carts:j}:void 0,loadCarts:N,refetch:P,refetchPromotions:ue,cartCount:K,shopCarts:ge,failedShopCartReads:_e,loadShopCart:I,cartsLoading:F,fetchMore:M,addToCart:W,addToCartLoading:d,setQuantity:Ee,removeAllFromCart:De,saveAllForLater:G,hasActiveCarts:n,cartPromotionCardData:Oe,removingLineItemIds:w,updateCart:L}),[j,N,P,ue,K,ge,_e,I,F,M,W,d,Ee,De,G,n,Oe,w,L]);return(0,mt.jsx)(xt.Provider,{value:j?K.totalCartItems:Ce,children:(0,mt.jsx)(bt.Provider,{value:ke,children:e})})};export{wt as a,q as c,le as d,P as f,St as i,F as l,yt as n,Q as o,M as p,Ct as r,Y as s,Tt as t,he as u};
//# sourceMappingURL=CartsProvider-BHXNczKY.js.map