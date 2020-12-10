const FILE_CACHER_URL = 'https://worker.specless.app/1/file-cacher';
const NATIVE_CSS_URL =
  'https://us-central1-specless-next.cloudfunctions.net/ad-server-native-css';

/**
 * Generate a link to Native CSS Ad Server Function
 * @param orgId - Organization Id
 * @param domain - Domain Url - **DO NOT ENTER http or https**
 * @param cacheTimeout - Enter timeout for caching in seconds - Default to 6 hours
 */
const formNativeCssUrl = (
  orgId: string,
  domain: string,
  cacheTimeout = 60 * 60
) => {
  const cacheValue = Math.floor(Date.now() / (1000 * cacheTimeout));
  const nativeUrl = `${NATIVE_CSS_URL}?org=${orgId}&domain=${domain}&cache=${cacheValue}`;
  return `${FILE_CACHER_URL}?url=${encodeURIComponent(nativeUrl)}`;
};

export {formNativeCssUrl};
