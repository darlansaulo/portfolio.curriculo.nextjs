import { ProjetoContainer } from './styles';
import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import Image from 'next/image';

export default function ProjetoItem() {

  const myLoader = ({ src, width, quality }) => {
    return `https://www.plctr.com/wp-content/uploads/${src}?w=${width}&q=${
      quality || 75
    }`;
  };

  return (
    <ProjetoContainer>
      <section>
        <Image
          loader={myLoader}
          src="plc-errors.jpg"
          className="overlay"
          alt="Imagem projeto"
          layout="fill"
          priority
        />
        <div className="text">
          <h1>Projeto 01</h1>
          <h2>- Website </h2>
        </div>
      </section>
      <button>
        <Link href={'/projeto'}>
          <a>
            Ver mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </ProjetoContainer>
  );
}
