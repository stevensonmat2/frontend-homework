import { useState } from 'react';

function Search(props) {
  const { title } = props;
  const { characters } = props;
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(input.toLowerCase());
  };

  function executeSearch() {
    let results = characters.filter((character) => {
      if (character.fullName.toLowerCase().includes(search)) {
        return character;
      }
      return '';
    });
    return results.map((character) => (
      <div className='d-flex flex-column justify-content-center align-items-center m-2'>
        <img
          src={character.imageUrl}
          alt='a GOT character'
          width='250px'
          height='300px'
        />
        <div className='text-center'>
          <p>{character.fullName}</p>
        </div>
      </div>
    ));
  }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center m-2'>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          class='form-control'
          type='search'
          placeholder='Search characters'
          aria-label='Search'
        />
      </form>
      <div>{search && executeSearch()}</div>
    </div>
  );
}
export default Search;