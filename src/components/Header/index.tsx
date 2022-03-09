import NavLink from './NavLink';
import { Container } from './styles';

function Header() {

  const flagAux = true

  return (
    <Container>
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Projetos" path="/" flag={flagAux}/> 
      </ul>
    </Container>
  );
}

export default Header;
