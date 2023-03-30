import './App.css';
import Counter from './components/Counter';
import DogImage from './components/DogImage';
import Post from './components/Post';

function App() {
  return (
    <main className="App">
      <h1>Redux Training</h1>
      <Counter/>
      <DogImage/>
    </main>
  );
}

export default App;
