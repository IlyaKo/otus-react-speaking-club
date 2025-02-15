import { BrowserRouter } from "react-router";
import NavigationBar from "../NavigationBar/NavigationBar";
import RouterOutlet from "../Router/RouterOutlet";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <div className="m-4">
        <RouterOutlet />
      </div>
    </BrowserRouter>
  );
}

export default App;
