/**
 * @fileoverview no-block-after-closing
 * @author Eric Amodio
 */
'use strict';

// @ts-check

const rule = require('../../../lib/rules/no-block-after-closing');
const RuleTester = require('eslint').RuleTester;

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
`,
            parserOptions: { ecmaVersion: 2015 }
        },
        {
            code: `
    if (true) {
        // if
    }
    else {
        // else
    }
`,
            parserOptions: { ecmaVersion: 2015 }
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
            parserOptions: { ecmaVersion: 2015 },
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
            parserOptions: { ecmaVersion: 2015 },
            errors: [
                {
                    messageId: 'sameLineClose',
                    type: 'Punctuator'
                }
            ]
        }
    ]
});
