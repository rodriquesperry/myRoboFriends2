const SearchBox = ({ handleSearch }) => {
  return (
    <div className='pa2'>
      <input type='search' className='pa3 ba--green bg-lightstblue' onChange={handleSearch} placeholder='search MyRoboFriends...' />
    </div>
  )
}

export default SearchBox