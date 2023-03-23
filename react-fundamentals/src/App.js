import logo from './logo.svg';
import './App.css';
import Compo  from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* <h1>Hello React</h1> */}
        
        <Compo />
        <Welcome />
      
      </header>
    </div>
  );
}

export default App;
