import logo from './logo.svg';
import './App.css';
import './components/Header'
import Header from './components/Header';
import Nav from './components/Nav';
import Card from './components/Card';
import { useState } from 'react';


function shuffleCards(array) {
        for (let i = array.length; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * i);
            const currentIndex = i - 1;
            const temp = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temp;
        }
        return array
      }

function App({ uniqueCardsArray }) {
  const [cards, setCards] = useState(() => shuffleCards(uniqueCardsArray.concat(uniqueCardsArray)))

  return (
    <div className="App">
      <Header />
      <Nav />
        <div className="container">
            {cards.map((card, index) => {
                return (
                    <Card
                        key={index}
                        card={card}
                        index={index}
                        // onClick={handleCardClick} 
                        />
                )
            })}
        </div>
    
    </div>
  );
}

export default App;
