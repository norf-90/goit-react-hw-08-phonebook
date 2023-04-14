import Header from 'components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Registration from 'pages/Registration/Registration';
import LogIn from 'pages/LoginIn/LogIn';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/authOperations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<LogIn />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
