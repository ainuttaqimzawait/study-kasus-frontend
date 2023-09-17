import "./App.css"
import store from "./app/store";
import Ruter from "./pages/pages";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Ruter />
      </Provider>
    </div>
  );
}

export default App;