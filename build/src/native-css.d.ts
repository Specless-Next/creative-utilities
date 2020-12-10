/**
 * Generate a link to Native CSS Ad Server Function.
 * A css file is returned.
 *
 * @param orgId - Organization Id
 * @param domain - Domain Url - **Do not prefix with https or http**
 * @param cacheTimeout - Enter timeout for caching in seconds - Default to 6 hours
 */
declare const formNativeCssUrl: (orgId: string, domain: string, cacheTimeout?: number) => string;
export { formNativeCssUrl };
