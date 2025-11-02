import EntryCard from "./EntryCard"

const EntryList = ({ entries, onSelect }) => {
  if (entries.length === 0) {
    return <p className="text-gray-500 text-center">No entries yet. Add your first one!</p>
  }

  const sortedEntries = [...entries].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  )

  return (
    <div className="flex flex-col gap-3">
      {sortedEntries.map((entry) => (
        <EntryCard key={entry.id} entry={entry} onSelect={onSelect} />
      ))}
    </div>
  )
}

export default EntryList

