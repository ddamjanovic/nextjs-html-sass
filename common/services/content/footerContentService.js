import { getFooterIcons } from '../../repository/assets/footerAssetsRepository';
import { getMultilanguageFooter } from '../../repository/internationalization/footerLangRepository';

export async function getFooterContent() {
  let multilanguageFooter = await getMultilanguageFooter();
  return {
    enContent: multilanguageFooter.filter((content) => content.id === 'en')[0], // We need to unwrap content, we have only one element and he is on the 0 index
    deContent: multilanguageFooter.filter((content) => content.id === 'de')[0], // We need to unwrap content, we have only one element and he is on the 0 index
    itContent: multilanguageFooter.filter((content) => content.id === 'it')[0], // We need to unwrap content, we have only one element and he is on the 0 index
    frContent: multilanguageFooter.filter((content) => content.id === 'fr')[0], // We need to unwrap content, we have only one element and he is on the 0 index
  };
}

export async function getFooterAssets() {
  let iconAssets = await getFooterIcons();
  return {
    iconAssets: iconAssets,
  };
}
