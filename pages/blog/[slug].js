/* eslint-disable react/function-component-definition */
import { insights } from '../../constants';
import BodyBlog from '../../sections/BodyBlog';
import { Footer, Navbar } from '../../components';

export async function getStaticPaths() {
  const paths = insights.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = insights.find((item) => item.slug === params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}

export default function Page({ post }) {
  if (!post) {
    return (
      <div className="bg-primary-black text-white absolute inset-0 flex items-center justify-center">
        <p className="text-center">Post no encontrado</p>
      </div>
    );
  }

  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <BodyBlog post={post} />
      <Footer />
    </div>
  );
}
