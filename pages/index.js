import Head from 'next/head';
import Construction from '../components/Construction';

export default function Home() {
  return (
    <div className="h-screen w-full bg-indigo-100">
      <Head>
        <title>Elite Cricket</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Construction />
    </div>
  )
}
