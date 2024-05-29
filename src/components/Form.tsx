import React from "react";
import Title from "./Title";

const FormLead = () => {
  return (
    <section id="form" className=" py-6">
      <Title>
        Marque uma <span className="text-primary">consultoria grátis</span>
      </Title>

      <div className="flex justify-center">
        <form
          className="p-6 bg-gray-200 shadow-white shadow-md rounded-xl w-[400px] text-black flex flex-col gap-6 items-center"
          action=""
        >
          <h3 className="text-center text-3xl font-bold">
            Preencha o formulário:
          </h3>
          <div className="flex flex-col gap-1">
            <label className="text-lg font-semibold" htmlFor="name">
              Nome:
            </label>
            <input
              className="p-1 w-[250px] rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-primary hover:ring-2 hover:ring-primary transition duration-200"
              type=" text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-lg font-semibold" htmlFor="email">E-mail:</label>
            <input
              className="p-1 w-[250px] rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-primary hover:ring-2 hover:ring-primary transition duration-200"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <button className="bg-primary text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-primary transition duration-200">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default FormLead;
