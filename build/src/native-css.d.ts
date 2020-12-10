/**
 * Generate a link to Native CSS Ad Server Function.
 *
 * @param orgId - Organization Id
 * @param domain - Domain Url - **Do not prefix with https or http**
 * @param cacheTimeout - Enter timeout for cache in seconds - Default to 6 hours
 *
 * @returns - Css File
 */
declare const formNativeCssUrl: (orgId: string, domain: string, cacheTimeout?: number) => string;
export { formNativeCssUrl };
