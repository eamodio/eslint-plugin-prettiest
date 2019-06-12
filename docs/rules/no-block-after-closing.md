# rule (no-block-after-closing)

This rule ensures that `else`, `catch`, and `finally` blocks start on new lines.

## Rule Details

This rule aims to as line breaks after closing blocks.

Examples of **incorrect** code for this rule:

```js
try {
  // code
} finally {
  // finally
}

if (true) {
  // if
} else {
  // else
}
```

Examples of **correct** code for this rule:

```js
try {
  // code
} finally {
  // finally
}

if (true) {
  // if
} else {
  // else
}
```

## When Not To Use It

Turn off this rule if you don't want `else`, `catch`, and `finally` blocks on new lines.
