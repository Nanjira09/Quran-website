import Head from "next/head";
import Main from "../components/Main";

export default function Home({ suras }) {
  // console.log(suras);
  return (
    <div className="bg-slate-50 min-h-screen">
      <Head>
        <title>Quran App</title>
        <meta name="description" content="Quran website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main suras={suras} />
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://equran.id/api/surat");
  const suras = await response.json();

  return {
    props: {
      suras,
    },
  };
}
