import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Find from "./Pages/Find";
import MyPage from "./Pages/MyPage";
import Main from "./Pages/Main";
import LoginPage from "./Pages/LoginPage";
import Make from "./Pages/Make";
import Create from "./Pages/Create";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/find" element={<Find />} />
            <Route path="/myPage" element={<MyPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/main" element={<Main />} />
            <Route path="/make" element={<Make />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
