import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-slate-100 p-3 text-center">
      <p className="italic animate-pulse">
        Hopefully it can be of benefit to us all.
      </p>
      <p>Quran &copy; {year}.</p>
    </div>
  );
};

export default Footer;
