import './App.css';
import Header from './components/Header';
import Inventory from './components/Inventory';
import AddItem from './components/AddItem';

function App() {
  return (
    <div className="App">
      <Header />
      <Inventory />
    </div>
  );
}

export default App;