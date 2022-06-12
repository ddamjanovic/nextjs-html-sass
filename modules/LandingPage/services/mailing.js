import { createFirebaseEmail } from '../../../common/repository/emails';
import { sendEmail } from '../../../common/services/mailing';
import { nl2br } from '../../../common/services/nl2br';

export async function sendContactUsEmail(name, email, body, sendTo) {
  let populatedTemplate = getPopulatedTemplate(body, name, email);
  let preparedEmail = getPreparedEmailObjectForFirebase(
    populatedTemplate,
    sendTo
  );
  let createdEmail = await createFirebaseEmail(preparedEmail);
  // Comment (uncomment) this when we want( or not ) to not waste limited emails per day on Sendgrid
  sendEmail(createdEmail.ID);
}

function getPopulatedTemplate(body, name, email) {
  let htmlBody = nl2br(body);
  return {
    content: {
      html: '<html><body><p>' + htmlBody + '</p></body></html>',
      plain: body,
    },
    replyTo: {
      email: email,
      name: name,
    },
    subject: 'Contact Us Form',
  };
}

function getPreparedEmailObjectForFirebase(populatedTemplate, sendTo) {
  return {
    content: populatedTemplate.content,
    replyTo: populatedTemplate.replyTo,
    sendTimestamps: [],
    sendAt: new Date(),
    subject: populatedTemplate.subject,
    to: [
      {
        email: sendTo ? sendTo : 'contact@qio.finance',
        name: 'QIO Finance',
      },
    ],
  };
}
