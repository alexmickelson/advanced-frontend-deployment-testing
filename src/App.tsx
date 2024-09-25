import { Route, Routes } from "react-router";
import { PeoplePage } from "./pages/peoplePage/PeoplePage";
import { OtherPage } from "./pages/OtherPage";

function App() {
  return (
    <div>
      <header></header>
      <main>
        <nav></nav>
        <Routes>
          <Route path="/" element={<PeoplePage />} />
          <Route path="/otherpage" element={<OtherPage />} />
          <Route path="/otherpage/:id" element={<OtherPage />} />
          <Route path="*" element={<div>404 not found</div>} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
