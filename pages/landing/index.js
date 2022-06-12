import LandingPage from '../../modules/LandingPage/landingPage.index';
import dynamic from 'next/dynamic';
const Layout = dynamic(
  () => import('../../common/components/organisms/Layout/Layout'),
  { loading: () => '' }
);

const Home = () => {
  return (
    <Layout isHomePage={true}>
      <LandingPage />
    </Layout>
  );
};

export default Home;
