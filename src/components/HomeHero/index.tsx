import {
  BsLinkedin,
  BsWhatsapp,
  BsEnvelopeOpen,
  BsGithub,
} from "react-icons/bs";
import Link from "next/link";

import GitSvg from "../../../public/assets/logo_git.svg";
import GithubSvg from "../../../public/assets/github-icon-2.svg";
import Css3Svg from "../../../public/assets/logo_css3-2.svg";
import BootstrapSvg from "../../../public/assets/logo_bootstrap-2.svg";
import NextSvg from "../../../public/assets/logo_nextjs-2.svg";
import HtmlSvg from "../../../public/assets/logo_html5-2.svg";
import ReactSvg from "../../../public/assets/logo_reactjs-2.svg";
import TailwindSvg from "../../../public/assets/logo_tailwindcss-3.svg";
import JsSvg from "../../../public/assets/logo_javascript.svg";
import TsSvg from "../../../public/assets/logo_typescript.svg";
import StyledSvg from "../../../public/assets/logo_styled-components.svg";
import NpmSvg from "../../../public/assets/logo_npm.svg";

import {
  Container,
  TextContainer,
  CodeItem,
  InfoContainer,
  ImgContainer,
} from "./styles";

function HomeHero() {
  return (
    <Container>
      <ImgContainer>
        <GitSvg width="60" height="25" className="fontClass"/>
        <GithubSvg width="60" height="40" className="fontClass"/>
        <BootstrapSvg width="60" height="40" className="fontClass"/>
        <Css3Svg width="60" height="40" className="fontClass"/>
        <NextSvg width="60" height="25" className="fontClass"/>
        <HtmlSvg width="60" height="40" className="fontClass"/>
        <ReactSvg width="60" height="40" className="fontClass"/>
        <TailwindSvg width="60" height="40" className="fontClass"/>
        <JsSvg width="60" height="40" className="fontClass"/>
        <TsSvg width="60" height="40" className="fontClass"/>
        <StyledSvg width="60" height="40" className="fontClass"/>
        <NpmSvg width="60" height="25" className="fontClass"/>
      </ImgContainer>
      <div>
        <TextContainer>
          <h1> Desenvolvedor Frontend </h1>
        </TextContainer>
        <InfoContainer>
          <CodeItem>
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span> {`= ${"\u007B"}`}
            <div>
              Nome: <span className="blue">Darlan,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Saulo</span>
            </div>
            {"\u007B"}
          </CodeItem>
          <CodeItem>
            <span className="comment">//Formação</span>
            <span className="purple">Curso</span> {`= ${"\u007B"}`}
            <div>
              Instituição: <span className="blue">Faculdade Faesa,</span>
            </div>
            <div>
              Nome: <span className="blue">Sistemas de Informação,</span>
            </div>
            <div>
              Status: <span className="blue">Trancado no 6º período,</span>
            </div>
            <span className="purple textMargin1"> cursoComplementar:</span>{" "}
            {"\u007B"}
            <div className="textMargin2">
              Instituição: <span className="blue">Udemy,</span>
            </div>
            <div className="textMargin2">
              Nome: <span className="blue">Web Moderno Completo 2021</span>
            </div>
            <span className="textMargin1">{"\u007D"}</span>
            <br />
            {"\u007D"}
          </CodeItem>
          <CodeItem>
            <span className="comment">//Contato</span>
            <span className="purple">SocialMedia</span> {`= ${"\u007B"}`}
            <div>
              <ul className="">
                <li className="">
                  <Link href={`https://wa.me/5527997588583`} passHref>
                    <a target="_blank">
                      <BsWhatsapp />
                    </a>
                  </Link>
                </li>
                <li className="">
                  <Link href={`https://github.com/darlansaulo`} passHref>
                    <a target="_blank">
                      <BsGithub />
                    </a>
                  </Link>
                </li>
                <li className="">
                  <Link
                    href={`https://www.linkedin.com/in/darlansaulo/`}
                    passHref
                  >
                    <a target="_blank">
                      <BsLinkedin />
                    </a>
                  </Link>
                </li>
                <li className="">
                  <Link href={`mailto: darlansaulo@gmail.com`} passHref>
                    <a target="_blank">
                      <BsEnvelopeOpen />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            {"\u007B"}
          </CodeItem>
        </InfoContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
