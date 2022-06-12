export function getSuccessfulSentEmailMessage(locale) {
  let multilanguage = {
    title: '',
    message: '',
  };

  if (locale === 'en') {
    multilanguage.title = 'Success';
    multilanguage.message = 'An email has been successfully sent.';
  } else if (locale === 'fr') {
    multilanguage.title = 'Succès';
    multilanguage.message =
      'Un e-mail a été envoyé avec succès à votre conseiller.';
  } else if (locale === 'it') {
    multilanguage.title = 'Successo';
    multilanguage.message =
      "Un'e-mail è stata inviata con successo al tuo consulente. ";
  } else if (locale === 'de') {
    multilanguage.title = 'Erfolg';
    multilanguage.message =
      'Eine E-Mail wurde erfolgreich an Ihren Berater gesendet.';
  }

  return multilanguage;
}
