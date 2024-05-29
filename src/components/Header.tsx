import React from "react";
import Button from "./Button";
import notebookImg from "../assets/notebook.png";
import bgVetor from "../assets/bg-vetor.svg"
import { Hero } from "./Hero";


const Header = () => {
  return (
    <header className="relative min-h-screen mt-8 flex flex-col justify-center">
      <div className="absolute inset-0 z-[-1] bg-vector bg-cover bg-center">
        <img src={bgVetor} alt="" />
      </div>

      <div className=" mx-[10%] py-6 flex flex-col md:flex-row items-center">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="font-extrabold text-6xl">
            Seja nosso próximo case de
            <span className="text-primary"> sucesso.</span>
          </h1>
          <p className="text-xl font-light mt-3 mb-9">
            Agência de Marketing líder em Gestão de Tráfico.
          </p>
          <Button />
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <img className="max-w-full h-auto" src={notebookImg} alt="Notebook" />
        </div>
      </div>
      <Hero />
    </header>
  );
};

export default Header;
