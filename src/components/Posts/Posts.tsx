import Head from 'next/head';
import { PropsType } from '@/types';

export default function Posts({ frontmatter, slug, content }: PropsType) {
  const { image, title, author, description, tags, date, categories } =
    frontmatter;

  return (
    <>
      <Head>
        <title>{slug}</title>
        <meta name={description} content={tags.join(',')} />
        <meta name='Title' content={title} />
        <meta name='Author' content={author} />
        <meta name='Image' content={image} />
        <meta name='Date' content={date} />
        <meta name='Categories' content={categories.join(',')} />
      </Head>

      <section>
        <div className='mt-20 mb-20 flex flex-col items-center justify-center'>
          <input type='image' src={image} width={600} height={300} />
          <span className='text-4xl'>{title}</span>
          <span className='text-4xl'>{author}</span>
          <span className='text-4xl'>{description}</span>
        </div>
        <div className='flex items-center justify-center'>
          <p
            className='mb-20 w-2/5 text-lg'
            dangerouslySetInnerHTML={{ __html: content }}
          ></p>
        </div>
      </section>
    </>
  );
}
