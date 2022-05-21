import React, { useState } from "react";
import axios from "axios";
import ImageList from "./ImageList";

const SearchInputF = () => {
  const [entry, setEntry] = useState("");
  //const [images, setImages] = useState([]);

  const onChangeHandler = (event) => {
    //console.log(event.target.value);
    setEntry(event.target.value);

    const response = axios.get(
      "https://pixabay.com/api/?key=27017638-d6e3eba259b36a8cc3202f094&q=car&image_type=photo&pretty=true"
    );

    console.log(response);
    //setImages(response.data.hits);
  };
  return (
    <div className="ui segment">
      <form className="ui form">
        <h1>Image Search Engine</h1>
        <div className="field">
          <div className="ui massive icon input">
            <input
              type="text"
              placeholder="Search here........"
              onChange={onChangeHandler}
              value={entry}
            />
            <i className="search icon"></i>
            <ImageList />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchInputF;
