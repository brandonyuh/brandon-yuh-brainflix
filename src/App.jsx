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
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/:videoPageId" element={<Content />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="*" element={<Content />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
