import { getMultilanguageNavbar } from '../../repository/internationalization/navbarLangRepository';
import { getNavbarAssets } from '../../repository/assets/navbarAssetsRepository';

export async function getNavbarContent() {
  let multilanguageNavbar = await getMultilanguageNavbar();
  let navBarAssets = await getNavbarAssets();
  return {
    enNavContent: multilanguageNavbar.filter(
      (content) => content.id === 'en'
    )[0], // We need to unwrap content, we have only one element and he is on the 0 index
    frNavContent: multilanguageNavbar.filter(
      (content) => content.id === 'fr'
    )[0], // we do not have anything else on the index 1,2 etc.
    itNavContent: multilanguageNavbar.filter(
      (content) => content.id === 'it'
    )[0],
    deNavContent: multilanguageNavbar.filter(
      (content) => content.id === 'de'
    )[0],
    navBarAssets: navBarAssets,
  };
}
