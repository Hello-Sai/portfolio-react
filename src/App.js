import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';

function App() {
  return (
    <div className='app' >
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header />
      <div className='container-fluid mx-auto'>
      <Projects />
      </div>
    </div>
  );
}

export default App;
