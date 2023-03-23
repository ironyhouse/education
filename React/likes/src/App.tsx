import React, { useState } from 'react';
import './App.css';

function App() {
  const [like, setLike] = useState(100);
  const [dislike, setDislike] = useState(50);
  const [isLikeClick, setLikeClick] = useState<null | boolean>(null);

  const handleLikeClick = () => {
    if (isLikeClick === null) {
      setLike((state) => ++state);
      setLikeClick(true);
      return;
    }

    if (isLikeClick === false) {
      setLike((state) => ++state);
      setDislike((state) => --state);
      setLikeClick(true);
      return;
    }

    setLike((state) => --state);
    setLikeClick(null);
  };

  const handleDislikeClick = () => {
    if (isLikeClick === null) {
      setDislike((state) => ++state);
      setLikeClick(false);
      return;
    }

    if (isLikeClick) {
      setLike((state) => --state);
      setDislike((state) => ++state);
      setLikeClick(false);
      return;
    }

    setDislike((state) => --state);
    setLikeClick(null);
  };

  return (
    <div className="App">
      <img
        src="https://static.wikia.nocookie.net/dota2_gamepedia/images/0/0d/Outworld_Destroyer_Lore.png/revision/latest?cb=20210728220859"
        alt="Outworld destroyer"
      />
      <button
        onClick={handleLikeClick}
        className={`button  ${isLikeClick ? 'like' : ''}`}
      >
        <span>Like | {like}</span>
      </button>
      <button
        onClick={handleDislikeClick}
        className={`button  ${isLikeClick === false ? 'dislike' : ''}`}
      >
        <span>Dislike | {dislike}</span>
      </button>
    </div>
  );
}

export default App;
