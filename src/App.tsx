import { Route, Routes } from "react-router";
import { PeoplePage } from "./pages/PeoplePage";

function App() {
  return (
    <div>
      <header></header>
      <main>
        <nav></nav>
        <Routes>
          <Route path="/" element={<PeoplePage />} />
          <Route path="/otherpage" element={<div>on other page</div>} />
          <Route path="*" element={<div>404 not found</div>} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
