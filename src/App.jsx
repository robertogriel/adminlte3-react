import Nav from './Components/Header/Nav';
import Aside from './Components/Aside/Aside';
import AsideControl from './Components/Aside/AsideControl';
import Footer from './Components/Footer/Footer';
import Contents from './Components/Contents';

function App() {
  return (
    <div className="wrapper">

      <Nav />
      <Aside />

      <Contents />

      <Footer />
      <AsideControl />

    </div>
  );
}

export default App;
