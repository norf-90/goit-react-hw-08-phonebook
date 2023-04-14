import { useSelector } from 'react-redux';
import {
  UserIcon,
  UserInfo,
  Wrapper,
  Text,
  Button,
  LogoutIcon,
} from './UserMenu.styled';
import { selectUser } from 'redux/auth/authSelectors';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <Wrapper>
      <UserIcon size={`40px`} />
      <UserInfo>
        <Text>{user.name}</Text>
        <Text>{user.email}</Text>
      </UserInfo>
      <Button type="button" onClick={handleLogOut}>
        <LogoutIcon size="40px" />
      </Button>
    </Wrapper>
  );
};

export default UserMenu;
