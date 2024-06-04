// pages/blog/[id].js

import { useRouter } from 'next/router';
import Head from 'next/head';

const BlogPost = () => {
    const router = useRouter();
    const { id } = router.query;

    // Sample blog post data (replace with actual data fetched from API or database)
    const blogPost = {
        1: { title: 'First Blog Post', content: 'This is my first blog post.' },
        2: { title: 'Second Blog Post', content: 'This is my second blog post.' },
        // Add more blog posts as needed
    };

    if (!id || !blogPost[id]) {
        return <p>Blog post not found</p>;
    }

    const { title, content } = blogPost[id];

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={content} />
            </Head>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    );
};

export default BlogPost;
