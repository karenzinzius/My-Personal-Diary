import AddEntryButton from "./AddEntryButton"

const Header = ({ onAddClick }) => (
  <header className="flex justify-between items-center mb-6">
    <h1 className="text-2xl font-bold text-white">My Personal Diary</h1>
    <AddEntryButton onClick={onAddClick} />
  </header>
)

export default Header

