import classes from './ChatbotHeader.module.scss';
import ImageLoader from '../../../../../common/components/atoms/ImageLoader/ImageLoader';

const ChatbotHeader = ({ toggleFloating }) => {
  return (
    <div className={classes.headerWrapper}>
      <button onClick={() => toggleFloating()}>
        <ImageLoader
          alt={'chatbot close image'}
          src={`https://firebasestorage.googleapis.com/v0/b/qio-gbi-test.appspot.com/o/CloseIcon.png?alt=media&token=251ac710-c5f1-4cf8-9ab8-dbe95e145d5c`}
          width={28}
          height={25}
        />
      </button>
    </div>
  );
};

export default ChatbotHeader;
