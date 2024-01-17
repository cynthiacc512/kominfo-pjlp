import logo from './404.jpg';
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <div id="maintenance-page">
            <h1 class="nl_open-sans">OOPS, Ada yang Salah!</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>Sepertinya kita yang salah. Halaman ini sedang tidak bisa diakses.</p>
            <p>Kamu bisa balik ke home dengan cara klik 
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
             link ini
          </a>
          </p>
          </div>
      </header>

    </div>
  );
}

export default App;
