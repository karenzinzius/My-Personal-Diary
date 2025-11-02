const EntryDetails = ({ entry }) => (
  <div>
    <h2 className="text-xl text-black font-bold mb-2">{entry.title}</h2>

    {entry.image && (
      <img
        src={entry.image}
        alt="entry"
        className="mb-3 w-full h-60 object-cover rounded-md"
      />
    )}

    <p className="text-gray-700 whitespace-pre-wrap mb-3">{entry.text}</p>

    {entry.date && (
      <p className="text-sm text-gray-500">
        Logged on {new Date(entry.date).toLocaleString()}
      </p>
    )}
  </div>
)

export default EntryDetails
