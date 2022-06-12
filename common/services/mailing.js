// TODO: After logger is added, handle email response
// ( only on DEV, STG, PROD environments because we have CORS problem on the local)
export async function sendEmail(objectID) {
  return fetch(process.env.BACKEND_DOMAIN + '/sendmail/' + objectID, {
    mode: 'no-cors', // TODO: Remove this after logger is added & handle response
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export function getSignature() {
  let signature = '';

  let openDiv = '<div style="display:inline-flex;width:500px;">';
  let logoDiv =
    '<div style="width: 50px; margin: 1em 1em 0em 0em;"><img src="https://firebasestorage.googleapis.com/v0/b/qio-gbi-dev.appspot.com/o/assets%2Ficons%2Fcommon%2Fpng_logo.png?alt=media&token=8e999c7c-8387-44f8-9e86-8ba8d583bfb3" height="60" /></div>';
  let contentDiv =
    '<div style="display: inline-table;"> <p> <a href="www.goal-based.investments">www.goal-based.investments</a>   – <b style="color:#c4070f;"> It’s investing for everyone! </b>  </p>  <p><b>A service provided by QIO</b> - <a href="www.qio.finance">www.qio.finance</a> </p>  </div>';
  let closeDiv = '</div>';

  signature = openDiv + logoDiv + contentDiv + closeDiv;
  return signature;
}
