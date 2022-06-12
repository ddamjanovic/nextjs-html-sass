/**
 * Inserts HTML line breaks (<br> or <br />) in front of each newline (\n) in a string.
 * @param {*} str
 * @param {*} is_xhtml
 * @returns
 */
export function nl2br(str, is_xhtml) {
  if (typeof str === 'undefined' || str === null) {
    return '';
  }
  var breakTag =
    is_xhtml || typeof is_xhtml === 'undefined' ? '<br />' : '<br>';
  return (str + '').replace(
    /([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,
    '$1' + breakTag + '$2'
  );
}
