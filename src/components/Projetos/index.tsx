import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';

function Projetos() {
  return (
    <Container>
      <SectionTitle title="Ultimos projetos"/>
      <section>
        <ProjetoItem title="C.R.U.D" type="Website" slug="https://github.com/darlansaulo/projeto.crud.react" img="/assets/projeto_crud_react.png"/>
        <ProjetoItem title="Currículo" type="Website" slug="https://darlansaulo.github.io/projeto.curriculo.nextjs" img="/assets/projeto_curriculo_nextjs.png"/>
      </section>
      <div className='button-style'>
        <Link href="/portfolio.curriculo.nextjs/#top">
          Voltar ao topo
        </Link>
      </div>
    </Container>
  );
}

export default Projetos;
