import fire from '../../../config/fire-config';

export async function getFooterIcons() {
  let footerIcons;
  let db = fire.firestore();
  await db
    .collection('/assets/icons/common')
    .get()
    .then((footerAssets) => {
      footerAssets.forEach((doc) => {
        footerIcons = { id: doc.id, ...doc.data() };
      });
    })
    .catch((error) => {
      console.error('Error fetching document: ', error);
    });

  return footerIcons;
}
