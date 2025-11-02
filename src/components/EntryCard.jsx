const EntryCard = ({ entry, onSelect, onDelete }) => (
  <div
    className="border rounded-md p-3 hover:bg-black transition flex items-start justify-between gap-3"
  >
    {/* Left section: image + text */}
    <div
      onClick={() => onSelect(entry)}
      className="flex gap-3 flex-1 cursor-pointer"
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
          <h3 className="font-semibold text-white">
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

    {/* Right section: delete button */}
    <button
      onClick={(e) => {
        e.stopPropagation() // prevent opening modal when deleting
        onDelete(entry.id)
      }}
      className="text-red-500 hover:text-red-200 font-bold ml-2"
      title="Delete Entry"
    >
      Delete
    </button>
  </div>
)

export default EntryCard
