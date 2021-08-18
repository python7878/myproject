import Head from 'next/head';
import Construction from '../components/Construction';

export default function Home() {
  return (
    <div className="h-screen w-full bg-red-400">
      <Head>
        <title>Elite Cricket</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Construction />
    </div>
  )
}
