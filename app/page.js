'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function page() {

  const [img, $img] = useState('puppy-eyes');
  const [how, $how] = useState(false);
  const [p, $p] = useState(null);
 const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const updteImg = (im) => {
    $img(im);
  }

  const nah = () => {
    const x = Math.random() * 90;
    const y = Math.random() * 90;

    $p({ x: `${x}%`, y: `${y}%` });
    updteImg('unamused');
  };

  const dontdoit = () => {
    nah();
    updteImg('shock');
    $how(true)
  }

  return (
    <div className='box'>
      {isMobile ?
        <h2>Please view on desktop or pc</h2> :
        <>
          <img alt='gumball' className='gif' src={`/${img}.gif`} />
          {how ? 'Hmmmph, Theres no choice!' : 'Victoria will you be my girlfriend🌹?'}
          <div className='btns'>
            <Link className='yes' href='/yay'>
              <button onMouseOver={() => updteImg('sparkle-eyes')} onMouseOut={() => updteImg('puppy-eyes')}>
                Yes
              </button>
            </Link>
            <button className='no'
              style={p ? { position: 'absolute', top: p.x, right: p.y } : null}
              onClick={dontdoit} onMouseOver={nah}>
              No
            </button>
          </div>
        </>
      }
    </div>
  )

}