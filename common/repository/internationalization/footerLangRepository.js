import fire from '../../../config/fire-config';

export async function getMultilanguageFooter() {
  let multilanguageContent = [];
  let db = fire.firestore();
  await db
    .collection('internationalization/common/footer')
    .get()
    .then((content) => {
      content.forEach((doc) => {
        multilanguageContent.push({ id: doc.id, ...doc.data() });
      });
    })
    .catch((error) => {
      console.error('Error fetching document: ', error);
    });

  return multilanguageContent;
}
