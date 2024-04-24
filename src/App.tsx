import { useState } from "react";
import "./App.css";
import NoteHeader from "./components/NoteHeader";
import AppProviders from "./providers/AppProviders";
import { SortByType } from "./types/SortBy";
import NoteApp from "./components/NoteApp";

function App() {
  const [sortBy, setSortBy] = useState<SortByType>("latest");

  return (
    <AppProviders>
      <div className="container">
        <NoteHeader sortBy={sortBy} onSort={(value) => setSortBy(value)} />
        <NoteApp sortBy={sortBy} />
      </div>
    </AppProviders>
  );
}

export default App;
