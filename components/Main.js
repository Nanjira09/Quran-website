import React, { useState } from "react";
import Paper from "./Paper";

const Main = ({ suras }) => {
  const [search, setSearch] = useState("");
  const filteredSuras = suras.filter((sura) =>
    sura.nama_latin.includes(search)
  );
  //   console.log(suras);
  return (
    <div className="bg-slate-100 w-full lg:w-4/5 lg:mx-auto lg:rounded-lg lg:shadow-md my-2 p-3">
      <section className="text-center">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="rounded-full px-2 py-2 bg-slate-50"
        />
      </section>
      <section className="my-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredSuras?.map((sura) => (
          <Paper sura={sura} key={sura.nomor} />
        ))}
      </section>
    </div>
  );
};

export default Main;
