import Link from 'next/link';

export default function Nav() {
  return (
    <header className='border-b-1 border-slate-200 bg-white/90 shadow-slate-700/5 after:bg-slate-200 lg:border-slate-200 relative z-20 w-full border-b shadow-lg after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full lg:backdrop-blur-sm lg:after:hidden'>
      <div className='relative mx-auto max-w-full px-8 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]'>
        <nav
          aria-label='main navigation'
          className='text-slate-700 flex h-[5.5rem] items-stretch justify-between font-medium'
          role='navigation'
        >
          <a
            id='WindUI'
            aria-label='WindUI logo'
            aria-current='page'
            className='flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1'
          >
            Markdown Blog
          </a>
          <Link href='/'>
            <a className='flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1'>
              Home
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
