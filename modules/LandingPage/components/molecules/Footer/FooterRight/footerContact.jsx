import classes from './footerContact.module.scss';
import { Button } from '../../../../../../common/components/atoms/Button/button.component';
import { useState } from 'react';
import { isEmailValid } from '../../../../../../common/services/validations';
import { useDispatch } from 'react-redux';
import { handleSnackbar } from '../../../../../../redux/reducers/commonSlice';
import { getSuccessfulSentEmailMessage } from '../../../../../../common/services/multilanguageMessages';
import { useRouter } from 'next/router';
import { sendContactUsEmail } from '../../../../services/mailing';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactFooter = ({ contents }) => {
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerMessage, setCustomerMessage] = useState('');
  const [displayCaptcha, setDisplayCaptcha] = useState(false);

  const dispatch = useDispatch();
  const { locale } = useRouter();

  function isSendDisabled() {
    return (
      customerName === '' ||
      customerEmail === '' ||
      customerMessage === '' ||
      !isEmailValid(customerEmail)
    );
  }

  function onCaptchaChange(value) {
    if (value) {
      sendEmail();
      setDisplayCaptcha(false);
    }
  }

  function sendEmailIntent() {
    setDisplayCaptcha(true);
  }

  function sendEmail() {
    sendContactUsEmail(
      customerName,
      customerEmail,
      customerMessage,
      contents.sendEmailTo
    );
    triggerSuccessfulSentEmail();
    resetFieldsValue();
  }

  function resetFieldsValue() {
    setCustomerName('');
    setCustomerEmail('');
    setCustomerMessage('');
  }

  function triggerSuccessfulSentEmail() {
    let multilanguage = getSuccessfulSentEmailMessage(locale);
    dispatch(
      handleSnackbar({
        show: true,
        indicator: 'success',
        title: multilanguage.title,
        message: multilanguage.message,
      })
    );
  }

  return (
    <div className={classes.main}>
      <div className={classes.title}>
        <h1>{contents?.contactUs}</h1>
      </div>
      <div className={classes.form}>
        <div className={classes.inputs}>
          <form className={classes.name}>
            <input
              type="text"
              placeholder={contents?.namePlaceholder}
              className={classes.inputName}
              value={customerName}
              onChange={(e) => {
                setCustomerName(e.target.value);
              }}
            />
          </form>
          <form className={classes.email}>
            <input
              type="text"
              placeholder={contents?.emailPlaceholder}
              className={classes.inputName}
              value={customerEmail}
              onChange={(e) => {
                setCustomerEmail(e.target.value);
              }}
            />
          </form>
        </div>
        <form>
          <textarea
            name="message"
            className={classes.inputMessage}
            cols="30"
            rows="10"
            placeholder={contents?.bodyPlaceholder}
            value={customerMessage}
            onChange={(e) => {
              setCustomerMessage(e.target.value);
            }}
          />
        </form>
      </div>
      <div className={classes.sendButton}>
        {displayCaptcha ? (
          <ReCAPTCHA
            sitekey={process.env.RECAPTCHA_SITE_KEY}
            onChange={onCaptchaChange}
            size="normal"
          />
        ) : (
          <Button
            buttonStyle="btnWhite"
            buttonSize="btnSmall"
            onClick={() => {
              sendEmailIntent();
            }}
            disabled={isSendDisabled()}
          >
            {contents?.send}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ContactFooter;
