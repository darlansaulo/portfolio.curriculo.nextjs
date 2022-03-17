import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';

function Projetos() {

  const voltarTop = () => window.scrollTo(0, 0)

  return (
    <Container>
      <SectionTitle title="Ultimos projetos"/>
      <section>
        <ProjetoItem title="C.R.U.D" type="Website" slug="https://github.com/darlansaulo/projeto.crud.react" img="/assets/projeto_crud_react.png"/>
        <ProjetoItem title="Currículo" type="Website" slug="https://darlansaulo.github.io/projeto.curriculo.nextjs" img="/assets/projeto_curriculo_nextjs.png"/>
      </section>
      <div className='button-style' id="voltarTopo">
        <a href="" onClick={voltarTop}>
            Voltar ao topo
        </a>
      </div>
    </Container>
  );
}

export default Projetos;
