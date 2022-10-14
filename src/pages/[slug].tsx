import * as fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Posts from '@/components/Posts/Posts';
import { PropsType } from '@/types';

export function Article({ frontmatter, slug, content }: PropsType) {
  return <Posts frontmatter={frontmatter} slug={slug} content={content} />;
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('_posts'));

  const tempPaths = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('_posts', filename),
      'utf-8',
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      params: {
        slug: filename.replace('.md', ''),
        frontmatter,
      },
    };
  });

  const paths = tempPaths.filter((path) => {
    return path && path;
  });

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params: { slug } }: any) {
  const markdownWithMeta = fs.readFileSync(
    path.join('_posts', slug + '.md'),
    'utf-8',
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
    revalidate: 10,
  };
}

export default Article;
