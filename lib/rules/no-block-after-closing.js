/**
 * @fileoverview no-block-after-closing
 * @author Eric Amodio
 */
'use strict';

// @ts-check

/**
 * Determines whether two adjacent tokens are on the same line.
 * @param {Object} left - The left token object.
 * @param {Object} right - The right token object.
 * @returns {boolean} Whether or not the tokens are on the same line.
 * @public
 */
function isTokenOnSameLine(left, right) {
    return left.loc.end.line === right.loc.start.line;
}

module.exports = {
    meta: {
        type: 'layout',
        docs: {
            description: 'disallow closing braces on the same line as a subsequent block',
            recommended: false
        },
        fixable: 'whitespace',
        messages: {
            sameLineClose: 'Closing curly brace appears on the same line as the subsequent block.'
        }
    },
    create: function(context) {
        const sourceCode = context.getSourceCode();

        function validateCurlyBeforeKeyword(curlyToken) {
            const keywordToken = sourceCode.getTokenAfter(curlyToken);

            if (isTokenOnSameLine(curlyToken, keywordToken)) {
                context.report({
                    node: curlyToken,
                    messageId: 'sameLineClose',
                    fix: fixer => {
                        const { start } = curlyToken.loc;
                        const indent = sourceCode.lines[start.line - 1].substring(1, start.column);

                        return fixer.insertTextAfter(curlyToken, `\n${indent}`);
                    }
                });
            }
        }

        return {
            IfStatement(node) {
                if (node.consequent.type === 'BlockStatement' && node.alternate) {
                    // Handle the keyword after the `if` block (before `else`)
                    validateCurlyBeforeKeyword(sourceCode.getLastToken(node.consequent));
                }
            },
            TryStatement(node) {
                // Handle the keyword after the `try` block (before `catch` or `finally`)
                validateCurlyBeforeKeyword(sourceCode.getLastToken(node.block));

                if (node.handler && node.finalizer) {
                    // Handle the keyword after the `catch` block (before `finally`)
                    validateCurlyBeforeKeyword(sourceCode.getLastToken(node.handler.body));
                }
            }
        };
    }
};
