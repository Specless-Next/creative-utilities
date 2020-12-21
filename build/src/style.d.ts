/**
 * Create a style tag with given css string
 * @param cssStr - Css String
 * @param id - Optional id for element
 * @param props - Optional - pass additional attribute as key values
 */
declare const createStyleTag: (cssStr: string, id?: string | undefined, props?: object | undefined) => HTMLStyleElement;
export { createStyleTag };
