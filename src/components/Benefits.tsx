import React from "react";
import Title from "./Title";
import CardBenefits from "./CardBenefits";
import excel from "../assets/icons/arquivo-excel.png";
import crescimento from "../assets/icons/crescimento.png";
import funil from "../assets/icons/funil.png";
import garantido from "../assets/icons/garantido.png";
import gestao from "../assets/icons/gestao (1).png";
import graficoDeBarras from "../assets/icons/grafico-de-barras.png";
import midia from "../assets/icons/imagem.png";

const Benefits = () => {
  return (
    <section>
      <Title>
        O que vamos te <span className="text-primary"> entregar</span>?
      </Title>
      <div className="flex justify-center flex-wrap gap-12">
        <CardBenefits icon={crescimento} title="Estratégia de vendas">
          Oferecemos um protocolo de atendimento para sua equipe comercial,
          focado em vendas, projetado para elevar a taxa de conversão de leads
          no estágio final do funil.
        </CardBenefits>
        <CardBenefits icon={funil} title="Tráfego pago">
          Captação de clientes ultra qualificados, utilizando Google Ads e Meta
          Ads para direcionar o seu investimento e maximizar o alcance do seu
          negócio.
        </CardBenefits>
        <CardBenefits icon={gestao} title="Pipelines de CRM">
          Facilita o acompanhamento de leads e a gestão de relacionamentos, para
          uma conversão eficaz e aumento de fidelização de clientes.
        </CardBenefits>
        <CardBenefits icon={graficoDeBarras} title="Relatório de métricas">
          Ajdua a medir os resultados das estratégias executadas. Dessa forma,
          você saberá exatamente o que está dando resultados e o que poderia
          sair do planejamento estratégico.
        </CardBenefits>
        <CardBenefits icon={midia} title="Gestão de mídia">
          Gera relacionamento entre Empresa e Cliente, garante uma presença
          digital constante com estratégias personalizadas, mantendo sua marca
          vica na mente do seu público.
        </CardBenefits>
        <CardBenefits icon={excel} title="Planilha de gerenciamento">
          Projetada para oferecer uma visão abrangente do seu negócio, ela
          permite um controle preciso sobre o progresso de seu negócio. Com
          funcionalidades ituitivas e personalizáveis.
        </CardBenefits>
        <CardBenefits icon={garantido} title="Garantia incondicional">
          Se não ouver resultados obtidos após nosso serviço dentro do período estipulado em nosso contrato, comprometemo-nos a devolver integralmente o valor do seu investimento.
        </CardBenefits>
      </div>
    </section>
  );
};

export default Benefits;
