import './App.css';
import TodoClass from './components/TodoClass';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h1>This is my todo list</h1>
        </p>
        <TodoClass/>
      </header>

    </div>
  );
}

export default App;
