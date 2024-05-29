import React from "react";
import CardProcess from "./CardProcess";
import Title from "./Title";
import analiseDeDados from "../assets/icons/analise-de-dados.png";
import megafone from "../assets/icons/megafone.png";
import gestadoDeDados from "../assets/icons/gestao-de-dados.png";
import cliente from "../assets/icons/cliente.png";

const OurProcess = () => {
  return (
    <section>
      <Title>Nosso processo</Title>
      <div className="flex justify-around">
        <CardProcess icon={analiseDeDados} title="Análise e otimização">
          Verificamos os pontos fracos do seu negócio no digital e otimizamos
          seus perfis para mais ganho de credibilidade.
        </CardProcess>
        <CardProcess icon={cliente} title="Cliente ideal">
          Encontramos através da internet o cliente ideal para o crescimento e
          prosperidade do seu empreendimento.
        </CardProcess>
        <CardProcess icon={megafone} title="Estratégia de Anúncio">
          Após uma analise aprofundada do público, implementamos uma estatégia
          de anúncios que envolve testes abrangentes de diferentes critativos,
          posicionamentos e plataformas para garantir a máxima eficácia.
        </CardProcess>
        <CardProcess icon={gestadoDeDados} title="Gestão Estratégica">
          Nosso foco está em alocar recursos de maneira inteligente, monitorar o
          desempenho das campanhas e ajustar estratégia conforme necessário para
          assegurar o máximo de retorno sobre o investimento (ROI).
        </CardProcess>
      </div>
    </section>
  );
};

export default OurProcess;
