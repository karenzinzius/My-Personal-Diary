import { useState } from "react"

const AddEntry = ({ onAdd, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("")
    const [message, setMessage] = useState ("")

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value)
    }
    const handleAddClick = () => {
        setMessage("Entry Added!")
        setTimeout(() => setMessage(""), 3000)
    }
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            setMessage(`Searching for: ${searchTerm}`)
            setTimeout(() => setMessage(""), 3000)
        }
    }

    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-2">
                <input
                  type="text" 
                  placeholder="Search entries..." 
                  value={searchTerm} 
                  onChange={handleSearchChange}
                  onKeyDown={handleKeyDown}
                  className="flex-1 border rounded-md p-2"
                  />
                  <button
                    onClick={handleAddClick}
                    className="px-4 py-2 bg-black-800 text-white rounded-md hover:bg-black-600 transition"
                    >Add Entry</button>
            </div>
            <input 
               type="datetime-local" 
               value={date}
               onChange={(e) => setData(e.target.value)}
               className="border rounded-md p-2 w-full" 
            />
            {message && (
                <p className="text-green-600 font-bold text-center">
                    {message}
                </p>
            )}
        </div>
    )
}

export default AddEntry;
