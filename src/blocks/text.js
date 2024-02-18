/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';

// Create a custom block called 'add_text' that adds
// text to the output div on the sample app.
// This is just an example and you should replace this with your
// own custom blocks.

const addText = {
  'type': 'add_text',
  'message0': 'Add text %1 with color %2',
  'args0': [
    {
      'type': 'input_value',
      'name': 'TEXT',
      'check': 'String',
    },
    {
      'type': 'input_value',
      'name': 'COLOR',
      'check': 'Colour',
    },
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 160,
  'tooltip': '',
  'helpUrl': '',
};

const minimumPurchase = {
  "type": "minimum_purchase",
  "message0": "Minimum Purchase %1 with amount %2 based on %3 %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_number",
      "name": "amount_number",
      "value": 0
    },
    {
      "type": "field_dropdown",
      "name": "based_on",
      "options": [
        [
          "Total Product Price",
          "total_product_price"
        ],
        [
          "Payment Amount",
          "payment_amount"
        ]
      ]
    },
    {
      "type": "input_statement",
      "name": "amount"
    }
  ],
  "colour": 230,
  "tooltip": "",
  "helpUrl": "",
  "previousStatement": null,
  "nextStatement": null
};

const isNewUser = {
  "type": "is_new_user",
  "message0": "Is New User %1 %2 Enable New User Only %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_checkbox",
      "name": "NewUserChecker",
      "checked": true
    },
    {
      "type": "input_statement",
      "name": "userEligibility"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

const merchantTypes = {
  "type": "shop_types",
  "message0": "Shop Types %1 %2 Official Store %3 Regular Merchant %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_checkbox",
      "name": "OfficialStore",
      "checked": true
    },
    {
      "type": "field_checkbox",
      "name": "RegularMerchant",
      "checked": true
    },
    {
      "type": "input_statement",
      "name": "shopTypes"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

const lastUserTransactionDate = {
  "type": "last_transaction_date",
  "message0": "Last User Transaction Date %1 User have not made any purchase since %2 days ago %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_number",
      "name": "NAME",
      "value": 0
    },
    {
      "type": "input_statement",
      "name": "lastTransactionDate"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

const isMUBUser = {
  "type": "mub_user",
  "message0": "MUB User %1 %2 Only eligible for MUB Users %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_checkbox",
      "name": "isMUB",
      "checked": true
    },
    {
      "type": "input_statement",
      "name": "lastTransactionDate"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

const operatorOr = {
  "type": "or_operator",
  "message0": "OR %1",
  "args0": [
    {
      "type": "input_statement",
      "name": "operatorOr"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "",
  "helpUrl": ""
}

const operatorAnd = {
  "type": "and_operator",
  "message0": "AND %1",
  "args0": [
    {
      "type": "input_statement",
      "name": "operatorAnd"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "",
  "helpUrl": ""
}

const headRule = {
  "type": "head",
  "message0": "My Rules %1",
  "args0": [
    {
      "type": "input_statement",
      "name": "head"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 160,
  "tooltip": "",
  "helpUrl": ""
}

// Create the block definitions for the JSON-only blocks.
// This does not register their definitions with Blockly.
// This file has no side effects!
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(
    [headRule, operatorOr, operatorAnd, addText, minimumPurchase, isNewUser, merchantTypes, lastUserTransactionDate, isMUBUser]);
