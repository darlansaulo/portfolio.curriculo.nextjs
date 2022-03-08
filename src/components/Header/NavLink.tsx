import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavLinkContainer } from './styles';
import { useToasts } from 'react-toast-notifications';

interface Props {
  title: string;
  path: string;
  flag?: boolean;
}

export default function NavLink({ title, path, flag }: Props) {
  const { addToast } = useToasts();
  const router = useRouter();
  const isActive = router.pathname === path;

  function teste() {
    if (flag === true) {
      return addToast('EM MANUTENÇÃO!!!', { appearance: 'info' });
    } else {
      return null;
    }
  }

  return (
    <NavLinkContainer isActive={isActive}>
      <Link href={path}>
        
        <button onClick={teste}>{title}</button>
      </Link>
    </NavLinkContainer>
  );
}
