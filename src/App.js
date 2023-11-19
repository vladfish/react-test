import GlobalStyles from './components/Global/GlobalStyles';

import { AppWrapper } from './components/App/StyledApp';
import Header from './components/Header/Header';
import MainTop from './components/Main/MainTop';
import MainBottom from './components/Main/MainBottom';
import MainFooter from './components/Main/MainFooter';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <GlobalStyles />
      <AppWrapper>
        <Header />
        <MainTop />
        <MainBottom />
        <MainFooter />
        <Footer />
      </AppWrapper>  
    </div> 
  );
}

export default App;
