import React from "react";
import Header from "../components/Header";
import OurProcess from "../components/OurProcess";
import Benefits from "../components/Benefits";
import Costumers from "../components/Costumers";
import FormLead from "../components/Form";

const Home = () => {
  return (
    <div>
      <main>
        <Header />
        <OurProcess />
        <p className="mx-[5%] py-16 text-center font-bold text-4xl">
          A nossa proposta é fazer sua empresa alcançar todo o seu potencial de
          vendas através da internet, com um
          <span className="text-primary">
            {" "}
            método totalmente focado no resultado.
          </span>
        </p>
        <Benefits />
        <Costumers />
        <FormLead />
      </main>
    </div>
  );
};

export default Home;
