import * as fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Card from '@/components/@commons/Card/Card';
import Head from 'next/head';

const HomePage = ({
  posts,
}: {
  posts: [
    {
      slug: string;
      frontmatter: {
        author: string;
        categories: string[];
        data: string;
        image: string;
        description: string;
        slug: string;
        tags: string[];
        title: string;
      };
    },
  ];
}) => {
  return (
    <div>
      <Head>
        <title>블로그 메인</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {posts.map(({ slug, frontmatter }, i) => {
        return (
          <Link key={i} href={slug}>
            <a>
              <Card details={frontmatter} />
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default HomePage;

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('_posts'));

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');

    const markdownWithMeta = fs.readFileSync(
      path.join('_posts', filename),
      'utf-8',
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
