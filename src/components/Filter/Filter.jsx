const Filter = (props) => {
    const {filter, onFilter} = props;
  return (
    <>
      <h2>Find contacts by name</h2>
          <input type="text" value={filter} onChange={onFilter} />
    </>
  );
};

export default Filter;