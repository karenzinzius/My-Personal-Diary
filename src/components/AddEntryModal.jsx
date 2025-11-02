import EntryForm from "./EntryForm"

const AddEntryModal = ({ isOpen, onClose, onAdd }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
        <h2 className="text-lg text-gray-700 font-bold mb-4">Add New Entry</h2>
        <EntryForm onSubmit={onAdd} onClose={onClose} />
      </div>
    </div>
  )
}

export default AddEntryModal

