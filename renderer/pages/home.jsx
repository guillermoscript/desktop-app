import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

function Home() {
  return (
    <>
      <Head>
        <title>Home - Nextron (with-javascript-tailwindcss)</title>
      </Head>
      <div className='grid grid-col-1 text-2xl w-full text-center'>
        
      </div>
      <div className='mt-1 w-full flex-wrap flex justify-center'>
        <Link href='/next'>
          <a className='btn-blue'>Go to next page</a>
        </Link>
        <Link href='/polizas'>
          <a className='btn-blue'>Go to Poliza</a>
        </Link>
        <Link href='/auth'>
          <a className='btn-blue'>Go to Auth</a>
        </Link>
      </div>
    </>
  );
}

export default Home;
