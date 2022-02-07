import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import "@material-tailwind/react/tailwind.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
