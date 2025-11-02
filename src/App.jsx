import { useState, useEffect } from "react";
import Header from "./components/Header";
import EntryList from "./components/EntryList";
import AddEntryModal from "./components/AddEntryModal";
import ViewEntryModal from "./components/ViewEntryModal";

const App = () => {
  const [entries, setEntries] = useState(() => {
    const saved = localStorage.getItem("diaryEntries");
    return saved ? JSON.parse(saved) : [];
  });
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("diaryEntries", JSON.stringify(entries));
  }, [entries]);

  const handleAddEntry = (newEntry) => {
    setEntries([
      { ...newEntry, id: Date.now(), createdAt: new Date() },
      ...entries,
    ]);
  };
  const handleSelectEntry = (entry) => {
    setSelectedEntry(entry);
    setIsViewModalOpen(true);
  };
  const handleDeleteEntry = (id) => {
    const updatedEntries = entries.filter((entry) => entry.id !== id);
    setEntries(updatedEntries);
  };

  return (
    <div className="p-5 max-w-2xl mx-auto">
      <Header onAddClick={() => setIsAddModalOpen(true)} />
      <EntryList
        entries={entries}
        onSelect={handleSelectEntry}
        onDelete={handleDeleteEntry}
      />

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
  );
};

export default App;
