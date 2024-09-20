/* eslint-disable react/function-component-definition */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { insights } from '../../constants';
import BodyBlog from '../../sections/BodyBlog';
import { Footer, Navbar } from '../../components';

export default function Page() {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (router.isReady && slug) {
      const slugValue = Array.isArray(slug) ? slug[0] : slug;
      const foundPost = insights.find((item) => item.slug === slugValue);
      setPost(foundPost);
    }
  }, [router.isReady, slug]);

  if (!router.isReady) {
    return (
      <div className="bg-primary-black text-white absolute inset-0 flex items-center justify-center">
        <p className="text-center">Cargando...</p>
      </div>
    );
  }

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
