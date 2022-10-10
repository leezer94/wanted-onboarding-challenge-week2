import { PropsType } from '@/types';

const Card = ({ details }: PropsType) => {
  const { image, title, categories, description } = details;

  return (
    <div className=' bg-white text-slate-500 shadow-slate-200 mb-20 mt-5 flex overflow-hidden rounded shadow-md'>
      <figure>
        <input
          type='image'
          src={image}
          alt='card image'
          width={700}
          height={400}
        />
      </figure>
      <div className='p-6'>
        <header className='mb-4 mt-4'>
          <h3 className='text-slate-700 text-xl font-medium'>{title}</h3>
          <p className='text-slate-400 text-sm'>
            {`Categories : ${categories.join(' / ')}`}
          </p>
        </header>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
