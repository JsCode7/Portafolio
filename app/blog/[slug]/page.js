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
  
  if (!post) {
    return {
      title: 'Blog | José Daniel',
    };
  }

  const postImage = post.imgPost || post.imgUrl || '/og-image.jpg';

  return {
    title: `${post.title} | José Daniel`,
    description: post.subtitle,
    openGraph: {
      title: `${post.title} | José Daniel`,
      description: post.subtitle,
      images: [
        {
          url: postImage,
          alt: post.title,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | José Daniel`,
      description: post.subtitle,
      images: [postImage],
    },
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
