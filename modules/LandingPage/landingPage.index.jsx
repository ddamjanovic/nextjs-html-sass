import Empowering from './components/organisms/Empowering/empowering.index';
import HomePage from './components/organisms/Home/homePage.index';
import StepsPage from './components/organisms/Steps/steps.index';
import Webinars from './components/organisms/Webinars/webinars.index';
import Slider from './components/organisms/Slider/slider.index';
import Abc from './components/organisms/ABC/abc.index';
import Pricing from './components/organisms/Pricing/pricing.index';
import Why from './components/organisms/Why/why.index';
import Footer from './components/organisms/Footer/footer.index';

const LandingPage = () => {
  return (
    <>
      <HomePage />
      <Empowering />
      <Slider />
      <Abc />
      <StepsPage />
      <Webinars />
      <Pricing />
      <Why />
      <Footer />
    </>
  );
};

export default LandingPage;
