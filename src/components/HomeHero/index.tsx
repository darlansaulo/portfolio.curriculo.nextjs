import { Container, TextContainer, CodeItem, InfoContainer, ImgContainer } from './styles';
import Image from 'next/image';


function HomeHero() {
  return (
    <Container>
      <ImgContainer>
        <Image
          src={'/assets/logo_git.svg'}
          alt="Imagem exemplo"
          width="60"
          height="25"
          className="fontClass"
        />
        
        <Image
          src={'/assets/logo_github.svg'}
          alt="Imagem exemplo"
          width="60"
          height="40"
          className="fontClass"
        />
        <Image
          src={'/assets/logo_bootstrap-2.svg'}
          alt="Imagem exemplo"
          width="60"
          height="40"
          className="fontClass"
        />
        <Image
          src={'/assets/logo_css3-2.svg'}
          alt="Imagem exemplo"
          width="60"
          height="40"
          className="fontClass"
        />
        <Image
          src={'/assets/logo_nextjs-2.svg'}
          alt="Imagem exemplo"
          width="60"
          height="25"
          className="fontClass"
        />
    
        <Image
          src={'/assets/logo_html5-2.svg'}
          alt="Imagem exemplo"
          width="60"
          height="40"
          className="fontClass"
        />


        <Image
          src={'/assets/logo_reactjs-2.svg'}
          alt="Imagem exemplo"
          width="60"
          height="40"
          className="fontClass"
        />
        <Image
          src={'/assets/logo_tailwindcss-3.svg'}
          alt="Imagem exemplo"
          width="60"
          height="40"
          className="fontClass"
        />
        <Image
          src={'/assets/logo_javascript.svg'}
          alt="Imagem exemplo"
          width="60"
          height="40"
          className="fontClass"
        />
        <Image
          src={'/assets/logo_typescript.svg'}
          alt="Imagem exemplo"
          width="60"
          height="40"
          className="fontClass"
        />
        <Image
          src={'/assets/logo_styled-components.svg'}
          alt="Imagem exemplo"
          width="60"
          height="40"
          className="fontClass"
        />
        <Image
          src={'/assets/logo_npm.svg'}
          alt="Imagem exemplo"
          width="60"
          height="25"
          className="fontClass"
        />
      </ImgContainer>
      <div>
        <TextContainer>
          <h1> Desenvolvedor Frontend </h1>
        </TextContainer>
        <InfoContainer>
          <CodeItem>
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span> {`= ${'\u007B'}`}
            <div>
              Nome: <span className="blue">Darlan,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Saulo</span>
            </div>
            {'\u007B'}
          </CodeItem>
          <CodeItem>
            <span className="comment">//Formação</span>
            <span className="purple">Curso</span> {`= ${'\u007B'}`}
            <div>
              Instituição: <span className="blue">Faculdade Faesa,</span>
            </div>
            <div>
              Nome: <span className="blue">Sistemas de Informação,</span>
            </div>
            <div>
              Status: <span className="blue">Trancado no 6º período,</span>
            </div>
            <span className="purple textMargin1"> cursoComplementar:</span>{' '}
            {'\u007B'}
            <div className="textMargin2">
              Instituição: <span className="blue">Udemy,</span>
            </div>
            <div className="textMargin2">
              Nome: <span className="blue">Web Moderno Completo 2021</span>
            </div>
            <span className="textMargin1">{'\u007D'}</span>
            <div></div>
            {'\u007D'}
          </CodeItem>
        </InfoContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
