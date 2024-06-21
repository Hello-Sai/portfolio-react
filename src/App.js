import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
// import Languages from './components/Languages'
import Projects from './components/Projects';
// import Experience from './components/Experience';

function App() {
  return (
    <div className='app' >
      <Header />
      <div className='container-fluid mx-auto'>
        {/* <Experience /> */}
      <Projects />
      </div>
    </div>
  );
}

export default App;
