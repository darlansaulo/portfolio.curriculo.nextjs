import { useToasts } from 'react-toast-notifications';
import { NavLinkContainer } from './styles';


interface Props {
  title: string;
  flag?: boolean;
}

export default function NavLink({ title, flag }: Props) {
  const { addToast } = useToasts();

  function flagAddToast() {
    if (flag === true) {
      addToast('EM CONSTRUÇÃO!!!', { appearance: 'info' });
    }
    return addToast;
  }

  return (
    <NavLinkContainer>
        <button type='button' onClick={flagAddToast}>{title}</button>
    </NavLinkContainer>
  );
}
