import React from 'react';

const ItemCars = () => {
  return (
    <div className="card-container">
      <h1>The latest. Take a look at what is new right now. </h1>
      <div className="cards">
        <div className="card">
          <span>LIMITED TIME OFFER</span>
          <h1>Save on Mac or iPad for university.</h1>
          <p>You will also save on Apple Pencil, Magic Keyboard for iPad</p>
          <img
            src="./images/Apple_new-macbookair-wallpaper-screen_11102020_big.jpg.large.jpg"
            alt="macbook"
          />
        </div>
        <div className="card">
          <span>LIMITED TIME OFFER</span>
          <h1>MacBook Air 15. Buy Now </h1>
          <p>You will also save on Apple Pencil, Magic Keyboard for iPad</p>
          <img
            src="./images/Apple-WWDC23-MacBook-Air-15-in-hero-230605.jpg.news_app_ed.jpg"
            alt="macbook"
          />
        </div>
        <div style={{ background: 'black' }} className="card">
          <span style={{ color: 'white' }}>LIMITED TIME OFFER</span>
          <h1 style={{ color: 'white' }}>MacBook Air 15. Buy Now</h1>
          <p style={{ color: 'white' }}>
            You’ll also save on Apple Pencil, Magic Keyboard for iPad, get 20%
            off AppleCare+, and more.²
          </p>
          <img
            style={{ height: '180px' }}
            src="./images/gsmarena_001.jpg"
            alt="iphone"
          />
        </div>
      </div>
    </div>
  );
};

export default ItemCars;
