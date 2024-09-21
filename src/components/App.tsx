import { Provider } from "react-redux";
import Header from "./Header";
import Board from "./Board";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Board />
    </Provider>
  );
}

export default App;
