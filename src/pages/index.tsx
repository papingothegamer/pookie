import React from 'react';
import Head from 'next/head';
import VideoHeader from '../components/VideoHeader';
import Body from '../components/TextSection';
import Gallery from '../components/Gallery';
import JumboFooter from '../components/JumboFooter';
import LoadingAnimation from '../components/LoadingAnimation';


const Home: React.FC = () => {

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Head>
        <title>Baby Girl</title>
      </Head>

      {loading ? (
        <LoadingAnimation />
      ) : (
        <>
          <VideoHeader />
          <Body />
          <Gallery />
          <JumboFooter />
        </>
      )}
    </div>
  );
};

export default Home;