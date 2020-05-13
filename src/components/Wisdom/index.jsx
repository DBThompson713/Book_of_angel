import React, { useEffect, useState } from 'react';
import Wisdom from './Wisdom';
import './styles.scss';

function WisdomQuote() {
  const [quote, setQuote] = useState('');
  const randomQuote = Wisdom.quote[randomNumber()].quote;

  // -------------------- FUNCTIONS
  function randomNumber() {
    return Math.floor(Math.random() * 52);
  }
  function changeQuote() {
    setQuote(Wisdom.quote[randomNumber()].quote);
  }
  function resetPage() {
    window.location.reload();
  }

  // --------------------
  useEffect(() => {
    setQuote(randomQuote);

    const interval = setInterval(() => {
      setQuote(Wisdom.quote[randomNumber()].quote);
    }, 13000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // --------------------

  return (
    <div className='quote-container'>
      <p className='the-title' onClick={resetPage}>
        The Book of Angel
      </p>
      <h1>" {quote} "</h1>
      <div role='button' className='more-wisdom' onClick={changeQuote}>
        More Wisdom
      </div>
    </div>
  );
}

export default WisdomQuote;
