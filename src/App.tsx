import { Route, Routes } from "react-router";
import { PeoplePage } from "./pages/peoplePage/PeoplePage";
import { OtherPage } from "./pages/OtherPage";
import { ItemPage } from "./pages/itemApi/ItemPage";
import { AuthRequired } from "./components/AuthRequired";

function App() {
  return (
    <div>
      <header></header>
      <main>
        <nav></nav>
        <Routes>
          <Route path="/" element={<PeoplePage />} />
          <Route path="/items" element={<ItemPage />} />

          <Route
            path="/otherpage/:id"
            element={
              <AuthRequired>
                <OtherPage />
              </AuthRequired>
            }
          />
          <Route path="*" element={<div>404 not found</div>} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
