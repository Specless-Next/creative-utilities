**[creative-utilities](../README.md)**

> [Globals](../globals.md) / "native-css"

# Module: "native-css"

## Index

### Functions

* [formNativeCssUrl](_native_css_.md#formnativecssurl)

## Functions

### formNativeCssUrl

▸ `Const`**formNativeCssUrl**(`orgId`: string, `domain`: string, `cacheTimeout?`: number): string

*Defined in [native-css.ts:9](https://github.com/Specless-Next/creative-utils/blob/06f89bf/src/native-css.ts#L9)*

Generate a link to Native CSS Ad Server Function.
A css file is returned.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`orgId` | string | - | Organization Id |
`domain` | string | - | Domain Url - **Do not prefix with https or http** |
`cacheTimeout` | number | 6 * 60 * 60 | Enter timeout for caching in seconds - Default to 6 hours  |

**Returns:** string
