import { BrowserRouter } from "react-router";
import NavigationBar from "../NavigationBar/NavigationBar";
import RouterOutlet from "../Router/RouterOutlet";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <div className="ms-2">
        <RouterOutlet />
      </div>
    </BrowserRouter>
  );
}

export default App;
