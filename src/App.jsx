import { useState } from "react"
import Entries from "./components/AddEntry";

const App = () => {
  const [entries, setEntries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  const handleAdd = () => {
    const newEntry = { id: Date.now(), text: "New Entry" }
    setEntries([...entries, newEntry])
    console.log("Entry Added:", newEntry)
  }
  const handleSearch = (term) => {
    setSearchTerm(term)
    console.log("Searching for:", term)
  } 
  return (
    <div className="p-5 text-center">
      <h1 className="text-2xl font-bold mb-4">My Personal Diary</h1>
      <p className="text-l mb-2">Write what crosses your mind!</p>
      <AddEntry onAdd={handleAdd} onSearch={handleSearch} />

      <div className="mt-6">
        <h3 className="text-lg text-gray-700 mb-2">
          Search term: {searchTerm}
        </h3>

        <ul className="list-disc list-inside">
          {entries.map((entry) => (
            <li key={entry.id} className="text-gray-600">
              {entry.tetx}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
};
 
export default App;