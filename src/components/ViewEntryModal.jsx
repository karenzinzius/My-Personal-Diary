import EntryDetails from "./EntryDetails"

const ViewEntryModal = ({ isOpen, onClose, entry }) => {
  if (!isOpen || !entry) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
        <EntryDetails entry={entry} />
      </div>
    </div>
  )
}

export default ViewEntryModal

