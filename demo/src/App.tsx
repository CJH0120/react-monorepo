import { useState } from 'react';
import './App.css';
import { Carousel } from '@hyune/react-carousel/src';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ maxWidth: '897px', width: '100%', margin: '0 auto' }}>
        <Carousel
          config={{
            objectFit: 'fill',
            arrowShow: true,
            manipulate: false,
            autoplay: true,
            autoplayDelay: 30000,
          }}
          content={[
            {
              imageUrl: 'https://s3.bananab2b.shop/b2b/main-banner/0912_17.png',
              mobileImageUrl: 'https://s3.bananab2b.shop/b2b/main-banner/240822.png',
            },
            {
              imageUrl: 'https://s3.bananab2b.shop/b2b/main-banner/240822.png',
              landingUrl: 'https://s3.bananab2b.shop/b2b/main-banner/240822.png',
            },
            {
              imageUrl: 'https://s3.bananab2b.shop/b2b/main-banner/0826_banner.png',
            },
            {
              imageUrl: 'https://s3.bananab2b.shop/b2b/main-banner/0912_14.png',
            },
          ]}
        />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
