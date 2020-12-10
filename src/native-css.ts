const FILE_CACHER_URL = 'https://worker.specless.app/1/file-cacher';
const NATIVE_CSS_URL =
  'https://us-central1-specless-next.cloudfunctions.net/ad-server-native-css';

/**
 * Generate a link to Native CSS Ad Server Function.
 *
 * @param orgId - Organization Id
 * @param domain - Domain Url - **Do not prefix with https or http**
 * @param cacheTimeout - Enter timeout for cache in seconds - Default to 6 hours
 *
 * @returns - Css File
 */
const formNativeCssUrl = (
  orgId: string,
  domain: string,
  cacheTimeout = 6 * 60 * 60
) => {
  const cacheValue = Math.floor(Date.now() / (1000 * Math.abs(cacheTimeout)));

  const finalDomain = domain.replace('https://', '').replace('http://', '');
  const nativeUrl = `${NATIVE_CSS_URL}?org=${orgId}&domain=${finalDomain}&cache=${cacheValue}`;
  return `${FILE_CACHER_URL}?url=${encodeURIComponent(nativeUrl)}`;
};

export {formNativeCssUrl};
