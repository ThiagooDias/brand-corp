import React, { ReactNode } from "react";

interface CardBenefitsProps {
  title: string
  icon: string
  children: ReactNode
}

const CardBenefits = ({title, icon, children}: CardBenefitsProps) => {
  return (
    <div className="benefits-card">
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
