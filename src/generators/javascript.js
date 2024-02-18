/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { Order } from 'blockly/javascript';

// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
// This file has no side effects!
export const forBlock = Object.create(null);

forBlock['add_text'] = function (block, generator) {
  const text = generator.valueToCode(block, 'TEXT', Order.NONE) || "''";
  const color =
    generator.valueToCode(block, 'COLOR', Order.ATOMIC) || "'#ffffff'";

  const addText = generator.provideFunction_(
    'addText',
    `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(text, color) {

  // Add text to the output area.
  const outputDiv = document.getElementById('output');
  const textEl = document.createElement('p');
  textEl.innerText = text;
  textEl.style.color = color;
  outputDiv.appendChild(textEl);
}`
  );
  // Generate the function call for this block.
  const code = `${addText}(${text}, ${color});\n`;
  return code;
};

forBlock['minimum_purchase'] = function (block, generator) {
  // Get field values
  const amountValue = block.getFieldValue('amount');
  const basedOnValue = block.getFieldValue('based_on');

  // Generate code based on block selections
  let code = '';
  if (basedOnValue === 'total_product_price') {
    code = `// Calculate minimum purchase based on total product price`;
  } else if (basedOnValue === 'payment_amount') {
    code = `// Calculate minimum purchase based on payment amount`;
  }

  // Process statements (if any)
  const statementsCode = Blockly.JavaScript.statementToCode(block, 'amount');
  if (statementsCode) {
    code += `\n${statementsCode}`;
  }

  // Return the generated code
  return code;
};

forBlock['is_new_user'] = function(block, generator) {
  var checkbox_newuserchecker = block.getFieldValue('NewUserChecker') === 'TRUE';
  var statements_usereligibility = generator.statementToCode(block, 'userEligibility');
  // TODO: Assemble javascript into code variable.
  var code = '...\n';
  return code;
};

forBlock['shop_types'] = function(block, generator) {
  var checkbox_officialstore = block.getFieldValue('OfficialStore') === 'TRUE';
  var checkbox_regularmerchant = block.getFieldValue('RegularMerchant') === 'TRUE';
  var statements_shoptypes = generator.statementToCode(block, 'shopTypes');
  // TODO: Assemble javascript into code variable.
  var code = '...\n';
  return code;
};

forBlock['last_transaction_date'] = function(block, generator) {
  var number_name = block.getFieldValue('NAME');
  var statements_lasttransactiondate = generator.statementToCode(block, 'lastTransactionDate');
  // TODO: Assemble javascript into code variable.
  var code = '...\n';
  return code;
};

forBlock['mub_user'] = function(block, generator) {
  var checkbox_ismub = block.getFieldValue('isMUB') === 'TRUE';
  var statements_lasttransactiondate = generator.statementToCode(block, 'lastTransactionDate');
  // TODO: Assemble javascript into code variable.
  var code = '...\n';
  return code;
};

forBlock['or_operator'] = function(block, generator) {
  var statements_operatoror = generator.statementToCode(block, 'operatorOr');
  // TODO: Assemble javascript into code variable.
  var code = '...\n';
  return code;
};

forBlock['and_operator'] = function(block, generator) {
  var statements_operatoror = generator.statementToCode(block, 'operatorOr');
  // TODO: Assemble javascript into code variable.
  var code = '...\n';
  return code;
};

forBlock['head'] = function(block, generator) {
  var statements_head = generator.statementToCode(block, 'head');
  // TODO: Assemble javascript into code variable.
  var code = '...\n';
  return code;
};