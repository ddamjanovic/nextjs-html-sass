import fire from '../../../config/fire-config';

export async function getNavbarAssets() {
  let multilanguageNavbarAssets;
  let db = fire.firestore();
  await db
    .collection('/assets/icons/common')
    .get()
    .then(navAssets => {
      navAssets.forEach(doc => {
        multilanguageNavbarAssets = { id: doc.id, ...doc.data() };
      });
    })
    .catch(error => {
      console.error('Error fetching document: ', error);
    });

  return multilanguageNavbarAssets;
}
