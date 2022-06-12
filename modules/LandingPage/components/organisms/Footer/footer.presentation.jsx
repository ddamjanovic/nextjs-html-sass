import FooterContact from '../../molecules/Footer/FooterRight/footerContact';
import FooterFollow from '../../molecules/Footer/FooterRight/footerFollow';
import FooterInformation from '../../molecules/Footer/FooterLeft/footerInformation';
import classes from './footer.module.scss';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  getFooterAssets,
  getFooterContent,
} from '../../../../../common/services/content/footerContentService';
import { getMultilanguageContents } from '../../../../Subpages/services/firebaseSubpagesService';

const FooterPresentation = () => {
  const { locale } = useRouter();
  const [pageContent, setPageContent] = useState('');
  const [footerAssets, setFooterAssets] = useState([]);

  useEffect(async () => {
    setPageContent(await getFooterContent());
    setFooterAssets(await getFooterAssets());
  }, []);

  let contents = getMultilanguageContents(locale, pageContent);

  const ImportantLinks = [
    {
      id: 1,
      route: contents?.ImportantLinksRoute1,
      text: contents?.ImportantLinksText1,
    },
    {
      id: 2,
      route: contents?.ImportantLinksRoute2,
      text: contents?.ImportantLinksText2,
    },
  ];

  const KnowledgeHub = [
    {
      id: 1,
      route: contents?.KnowledgeHubRoute1,
      text: contents?.KnowledgeHubText1,
    },
    {
      id: 2,
      route: contents?.KnowledgeHubRoute2,
      text: contents?.KnowledgeHubText2,
    },
    {
      id: 3,
      route: contents?.KnowledgeHubRoute3,
      text: contents?.KnowledgeHubText3,
    },
    {
      id: 4,
      route: contents?.KnowledgeHubRoute4,
      text: contents?.KnowledgeHubText4,
    },
  ];

  const Pricing = [
    {
      id: 1,
      route: contents?.PricingRoute1,
      text: contents?.PricingText1,
    },
    {
      id: 2,
      route: contents?.PricingRoute2,
      text: contents?.PricingText2,
    },
  ];

  const MoreInformation = [
    {
      id: 1,
      route: contents?.MoreInformationRoute1,
      text: contents?.MoreInformationText1,
    },
    {
      id: 2,
      route: contents?.MoreInformationRoute2,
      text: contents?.MoreInformationText2,
    },
    {
      id: 3,
      route: contents?.MoreInformationRoute3,
      text: contents?.MoreInformationText3,
    },
  ];

  const TestTools = [
    {
      id: 1,
      route: contents?.TestToolsRoute1,
      text: contents?.TestToolsText1,
    },
    {
      id: 2,
      route: contents?.TestToolsRoute2,
      text: contents?.TestToolsText2,
    },
    {
      id: 3,
      route: contents?.TestToolsRoute3,
      text: contents?.TestToolsText3,
    },
  ];

  return (
    <div className={classes.background}>
      <div className={classes.main}>
        <div className={classes.left}>
          <FooterInformation
            links={ImportantLinks}
            title={contents?.importantLinks}
          />
          <FooterInformation links={Pricing} title={contents?.pricing} />
          <FooterInformation links={TestTools} title={contents?.testTools} />
          <FooterInformation
            links={KnowledgeHub}
            title={contents?.knowledgeHub}
          />
          <FooterInformation
            links={MoreInformation}
            title={contents?.moreInformation}
          />
        </div>
        <div className={classes.right}>
          <FooterFollow
            title={contents?.followUs}
            assets={footerAssets.iconAssets}
          />
          <FooterContact contents={contents} />
        </div>
      </div>

      <div className={classes.footerBottom}>
        <p>© {contents?.footerTitle}</p>
      </div>
    </div>
  );
};

export default FooterPresentation;
