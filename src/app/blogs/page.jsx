// pages/blog.js

import Head from 'next/head';
import Link from 'next/link';

const Blog = () => {
    // Sample blog post data
    const blogPosts = [
        { id: 1, title: 'First Blog Post', content: 'This is my first blog post.' },
        { id: 2, title: 'Second Blog Post', content: 'This is my second blog post.' },
        // Add more blog posts as needed
    ];

    return (
        <div>
            <Head>
                <title>Blog</title>
                <meta name="description" content="Welcome to my blog" />
            </Head>
            <h1>Blog</h1>
            <ul>
                {blogPosts.map(post => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>
                            <a>{post.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Blog;
