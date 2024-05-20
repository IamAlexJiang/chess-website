const SortBlock = ({ sortBy, handleSortChange }) => {
  return (
    <div className="sort-block">
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" value={sortBy} onChange={handleSortChange}>
        <option value="name">Name</option>
        <option value="usage">Usage</option>
        <option value="difficulty">Difficulty</option>
      </select>
    </div>
  );
};

export default SortBlock;
