import { useState } from "react"
import Header from "./components/Header"
import EntryList from "./components/EntryList"
import AddEntryModal from "./components/AddEntryModal"
import ViewEntryModal from "./components/ViewEntryModal"

const App = () => {
  const [entries, setEntries] = useState([])
  const [selectedEntry, setSelectedEntry] = useState(null)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isViewModalOpen, setIsViewModalOpen] = useState(false)

  const handleAddEntry = (newEntry) => {
    setEntries([{ ...newEntry, id: Date.now(), createdAt: new Date() }, ...entries])
  }

  const handleSelectEntry = (entry) => {
    setSelectedEntry(entry)
    setIsViewModalOpen(true)
  }

  return (
    <div className="p-5 max-w-2xl mx-auto">
      <Header onAddClick={() => setIsAddModalOpen(true)} />
      <EntryList entries={entries} onSelect={handleSelectEntry} />

      <AddEntryModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddEntry}
      />

      <ViewEntryModal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        entry={selectedEntry}
      />
    </div>
  )
}

export default App
