import React, { useEffect, useState } from 'react';
import Wisdom from './Wisdom';
import './styles.scss';

// Behold, the only wisdom worth preserving.
// That which is contained within the Book of Angel.

function WisdomQuote() {
  const [quote, setQuote] = useState('');
  const quoteNum = Wisdom.length;

  function randomQuote() {
    return Wisdom[Math.floor(Math.random() * quoteNum)];
  }

  function changeQuote() {
    setQuote(randomQuote());
  }
  function resetPage() {
    window.location.reload();
  }

  useEffect(() => {
    setQuote(randomQuote());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='quote-container'>
      <p className='the-title' onClick={resetPage}>
        The Book of Angel
      </p>
      <h1 onClick={changeQuote}>" {quote} "</h1>
      <div role='button' className='more-wisdom' onClick={changeQuote}>
        Receive Wisdom
      </div>
    </div>
  );
}

export default WisdomQuote;
