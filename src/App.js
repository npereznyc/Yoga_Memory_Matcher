import logo from './logo.svg';
import './App.css';
import './components/Header'
import Header from './components/Header';
import Nav from './components/Nav';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Cards />
    </div>
  );
}

export default App;
