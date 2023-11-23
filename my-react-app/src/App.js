import "./App.css";
import Input from "./components/atoms/Input/Input";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h> Checkout </h>
      </header>

      <div class="cont-info">
        <h>Contact information</h>
        <Input />
      </div>
    </div>
  );
}

export default App;
