import { Provider } from "react-redux";
import Header from "./Header";
import Board from "./Board";
import Footer from "./Footer";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Board />
      <Footer />
    </Provider>
  );
}

export default App;
