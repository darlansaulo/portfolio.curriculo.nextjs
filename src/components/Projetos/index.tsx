import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';

function Projetos() {

  const voltarTop = () => window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })

  return (
    <Container>
      <SectionTitle title="Ultimos projetos"/>
      <section>
        <ProjetoItem title="C.R.U.D" type="Website" slug="https://github.com/darlansaulo/projeto.crud.react" img="/assets/projeto_crud_react.png"/>
        <ProjetoItem title="Currículo" type="Website" slug="https://darlansaulo.github.io/projeto.curriculo.nextjs" img="/assets/projeto_curriculo_nextjs.png"/>
      </section>
      <div className='button-style' id="voltarTopo">
        <button type="button" onClick={voltarTop}>
            Voltar ao topo
        </button>
      </div>
    </Container>
  );
}

export default Projetos;
