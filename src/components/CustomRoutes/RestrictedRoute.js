import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

const RestrictedRoute = ({ redirectTo = '/', component: Component }) => {
  const isLogged = useSelector(selectIsLoggedIn);
  return isLogged ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
