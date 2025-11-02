import { useState } from "react"

const EntryForm = ({ onSubmit, onClose }) => {
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")
  const [date, setDate] = useState(new Date().toISOString().slice(0, 16))
  const [image, setImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImage(file)
      const reader = new FileReader()
      reader.onloadend = () => setImagePreview(reader.result)
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return

    const newEntry = {
      title,
      text,
      date,
      image: imagePreview,
    }

    onSubmit(newEntry)
    onClose()
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border bg-gray-800 text-white rounded-md p-2"
      />

      <textarea
        placeholder="Write your thoughts..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border bg-gray-400 text-white-400 rounded-md p-2 h-32 resize-none"
      />

      <input
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border bg-gray-400 text-white-400 rounded-md p-2"
      />

      <div>
        <label className="block mb-1 text-gray-900 font-medium">Attach Image (optional)</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="block w-full text-sm text-gray-500"
        />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="mt-2 w-full h-40 object-cover rounded-md"
          />
        )}
      </div>

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onClose}
          className="px-3 py-1 bg-gray-800 text-white border rounded-md hover:bg-red-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-3 py-1 bg-gray-800 text-white rounded-md hover:bg-green-600"
        >
          Save
        </button>
      </div>
    </form>
  )
}

export default EntryForm
