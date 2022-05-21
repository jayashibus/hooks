import React from "react";
//import axios from "axios";
import SearchInputF from "./SearchInputF";

const onSubmitHandler = (entry) => {
  console.log(entry);
};

const SearchF = () => {
  return (
    <div>
      <SearchInputF onSubmit={onSubmitHandler} />
    </div>
  );
};

export default SearchF;
