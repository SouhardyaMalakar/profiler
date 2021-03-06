/** URL when running locally */
export const LOCAL_URL = '/';

/** Plugin name */
export const PLUGIN_NAME = 'profile';

/** Pefix of API */
export const API_PREFIX = '/data/plugin/';

/** Tools API */
export const TOOLS_API = API_PREFIX + PLUGIN_NAME + '/tools';

/** Hosts API */
export const HOSTS_API = API_PREFIX + PLUGIN_NAME + '/hosts';

/** Data API */
export const DATA_API = API_PREFIX + PLUGIN_NAME + '/data';

/** Capture Profile API */
export const CAPTURE_PROFILE_API =
    API_PREFIX + PLUGIN_NAME + '/capture_profile';

/** Default Host */
export const DEFAULT_HOST = 'default';

/**
 * Based on palette of Kenneth Kelly's 22 colors of maximum contrast.
 * More information at page 5 of
 * https://eleanormaclure.files.wordpress.com/2011/03/colour-coding.pdf.
 * "F2F3F4" was removed because it's contrast against white is poor.
 */
export const KELLY_COLORS = [
  '0067A5', 'E68FAC', 'E25822', '008856', 'F99379', '604E97', 'F6A600',
  'B3446C', 'DCD300', '8DB600', '654522', '222222', '882D17', 'F3C300',
  '875692', 'F38400', 'A1CAF1', 'BE0032', 'C2B280', '848482', '2B3D26',
];
