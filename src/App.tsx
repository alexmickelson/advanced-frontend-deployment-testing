import { Route, Routes } from "react-router";
import { PeoplePage } from "./pages/peoplePage/PeoplePage";
import { OtherPage } from "./pages/OtherPage";
import { ItemPage } from "./pages/itemApi/ItemPage";
import { useAuth } from "react-oidc-context";

function App() {
  const auth = useAuth();

  switch (auth.activeNavigator) {
    case "signinSilent":
      return <div>Signing you in...</div>;
    case "signoutRedirect":
      return <div>Signing you out...</div>;
  }

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Oops... {auth.error.message}</div>;
  }

  if (!auth.isAuthenticated) {
    return <button onClick={() => void auth.signinRedirect()}>Log in</button>;
  }

  console.log("user", auth.user);
  return (
    <div>
      <button onClick={() => auth.signoutRedirect()}>logout</button>
      <br />
      <header></header>
      <main>
        <nav></nav>
        <Routes>
          <Route path="/" element={<PeoplePage />} />
          <Route path="/items" element={<ItemPage />} />
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
