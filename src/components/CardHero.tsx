import { ReactNode } from "react";
import CountUp from "react-countup";

interface CardHeroProps {
  children: ReactNode;
  suffix?: string;
  targetNumber: number;
}

const CardHero = ({ children, suffix, targetNumber }: CardHeroProps) => {
  return (
    <div className="hero-card py-8 px-12">
      <p className="text-4xl text-primary font-semibold">
        <CountUp end={targetNumber} duration={5} prefix="+" suffix={suffix} />
      </p>
      <p className="text-slate-300 text-2xl font-medium">{children}</p>
    </div>
  );
};

export default CardHero;
