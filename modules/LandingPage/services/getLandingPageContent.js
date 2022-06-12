import { getLangContent } from '../repository/internationalization/landingLangRepository';
import {
  getIconAssets,
  getImageAssets
} from '../repository/assets/landingAssetsRepository';

export async function getLandingPageContent(sectionNumber) {
  var setEnContent = await getLangContent(sectionNumber, 'en');
  var setFrContent = await getLangContent(sectionNumber, 'fr');
  var setItContent = await getLangContent(sectionNumber, 'it');
  var setDeContent = await getLangContent(sectionNumber, 'de');
  var imageAssets = await getImageAssets();
  var iconAssets = await getIconAssets();

  return {
    setEnContent: setEnContent,
    setFrContent: setFrContent,
    setItContent: setItContent,
    setDeContent: setDeContent,
    setImageAssets: imageAssets,
    setIconAssets: iconAssets
  };
}
