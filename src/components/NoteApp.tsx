import { SortByType } from "../types/SortBy";
import AddNewNote from "./AddNewNote";
import NoteList from "./NoteList";
import NoteStatus from "./NoteStatus";

type Props = {
  sortBy: SortByType;
};

function NoteApp({ sortBy }: Props) {
  return (
    <div className="note-app">
      <AddNewNote />
      <div className="note-container">
        <NoteStatus />
        <NoteList sortBy={sortBy} />
      </div>
    </div>
  );
}
export default NoteApp;
