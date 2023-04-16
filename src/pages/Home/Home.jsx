import { Text } from './Home.styled';

const Home = () => {
  return (
    <div>
      <h1>
        <Text role="img" aria-label="Greeting icon">
          Hi! This is the implementation of a phonebook application. Here, you
          can manage and save your contacts. You need to sign up or log in
          before starting to use it.
        </Text>
        <Text>P.S. Do not save any important data here.</Text>
      </h1>
    </div>
  );
};

export default Home;
