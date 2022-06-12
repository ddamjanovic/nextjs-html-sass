import SimpleChatBot from 'react-simple-chatbot';
import ChatbotHeader from '../../molecules/ChatbotHeader/ChatbotHeader';
import { useState } from 'react';
import classes from './CustomChatBot.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import { getInfoBotSteps } from '../../../services/infoBotSteps';
import {
  setisChatbotClosed
} from '../../../../../redux/reducers/chatbotSlice';

const CustomChatBot = () => {

  let cx = classNames.bind(classes);
  const dispatch = useDispatch();

  const [openedChatbot, setOpenedChatbot] = useState(false);
  const [openedInfoSection, setOpenedInfoSection] = useState(false);
  const { infoBotContent, infoBotMode } = useSelector(state => state.chatbot);

  const toggleFloating = () => {
    if (openedChatbot) {
      setOpenedInfoSection(false);
    }
    if (!openedChatbot && infoBotMode) {
      setOpenedInfoSection(true);
    }
    setOpenedChatbot(!openedChatbot);
    dispatch(setisChatbotClosed(openedChatbot));
  };

  function setDefaultStates() {
    setOpenedChatbot(false);
    setOpenedInfoSection(false);
  }

  const [steps] = useState(
    getInfoBotSteps(setOpenedInfoSection, setDefaultStates)
  );

  return (
    <div
      className={cx({
        wrapper: openedChatbot
      })}
    >
      {/* Info bot content */}
      <div
        className={cx({
          infoSection: openedInfoSection,
          hideInfoSection: !openedInfoSection
        })}
      >
        {openedInfoSection && (
          <div className={classes.infoContent}>{infoBotContent}</div>
        )}
      </div>

      <div className={classes.chatbotSection}>
        <SimpleChatBot
          className={classes.chatbotCustom}
          headerTitle={'GBI Chat Bot'}
          steps={steps}
          width={'40em;'}
          floating={true}
          hideUserAvatar={true}
          opened={openedChatbot}
          toggleFloating={toggleFloating}
          headerComponent={<ChatbotHeader toggleFloating={toggleFloating} />}
          customStyle={{
            width: '25vw',
            margin: '1em 0em 1em 6em'
          }}
          footerStyle={{
            display: 'none',
            height: '1px'
          }}
          avatarStyle={{
            boxShadow: 'none',
            height: '3.5em',
            marginRight: '-3.5em'
          }}
          bubbleStyle={{
            color: 'rgba(83, 113, 153, 1)',
            backgroundColor: 'rgba(233, 237, 242, 1)',
            fontWeight: '400',
            padding: '0.3em 0.3em 0.3em 1em',
            margin: '0em 0em 1.5em 3em',
            borderRadius: '0.5em'
          }}
          bubbleOptionStyle={{
            color: 'white',
            backgroundColor: '#537199',
            fontWeight: '500',
            borderRadius: '10px',
            padding: '0.8em',
            cursor: 'pointer'
          }}
          contentStyle={{
            color: 'red',
            backgroundColor: '#FFFFFF',
            height: '25vh',
            minHeight: '250px',
            paddingLeft: '0.5em',
            paddingTop: '2em',
            paddingBottom: '3vh'
          }}
          style={{
            minHeight: '250px',
            minWidth: '340px',
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 0px 32px rgba(0, 0, 0, 0.09)',
            color: 'red',
            borderRadius: '15px'
          }}
          botAvatar={
            'https://user-images.githubusercontent.com/45834270/126041891-ff5c6665-5392-4a1c-b4f1-0e4eee21f443.png'
          }
          floatingIcon={
            'https://user-images.githubusercontent.com/45834270/126038284-46b71605-135d-46a2-8e0d-7de99f27a3ad.png'
          }
        />
      </div>
    </div>
  );
};

export default CustomChatBot;
