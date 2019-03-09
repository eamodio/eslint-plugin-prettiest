# eslint-plugin-prettiest

ESLint plugin to "fix" prettier formatting

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-prettiest`:

```
$ npm install eslint-plugin-prettiest --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-prettiest` globally.

## Usage

Add `prettiest` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["prettiest"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "prettiest/no-block-after-closing": 2
  }
}
```

## Supported Rules

- `no-block-after-closing` — disallow closing braces on the same line as a subsequent block
