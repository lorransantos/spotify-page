import Header from '../../components/Header';
import * as S from './styles';
import Carousel from '../../components/Crousel';
import Details from '../../components/Details';
import FuncionalitiesPlace from '../../components/FuncionalitiesPlace';
import Footer from '../../components/Footer';

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
      <FuncionalitiesPlace />
      <Footer />
    </>
  );
};

export default Home;
