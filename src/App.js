import './App.css';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';



function App() {

  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <p>
          Hello there :)
        </p>
        <HomePage/>
      </header>
    </div>
  );
}

export default App;
