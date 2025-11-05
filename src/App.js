import { Routes, Route, BrowserRouter } from "react-router-dom"
import Main from "./pages/main.jsx"
import Impressum from "./pages/impresum.jsx";
import Datenschutz from "./pages/datenschutz.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/src/pages/impressum" element={<Impressum />} />
          <Route path="/src/pages/datenschutz" element={<Datenschutz />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;