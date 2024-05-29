import React from "react";
import ccaaLogo from "../assets/ccaa-logo.png"

const Costumers = () => {
  return (
    <section className="w-full my-16 p-8 bg-zinc-800 flex flex-col justify-center">
      <h2 className="text-center text-4xl font-bold">
        Conheça nossos clientes
      </h2>
      <div className="p-8 flex flex-wrap gap-8 justify-center">
        <img src={ccaaLogo} alt="" />
        <img src={ccaaLogo} alt="" />
        <img src={ccaaLogo} alt="" />
        <img src={ccaaLogo} alt="" />
        <img src={ccaaLogo} alt="" />
        <img src={ccaaLogo} alt="" />
      </div>
    </section>
  );
};

export default Costumers;
