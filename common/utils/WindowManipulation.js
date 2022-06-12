/**
 * Read current window size
 *
 * @returns x,y coordinates of the current window
 */
export function getWindowSizes() {
  var win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName('body')[0],
    window_x = win.innerWidth || docElem.clientWidth || body.clientWidth,
    window_y = win.innerHeight || docElem.clientHeight || body.clientHeight;
  return { x: window_x, y: window_y };
}
