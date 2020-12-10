**[creative-utilities](../README.md)**

> [Globals](../globals.md) / "native-css"

# Module: "native-css"

## Index

### Variables

* [FILE\_CACHER\_URL](_native_css_.md#file_cacher_url)
* [NATIVE\_CSS\_URL](_native_css_.md#native_css_url)

### Functions

* [formNativeCssUrl](_native_css_.md#formnativecssurl)

## Variables

### FILE\_CACHER\_URL

• `Const` **FILE\_CACHER\_URL**: \"https://worker.specless.app/1/file-cacher\" = "https://worker.specless.app/1/file-cacher"

*Defined in [native-css.ts:1](https://github.com/Specless-Next/creative-utils/blob/68f1d5e/src/native-css.ts#L1)*

___

### NATIVE\_CSS\_URL

• `Const` **NATIVE\_CSS\_URL**: \"https://us-central1-specless-next.cloudfunctions.net/ad-server-native-css\" = "https://us-central1-specless-next.cloudfunctions.net/ad-server-native-css"

*Defined in [native-css.ts:2](https://github.com/Specless-Next/creative-utils/blob/68f1d5e/src/native-css.ts#L2)*

## Functions

### formNativeCssUrl

▸ `Const`**formNativeCssUrl**(`orgId`: string, `domain`: string, `cacheTimeout?`: number): string

*Defined in [native-css.ts:14](https://github.com/Specless-Next/creative-utils/blob/68f1d5e/src/native-css.ts#L14)*

Generate a link to Native CSS Ad Server Function.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`orgId` | string | - | Organization Id |
`domain` | string | - | Domain Url - **Do not prefix with https or http** |
`cacheTimeout` | number | 6 * 60 * 60 | Enter timeout for cache in seconds - Default to 6 hours  |

**Returns:** string

- Css File
