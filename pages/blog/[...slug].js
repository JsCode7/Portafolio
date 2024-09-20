import { Footer, Navbar } from '../../components';
import BodyBlog from '../../sections/BodyBlog';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <BodyBlog />
    <Footer />
  </div>
);

export default Page;
