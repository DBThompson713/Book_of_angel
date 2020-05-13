import React, { useEffect, useState } from 'react';
import Wisdom from './Wisdom';
import './styles.scss';

function WisdomQuote() {
  const [quote, setQuote] = useState('');
  const randomQuote = Wisdom.quote[randomNumber()].quote;

  useEffect(() => {
    setQuote(randomQuote);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function randomNumber() {
    console.log('hit');
    return Math.floor(Math.random() * 50);
  }

  function changeQuote() {
    setQuote(Wisdom.quote[randomNumber()].quote);
  }

  function resetPage() {
    window.location.reload();
  }

  return (
    <div className='quote-container'>
      <p className='the-title' onClick={resetPage}>
        The Book of Angel
      </p>
      <h1>" {quote} "</h1>
      <div role='button' className='new-quote' onClick={changeQuote}>
        more wisdom
      </div>
    </div>
  );
}

export default WisdomQuote;
