import logo from './logo.svg';
import './App.css';
import './components/Header'
import Header from './components/Header';
import Nav from './components/Nav';
import Card from './components/Card';
import { useState, useEffect } from 'react';

const cardsArray = [
  {
      "type": "Boat",
      "image": "https://i.imgur.com/ZsSQnjJ.jpg"
  },
  {
      "type": "Bridge Text",
      "image": "https://i.imgur.com/QFkL2jl.jpg"
  },
  {
      "type": "Mountain",
      "image": "https://i.imgur.com/Kt5Q9N9.jpg"
  },
  {
      "type": "Down Dog Text",
      "image": "https://i.imgur.com/XeSHDGU.jpg"
  },
  {
      "type": "Standing Fold Text",
      "image": "https://i.imgur.com/m5AjY2x.jpg"
  },
  {
      "type": "Warrior 2",
      "image": "https://i.imgur.com/CV7sjs5.jpg"
  },
  {
      "type": "Plank Text",
      "image": "https://i.imgur.com/rutA4Ws.jpg"
  },
  {
      "type": "Seated Fold",
      "image": "https://i.imgur.com/mX3NxtV.jpg"
  },
  {
      "type": "Triangle Text",
      "image": "https://i.imgur.com/Tndivhq.jpg"
  },
  {
      "type": "Down Dog",
      "image": "https://i.imgur.com/dWlV0AS.jpg"
  },
  {
      "type": "Boat Text",
      "image": "https://i.imgur.com/CsY3b6G.jpg"
  },
  {
      "type": "Bridge",
      "image": "https://i.imgur.com/dvEGVJs.jpg"
  },
  {
      "type": "Mountain Text",
      "image": "https://i.imgur.com/bZQs6aK.jpg"
  },
  {
      "type": "Side Angle",
      "image": "https://i.imgur.com/DyPhtkv.jpg"
  },
  {
      "type": "Side Angle Text",
      "image": "https://i.imgur.com/wgrNXNl.jpg"
  },
  {
      "type": "Triangle",
      "image": "https://i.imgur.com/Q79YYih.jpg"
  },
  {
      "type": "Warrior Text",
      "image": "https://i.imgur.com/JvJntAD.jpg"
  },
  {
      "type": "Plank",
      "image": "https://i.imgur.com/LJKlHzK.jpg"
  },
  {
      "type": "Seated Fold Text",
      "image": "https://i.imgur.com/Snq0RxW.jpg"
  }
]

// function shuffleCards(array) {
//         for (let i = array.length; i > 0; i--) {
//             const randomIndex = Math.floor(Math.random() * i);
//             const currentIndex = i - 1;
//             const temp = array[currentIndex];
//             array[currentIndex] = array[randomIndex];
//             array[randomIndex] = temp;
//         }
//         return array
//       }


function App() {

  const [cards, setCards] = useState(null)

  // const getCardData = async()=> {
  //     const response = await fetch('./cardData.json');
  //     const data = await response.json();
  //     setCards(data);
  // }

  // useEffect(()=> getCardData(), [])

  return (
    <div className="App">
      <Header />
      <Nav />
        <div className="container">
            {cardsArray.map((card, index) => {
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
