import GlobalStyle from "./style.js";
import Header from "./common/header/index.js";
import store from "./store/index.js";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <Header />
        <div className="App">helllo world</div>
      </Provider>
    </>
  );
}

export default App;
