import fire from '../../config/fire-config';

/**
 * This function will create a object in Firebase, most important
 * task for this function is to populate ID of the created object.
 * Because with that ID we can a send email, without them we can't.
 * @param {emailContent} emailContent with this structure: https://prnt.sc/1qaqm2u
 * @returns createdEmailObject
 */
export async function createFirebaseEmail(emailContent) {
  let db = fire.firestore();
  await db
    .collection('/emails')
    .add(emailContent)
    .then(function (docRef) {
      emailContent.ID = docRef.id;
    })
    .catch(function (error) {
      console.error('Error adding document: ', error);
    });

  return emailContent;
}
