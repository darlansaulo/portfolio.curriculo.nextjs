import { ProjetoContainer } from './styles';
import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import Image from 'next/image';

interface ProjetoProps {
  title: string;
  type: string;
  slug: string;
  img: string;
}

export default function ProjetoItem({ title, type, slug, img}: ProjetoProps) {

  return (
    <ProjetoContainer>
      <section>
        <Image
          src={img}
          className="overlay"
          alt="Imagem projeto"
          layout="fill"
          priority
        />
        <div className="text">
          <h1># {title}</h1>
          <h2>- {type} </h2>
        </div>
      </section>
      <button>
        <Link href={slug}>
          <a target="_blank">
            Ver mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </ProjetoContainer>
  );
}
