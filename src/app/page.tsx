import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-2xl'>
        Hi from <strong>feat/testing</strong>
      </h1>
      <p>
        Adipisicing eu irure velit ullamco sunt ea deserunt tempor labore. Esse
        consectetur nulla pariatur sit nostrud velit in ipsum enim ut. Minim
        esse fugiat laboris amet laborum duis minim.
      </p>
      <Image
        className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
        src='/next.svg'
        alt='Next.js Logo'
        width={180}
        height={37}
        priority
      />
    </main>
  );
}
