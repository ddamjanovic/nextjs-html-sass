import fire from '../../../../config/fire-config';

export async function getIconAssets() {
  let iconAssets;
  let db = fire.firestore();

  await db
    .collection('assets/icons/pages')
    .get()
    .then(iconAssetsCollection => {
      iconAssetsCollection.forEach(doc => {
        if (doc.id === 'landing') {
          iconAssets = { id: doc.id, ...doc.data() };
        }
      });
    })
    .catch(error => {
      console.error('Error fetching document: ', error);
    });

  return iconAssets;
}

export async function getImageAssets() {
  let imageAssets;
  let db = fire.firestore();

  await db
    .collection('assets/images/pages')
    .get()
    .then(imageAssetsCollection => {
      imageAssetsCollection.forEach(doc => {
        if (doc.id === 'landing') {
          imageAssets = { id: doc.id, ...doc.data() };
        }
      });
    })
    .catch(error => {
      console.error('Error fetching documents: ', error);
    });

  return imageAssets;
}
