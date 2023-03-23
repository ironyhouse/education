import React, { useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  const [like, setLike] = useState(100);
  const [dislike, setDislike] = useState(50);
  const [isLikeClick, setLikeClick] = useState(false);

  const handleLikeClick = () => {
    setLikeClick(true)

    if (!isLikeClick) {
      setLike((state) => ++state);
      setLikeClick(true)
    }
  };

  const handleDislikeClick = () => {
    setLikeClick(false)

    if (!isLikeClick) {
      setDislike((state) => ++state);
    }


  };

  return (
    <div className="App">
      <img
        src="https://static.wikia.nocookie.net/dota2_gamepedia/images/0/0d/Outworld_Destroyer_Lore.png/revision/latest?cb=20210728220859"
        alt="Outworld destroyer"
      />
      <button onClick={handleLikeClick} className={isLikeClick ? ' button' : ''}>
        <span>Like | {like}</span>
      </button>
      <button onClick={handleDislikeClick} className={'button '}>
        <span>Dislike | {dislike}</span>
      </button>
    </div>
  );
}

export default App;
