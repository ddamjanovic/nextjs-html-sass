import fire from '../../config/fire-config';
const CUSTOMER_DAY_PASS_PURCHASE_TEMPLATE = 'M7lNCf8ARS1Mxz16Fg5I';
const TOKEN_EXPIRATION_TEMPLATE = '8RnpvPjgp2lgBpBAZnNQ';
const DONATION_TEMPLATE = 'W9V1e1zcM17NCvn7OBp1';

export async function getDayPassTemplate(language) {
  let db = fire.firestore();
  let templatesRef = await db
    .collection('/common/emails/templates')
    .doc(CUSTOMER_DAY_PASS_PURCHASE_TEMPLATE)
    .get();

  if (!templatesRef.data()) return getMockupEnDayPassTemplate();
  if (language === 'de') return templatesRef.data().de;
  if (language === 'en') return templatesRef.data().en;
  if (language === 'fr') return templatesRef.data().fr;
  if (language === 'it') return templatesRef.data().it;

  // This is default one
  return templatesRef.data().en;
}

export async function getDonationTemplate(language) {
  let db = fire.firestore();
  let templatesRef = await db
    .collection('/common/emails/templates')
    .doc(DONATION_TEMPLATE)
    .get();

  if (language === 'de') return templatesRef.data().de;
  if (language === 'en') return templatesRef.data().en;
  if (language === 'fr') return templatesRef.data().fr;
  if (language === 'it') return templatesRef.data().it;
}

export async function getTokenExpirationTemplate(language) {
  let db = fire.firestore();
  let templatesRef = await db
    .collection('/common/emails/templates')
    .doc(TOKEN_EXPIRATION_TEMPLATE)
    .get();

  if (language === 'de') return templatesRef.data().de;
  if (language === 'en') return templatesRef.data().en;
  if (language === 'fr') return templatesRef.data().fr;
  if (language === 'it') return templatesRef.data().it;
}

export async function createDayPassTemplate() {
  let db = fire.firestore();
  let templatesRef = db.collection('/common/emails/templates');
  await templatesRef.add({
    description: 'Confirmation after day pass purchase',
    en: {
      content: {
        html: '<html><body><p>Dear {NAME},<br>Your day pass is valid until {EXPIRATION_DATETIME}.</p></body></html>',
        plain:
          'Dear {NAME},\r\nYour day pass is valid until {EXPIRATION_DATETIME}.',
      },
      replyTo: {
        email: 'noreply@qio.finance',
        name: 'QIO Finance',
      },
      subject: 'Thanks for buying a day pass',
    },
    de: {
      content: {
        html: '<html><body><p>Liebe/r {NAME}<br>Dein day pass ist gültig bis am {EXPIRATION_DATETIME}.</p></body></html>',
        plain:
          'Liebe/r {NAME}\r\nDein day pass ist gültig bis am {EXPIRATION_DATETIME}.',
      },
      replyTo: {
        email: 'noreply@qio.finance',
        name: 'QIO Finance',
      },
      subject: 'Danke, dass du einen Day Pass gekauft hast',
    },
  });
}

function getMockupEnDayPassTemplate() {
  return {
    content: {
      html: '<html><body><p>Dear {NAME},<br>Your day pass is valid until {EXPIRATION_DATETIME}.</p></body></html>',
      plain:
        'Dear {NAME},\r\nYour day pass is valid until {EXPIRATION_DATETIME}.',
    },
    replyTo: {
      email: 'noreply@qio.finance',
      name: 'QIO Finance',
    },
    subject: 'Thanks for buying a day pass',
  };
}
