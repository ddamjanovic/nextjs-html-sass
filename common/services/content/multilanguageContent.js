/**
 * Return content based on page language
 * @param {*} locale page language ('en', 'it', 'fr', 'de')
 * @param {*} pageContent must have attributes like enContent, frContent, itContent & deContent
 * @returns
 */
export function getMultilanguageContent(locale, pageContent) {
  let contents;
  if (locale === 'en') {
    contents = pageContent.enContent;
  } else if (locale === 'fr') {
    contents = pageContent.frContent;
  } else if (locale === 'it') {
    contents = pageContent.itContent;
  } else if (locale === 'de') {
    contents = pageContent.deContent;
  }

  return contents;
}
