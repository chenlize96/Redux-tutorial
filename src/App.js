import GlobalStyle from "./style.js";
import Header from "./common/header/index.js";
import store from "./store/index.js";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/index.js";
import Detail from "./pages/detail/index.js";
import Login from "./pages/login/index.js";
import Write from "./pages/write/index.js";

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/write" element={<Write />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
