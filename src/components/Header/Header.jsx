import AuthNav from 'components/AuthNav/AuthNav';
import { Outlet } from 'react-router-dom';
import { Link, Wrapper, Image } from './Header.styled';
import UserMenu from 'components/UserMenu/UserMenu';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import logo from '../../images/logo.png';
import { useSelector } from 'react-redux';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <Wrapper>
        <Link to={'/'}>
          <Image src={logo} alt="logo" />
        </Link>
        {isLoggedIn && <Link to={'/contacts'}>Contacts</Link>}
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Wrapper>

      <Outlet />
    </>
  );
};
export default Header;
