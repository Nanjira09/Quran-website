import Link from "next/link";
import React from "react";

const Paper = ({ sura }) => {
  return (
    <Link href={`/surat/${sura.nomor}`}>
      <div className="bg-white p-3 h-32 rounded-md relative shadow-md flex flex-col justify-end">
        <h3 className="font-bold text-xl">{sura.nama_latin}</h3>
        <p className="text-gray-500 uppercase">{sura.arti}</p>
        <span className="absolute top-1 left-1 bg-green-100 rounded-full w-6 h-6 flex justify-center content-center">
          {sura.nomor}
        </span>
        <span className="absolute top-1 right-1 text-green-500">
          {sura.jumlah_ayat} verses
        </span>
      </div>
    </Link>
  );
};

export default Paper;
