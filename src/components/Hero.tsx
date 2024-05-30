import CardHero from "./CardHero";

export const Hero = () => {
  return (
    <section className="flex flex-wrap p-10 gap-24 justify-center">
      <CardHero targetNumber={500} suffix="K">
        Gerenciado <br /> em anúncios
      </CardHero>
      <CardHero targetNumber={20} suffix="M">
        Faturados <br />
        por clientes
      </CardHero>
      <CardHero targetNumber={200}>
        Clientes em <br />
        todo o Brasil
      </CardHero>
    </section>
  );
};
