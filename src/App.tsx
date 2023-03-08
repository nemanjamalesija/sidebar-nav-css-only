import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <nav id="nav" className="nav">
        <ul className="nav__list">
          <li className="nav__link">About</li>
          <li className="nav__link">Home</li>
          <li className="nav__link">Products</li>
          <li className="nav__link">Contact</li>
        </ul>
        <a href="#" className="link-hide-nav">
          X
        </a>
      </nav>
      <a href="#nav" className="link-display-nav">
        Display nav
      </a>
      <a href="#" className="backdrop" hidden></a>
      <section className="hero"></section>
    </div>
  );
}

export default App;
