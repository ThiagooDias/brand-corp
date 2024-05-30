import { ReactNode, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface CardBenefitsProps {
  title: string;
  icon: string;
  children: ReactNode;
}

const CardBenefits = ({ title, icon, children }: CardBenefitsProps) => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <div className="benefits-card" data-aos="fade-down">
      <div className="benefits-card2 p-6 flex flex-col gap-4">
        <div className="flex justify-center ">
          <img src={icon} alt="icon" className="size-14" />
        </div>
        <h3 className="text-center font-extrabold text-2xl">{title}</h3>
        <p className="font-medium text-sm">{children}</p>
      </div>
    </div>
  );
};

export default CardBenefits;
