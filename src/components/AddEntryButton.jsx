const AddEntryButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-600 transition"
  >
    + Add Entry
  </button>
)

export default AddEntryButton
