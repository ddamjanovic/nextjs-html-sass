import fire from '../../../../config/fire-config';

export async function getLangContent(sectionNumber, lang) {
  let langContent;
  let db = fire.firestore();

  await db
    .collection('internationalization/pages/landing/content/' + lang)
    .get()
    .then(langContentCollection => {
      langContentCollection.forEach(doc => {
        if (doc.id === sectionNumber) {
          langContent = { id: doc.id, ...doc.data() };
        }
      });
    })
    .catch(error => {
      console.error('Error fetching document: ', error);
    });

  return langContent;
}
