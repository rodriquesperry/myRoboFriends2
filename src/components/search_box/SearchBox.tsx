import { ChangeEvent } from "react";

type SearchBoxProps = {
  // handleSearch: ChangeEventHandler<HTMLInputElement>;

  // This is the same as above it just allows you to get granular with the function, like if you wanted to return a value
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ handleSearch }: SearchBoxProps) => {
  return (
    <div className='pa2'>
      <input type='search' className='pa3 ba--green bg-lightstblue' onChange={handleSearch} placeholder='search MyRoboFriends...' />
    </div>
  )
}

export default SearchBox