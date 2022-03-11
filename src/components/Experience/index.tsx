import { Container } from './styles';
import SectionTitle from '../SectionTitle';
import ExperienceItem from './ExperienceItem';

function Experience() {
  return (
    <Container>
      <SectionTitle title="04 anos" description="de experiência" />
      <section>
        <ExperienceItem
          year="2019 ~ 2021 (CLT)"
          title="Analista de Suporte - Mindworks"
          description="Suporte prestado para clientes com estrutura de domínio de rede e home office. Funções realizadas:
          controle de usuários/grupos para acesso a sistemas e informações ne
          rede, utilizando a ferramenta Active Directory(AD) da Microsoft,
          suporte com acesso remoto a servidores e clientes para instalações de
          softwares, configurações e soluções para o windows(7, 10).
          Gerir e atender chamados utilizando ferramentas de Service Desk(Microsoft: Service
          Manager 2016) seguindo SLA em cima da estrutura de atendimento dos clientes, também
          gerir resoluções de atendimento externo, com controle de chamados em
          ciclo de vida(atendimento, conclusão e fechamento). "
        />
        <ExperienceItem
          year="2014 ~ 2016 (Estágio)"
          title="Suporte técnico - Banestes/Banco do Estado do Espírito Santo"
          description="Registrar, encaminhar e solucionar chamadas na central de Service Desk, como: atender terceiros para fechamento de chamados, encaminhar chamados de alteração de perfil de colaboradores, relatórios chaves das solicitações e incidentes, verificar e editar na base de conhecimento novas soluções para o suporte. 
          "
        />
      </section>
    </Container>
  );
}

export default Experience;
