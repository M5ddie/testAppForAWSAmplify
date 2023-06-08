import logo from './logo.svg';
import './App.css';
import NavbarBM from './navbar';

function App() {
  return (
    <div className="App">
      <NavbarBM />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from my testing app, M5ddie!</h1>
      </header>
    </div>
  );
}

export default App;
