**[creative-utilities](../README.md)**

> [Globals](../globals.md) / "panel"

# Module: "panel"

## Index

### Type aliases

* [panelQuery](_panel_.md#panelquery)

### Functions

* [createIFrame](_panel_.md#createiframe)
* [formPanelUrl](_panel_.md#formpanelurl)

## Type aliases

### panelQuery

Ƭ  **panelQuery**: { [k:string]: string \| number \| boolean; height: number ; id: string ; width: number  }

*Defined in [panel.ts:4](https://github.com/Specless-Next/creative-utilities/blob/af604f3/src/panel.ts#L4)*

Utility function to form Panel Url

#### Type declaration:

Name | Type |
------ | ------ |
`height` | number |
`id` | string |
`width` | number |

## Functions

### createIFrame

▸ `Const`**createIFrame**(): HTMLElement

*Defined in [panel.ts:47](https://github.com/Specless-Next/creative-utilities/blob/af604f3/src/panel.ts#L47)*

**Returns:** HTMLElement

Created Iframe

___

### formPanelUrl

▸ `Const`**formPanelUrl**(`panelQuery`: panelQuery, `csfConstants`: any): string

*Defined in [panel.ts:11](https://github.com/Specless-Next/creative-utilities/blob/af604f3/src/panel.ts#L11)*

#### Parameters:

Name | Type |
------ | ------ |
`panelQuery` | panelQuery |
`csfConstants` | any |

**Returns:** string
