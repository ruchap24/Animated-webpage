
import './App.css';

function App() {
  return (
    <div>
      {/* header section start */}
      <header>
        {/* Logo area */}
        <a href='#' className='logo'>
          Logo
        </a>
        {/* Navigation Area */}
        <ul>
          <li>
            <a href='#' className='active'>
              Home
            </a>
          </li>
          <li>
            <a href='#' className='active'>
              About
            </a>
          </li>
          <li>
            <a href='#' className='active'>
              Work
            </a>
          </li>
          <li>
            <a href='#' className='active'>
              Contact
            </a>
          </li>
        </ul>
      </header>
      {/* header section end */}

      {/* section hero */}
      <section>
        <div className='content'>
          <h2>
            Web Page Using <b>Anime.js</b>
          </h2>

          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!
          </p>
          <a href='#' className='btn'>
            Learn More
            </a>
        </div>
      </section>

    </div>
  );
}

export default App;
