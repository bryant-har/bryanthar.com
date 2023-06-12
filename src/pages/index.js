import Head from 'next/head';
import InputBar from '../components/InputBar'



export default function Home() {
  return (
    <div>
      <Head>
        <title>EtaMac</title>
        <link rel="icon" href="/favicon.ico" />
        <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
      </Head>
      <InputBar/>

    </div>
  )
}
