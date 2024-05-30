import logo1 from "../assets/costumers/Prancheta 1.png";
import logo2 from "../assets/costumers/Prancheta 2.png";
import logo3 from "../assets/costumers/Prancheta 3.png";
import logo4 from "../assets/costumers/Prancheta 4.png";
import logo5 from "../assets/costumers/Prancheta 5.png";
import logo7 from "../assets/costumers/Prancheta 7.png";
import logo8 from "../assets/costumers/Prancheta 8.png";
import logo9 from "../assets/costumers/Prancheta 9.png";
import logo10 from "../assets/costumers/Prancheta 10.png";
import logo11 from "../assets/costumers/Prancheta 11.png";
import logo12 from "../assets/costumers/Prancheta 12.png";
import logo13 from "../assets/costumers/Prancheta 13.png";

const Costumers = () => {
  return (
    <section className="w-full my-16 py-6 bg-zinc-800 flex flex-col justify-center">
      <h2 className="text-center text-4xl font-bold">
        Conheça nossos clientes
      </h2>
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img src={logo1} alt="" />
          </div>
          <div className="slide">
            <img src={logo2} alt="" />
          </div>
          <div className="slide">
            <img src={logo3} alt="" />
          </div>
          <div className="slide">
            <img src={logo4} alt="" />
          </div>
          <div className="slide">
            <img src={logo5} alt="" />
          </div>
          <div className="slide">
            <img src={logo7} alt="" />
          </div>
          <div className="slide">
            <img src={logo8} alt="" />
          </div>
          <div className="slide">
            <img src={logo9} alt="" />
          </div>
          <div className="slide">
            <img src={logo10} alt="" />
          </div>
          <div className="slide">
            <img src={logo11} alt="" />
          </div>
          <div className="slide">
            <img src={logo12} alt="" />
          </div>
          <div className="slide">
            <img src={logo13} alt="" />
          </div>

          {/* Duplicação para o slide funcionar */}

          <div className="slide">
            <img src={logo1} alt="" />
          </div>
          <div className="slide">
            <img src={logo2} alt="" />
          </div>
          <div className="slide">
            <img src={logo3} alt="" />
          </div>
          <div className="slide">
            <img src={logo4} alt="" />
          </div>
          <div className="slide">
            <img src={logo5} alt="" />
          </div>
          <div className="slide">
            <img src={logo7} alt="" />
          </div>
          <div className="slide">
            <img src={logo8} alt="" />
          </div>
          <div className="slide">
            <img src={logo9} alt="" />
          </div>
          <div className="slide">
            <img src={logo10} alt="" />
          </div>
          <div className="slide">
            <img src={logo11} alt="" />
          </div>
          <div className="slide">
            <img src={logo12} alt="" />
          </div>
          <div className="slide">
            <img src={logo13} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Costumers;
