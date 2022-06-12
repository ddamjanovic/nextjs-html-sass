import fire from '../../../config/fire-config';

export async function getMultilanguageNavbar() {
  let multilanguageNavbarContent = [];
  let db = fire.firestore();
  await db
    .collection('internationalization/common/navbar')
    .get()
    .then(navContent => {
      navContent.forEach(doc => {
        multilanguageNavbarContent.push({ id: doc.id, ...doc.data() });
      });
    })
    .catch(error => {
      console.error('Error fetching document: ', error);
    });

  return multilanguageNavbarContent;
}
