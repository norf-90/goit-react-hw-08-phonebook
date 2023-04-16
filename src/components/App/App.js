import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Suspense, useEffect } from 'react';
import { refreshUser } from 'redux/auth/authOperations';
import { lazy } from 'react';

const Header = lazy(() => import('components/Header/Header'));
const Home = lazy(() => import('pages/Home/Home'));
const Registration = lazy(() => import('pages/Registration/Registration'));
const LogIn = lazy(() => import('pages/LogIn/LogIn'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const RestrictedRoute = lazy(() =>
  import('components/CustomRoutes/RestrictedRoute')
);
const PrivateRoute = lazy(() => import('components/CustomRoutes/PrivateRoute'));

// import Registration from 'pages/Registration/Registration';
// import LogIn from 'pages/LogIn/LogIn';
// import RestrictedRoute from 'components/CustomRoutes/RestrictedRoute';
// import Contacts from 'pages/Contacts/Contacts';
// import PrivateRoute from 'components/CustomRoutes/PrivateRoute';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<Registration />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<LogIn />} />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
