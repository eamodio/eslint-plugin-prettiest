'use strict';

// @ts-check

const rule = require('../../../lib/rules/no-block-after-closing');
const RuleTester = require('eslint').RuleTester;

RuleTester.setDefaultConfig({
    parserOptions: {
        ecmaVersion: 6
    }
});

const ruleTester = new RuleTester();

ruleTester.run('no-block-after-closing', rule, {
    valid: [
        {
            code: `
    try {
        // code
    }
    finally {
        // finally
    }
`
        },
        {
            code: `
    if (true) {
        // if
    }
    else {
        // else
    }
`
        }
    ],
    invalid: [
        {
            code: `
    try {
        // code
    } finally {
        // finally
    }
`,
            errors: [
                {
                    messageId: 'sameLineClose',
                    type: 'Punctuator'
                }
            ]
        },
        {
            code: `
    if (true) {
        // if
    } else {
        // else
    }
`,
            errors: [
                {
                    messageId: 'sameLineClose',
                    type: 'Punctuator'
                }
            ]
        }
    ]
});
