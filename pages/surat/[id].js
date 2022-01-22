import React from "react";

import ReactHtmlParser from "react-html-parser";

const details = ({ sura }) => {
  return (
    <div className="text-center bg-slate-100 p-3 my-3">
      <h3 className="font-bold">{sura.nama_latin}</h3>
      <p>{ReactHtmlParser(sura.deskripsi)}</p>
      <audio
        src={sura.audio}
        type="audio/mpeg"
        controls
        autoPlay={true}
        className="bg-green-500 mx-auto my-4"
      />
    </div>
  );
};

export default details;

export async function getStaticPaths() {
  const res = await fetch("https://equran.id/api/surat");
  const suras = await res.json();

  const paths = suras.map((sura) => ({
    params: { id: sura.nomor.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://equran.id/api/surat/${params.id.toString()}`
  );
  const sura = await res.json();

  return { props: { sura } };
}
