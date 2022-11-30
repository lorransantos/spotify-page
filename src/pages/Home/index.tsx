import Header from '../../components/Header';
import * as S from './styles';
import Carousel from '../../components/Crousel';
import Details from '../../components/Details';

const Home = () => {
  return (
    <>
      <S.Container>
        <Header />
        <section>
          <Carousel />
        </section>
      </S.Container>
      <Details />
    </>
  );
};

export default Home;
