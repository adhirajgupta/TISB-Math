import Navbar from '@/components/Navbar'
import Head from 'next/head'

const Blog = () => {
  return (
    <>
      <Head>
        <title>TISB π-thon | Blog</title>
        <meta name='description' content='TISB π-thon' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <div className='w-screen h-full bg-primary'>
        <Navbar />

        <div className='w-full h-full p-8'></div>
      </div>
    </>
  )
}

export default Blog
