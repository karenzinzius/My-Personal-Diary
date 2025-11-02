const EntryCard = ({ entry, onSelect }) => (
  <div
    onClick={() => onSelect(entry)}
    className="border rounded-md p-3 cursor-pointer hover:bg-gray-300 transition flex gap-3"
  >
    {entry.image && (
      <img
        src={entry.image}
        alt="entry"
        className="w-16 h-16 object-cover rounded-md"
      />
    )}

    <div className="flex flex-col justify-between flex-1">
      <div>
        <h3 className="font-semibold text-gray-500">
          {entry.title || "Untitled Entry"}
        </h3>
        <p className="text-gray-600 text-sm truncate">{entry.text}</p>
      </div>

      {entry.date && (
        <p className="text-xs text-gray-400 mt-1">
          {new Date(entry.date).toLocaleString()}
        </p>
      )}
    </div>
  </div>
)

export default EntryCard

