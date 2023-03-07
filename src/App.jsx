import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import "./styles/global.scss";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Upload from "./Pages/Upload";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/:videoPageId" element={<Content />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="*" element={<Content />} />
        </Routes>
      </BrowserRouter>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
