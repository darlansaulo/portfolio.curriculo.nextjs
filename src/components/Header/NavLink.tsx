import Link from 'next/link';
import { useRouter } from 'next/router';
import { useToasts } from 'react-toast-notifications';
import { NavLinkContainer } from './styles';


interface Props {
  title: string;
  path: string;
  flag?: boolean;
}

export default function NavLink({ title, path, flag }: Props) {
  const { addToast } = useToasts();
  const router = useRouter();
  const isActive = router.pathname === path;

  function flagAddToast() {
    if (flag === true) {
      return addToast('EM MANUTENÇÃO!!!', { appearance: 'info' });
    }
  }

  return (
    <NavLinkContainer isActive={isActive}>
      <Link href={path}>
        
        <button onClick={flagAddToast}>{title}</button>
      </Link>
    </NavLinkContainer>
  );
}
