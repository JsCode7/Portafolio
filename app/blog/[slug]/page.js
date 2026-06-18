import { insights } from '../../../constants';
import BodyBlog from '../../../sections/BodyBlog';
import { Footer, Navbar } from '../../../components';
import { notFound } from 'next/navigation';

// Reemplaza getStaticPaths
export function generateStaticParams() {
  return insights.map((post) => ({
    slug: post.slug,
  }));
}

// Metadata dinámica para SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = insights.find((item) => item.slug === slug);
  return {
    title: post ? `${post.title} | José Daniel` : 'Blog | José Daniel',
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const post = insights.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <BodyBlog post={post} />
      <Footer />
    </div>
  );
}
