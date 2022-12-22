import Navbar from './Navbar';
import Home from './Home';
import logo from './logo.svg';

function App() {

  return (
    <div className="App">
      <Navbar/>
     <div className="content">
      <Home/>
     </div>
    </div>
  );
}

export default App;