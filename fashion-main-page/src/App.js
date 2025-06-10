import Arrivals from './components/arrivals/Arrivals';
import Brands from './components/brands/Brands';
import Download from './components/downoload/Download';
import Favorites from './components/favorites/Favorites';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Header from './components/header/Header';
import Promo from './components/promo/Promo';
import Sale from './components/sale/Sale';

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Sale />
      <Favorites />
      <Download />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
