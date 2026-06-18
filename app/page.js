import { Footer, Navbar } from '../components';
import { About, Feedback, GetStarted, Hero, Insights, WhatsNew } from '../sections';
import BackgroundAnimation from '../components/BackgroundAnimation';

const Page = () => (
  <div className="bg-primary-black overflow-hidden relative">
    <BackgroundAnimation />

    <div className="relative z-10">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>
      <div className="relative">
        <Insights />
        <div className="gradient-04 z-0" />
        <Feedback />
      </div>
      <Footer />
    </div>
  </div>
);

export default Page;
