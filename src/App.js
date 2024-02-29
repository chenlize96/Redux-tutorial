import GlobalStyle from "./style.js";
import Header from "./common/header/index.js";
import store from "./store/index.js";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/index.js";
import Detail from "./pages/detail/index.js";

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
