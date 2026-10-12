var e={kind:`Document`,definitions:[{kind:`OperationDefinition`,operation:`mutation`,name:{kind:`Name`,value:`CreateCheckoutWithLineItems`},variableDefinitions:[{kind:`VariableDefinition`,variable:{kind:`Variable`,name:{kind:`Name`,value:`brokerId`}},type:{kind:`NonNullType`,type:{kind:`NamedType`,name:{kind:`Name`,value:`ID`}}},directives:[]},{kind:`VariableDefinition`,variable:{kind:`Variable`,name:{kind:`Name`,value:`lineItems`}},type:{kind:`NonNullType`,type:{kind:`ListType`,type:{kind:`NonNullType`,type:{kind:`NamedType`,name:{kind:`Name`,value:`LineItemInput`}}}}},directives:[]},{kind:`VariableDefinition`,variable:{kind:`Variable`,name:{kind:`Name`,value:`mailingAddress`}},type:{kind:`NamedType`,name:{kind:`Name`,value:`MailingAddressInput`}},directives:[]},{kind:`VariableDefinition`,variable:{kind:`Variable`,name:{kind:`Name`,value:`discountCodes`}},type:{kind:`ListType`,type:{kind:`NonNullType`,type:{kind:`NamedType`,name:{kind:`Name`,value:`String`}}}},directives:[]}],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`checkoutWithLineItemsCreate`},arguments:[{kind:`Argument`,name:{kind:`Name`,value:`brokerId`},value:{kind:`Variable`,name:{kind:`Name`,value:`brokerId`}}},{kind:`Argument`,name:{kind:`Name`,value:`lineItems`},value:{kind:`Variable`,name:{kind:`Name`,value:`lineItems`}}},{kind:`Argument`,name:{kind:`Name`,value:`mailingAddress`},value:{kind:`Variable`,name:{kind:`Name`,value:`mailingAddress`}}},{kind:`Argument`,name:{kind:`Name`,value:`discountCodes`},value:{kind:`Variable`,name:{kind:`Name`,value:`discountCodes`}}}],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`checkout`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`id`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`uuid`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`cartId`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`isShopPay`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`status`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`token`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`url`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`errorCode`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`webFallbackUrl`},arguments:[],directives:[]}]}},{kind:`Field`,name:{kind:`Name`,value:`userErrors`},arguments:[],directives:[],selectionSet:{kind:`SelectionSet`,selections:[{kind:`Field`,name:{kind:`Name`,value:`message`},arguments:[],directives:[]},{kind:`Field`,name:{kind:`Name`,value:`code`},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:511}};e.loc.source={body:`mutation CreateCheckoutWithLineItems(
  $brokerId: ID!
  $lineItems: [LineItemInput!]!
  $mailingAddress: MailingAddressInput
  $discountCodes: [String!]
) {
  checkoutWithLineItemsCreate(
    brokerId: $brokerId
    lineItems: $lineItems
    mailingAddress: $mailingAddress
    discountCodes: $discountCodes
  ) {
    checkout {
      id
      uuid
      cartId
      isShopPay
      status
      token
      url
      errorCode
      webFallbackUrl
    }
    userErrors {
      message
      code
    }
  }
}
`,name:`GraphQL request`,locationOffset:{line:1,column:1}};function t(e,n){if(e.kind===`FragmentSpread`)n.add(e.name.value);else if(e.kind===`VariableDefinition`){var r=e.type;r.kind===`NamedType`&&n.add(r.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){t(e,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){t(e,n)}),e.definitions&&e.definitions.forEach(function(e){t(e,n)})}var n={};(function(){e.definitions.forEach(function(e){if(e.name){var r=new Set;t(e,r),n[e.name.value]=r}})})();function r(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function i(e,t){var i={kind:e.kind,definitions:[r(e,t)]};e.hasOwnProperty(`loc`)&&(i.loc=e.loc);var a=n[t]||new Set,o=new Set,s=new Set;for(a.forEach(function(e){s.add(e)});s.size>0;){var c=s;s=new Set,c.forEach(function(e){o.has(e)||(o.add(e),(n[e]||new Set).forEach(function(e){s.add(e)}))})}return o.forEach(function(t){var n=r(e,t);n&&i.definitions.push(n)}),i}i(e,`CreateCheckoutWithLineItems`);export{e as t};
//# sourceMappingURL=CreateCheckoutWithLineItems-5uzmvqL5.js.map