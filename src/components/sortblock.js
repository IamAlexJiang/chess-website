const SortBlock = ({ sortBy, handleSortChange }) => {
  return (
    <div id="sort-container">
  <label id="sort-label" htmlFor="sort">Sort by:</label>
  <select id="sort" value={sortBy} onChange={handleSortChange}>
    <option value="name">Name</option>
    <option value="usage">Usage</option>
    <option value="difficulty">Difficulty</option>
  </select>
</div>

  );
};

export default SortBlock;
