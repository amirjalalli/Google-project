import Component from './Component/Component';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
        <Component />
        <Footer />
    </div>
  );
}

export default App;
