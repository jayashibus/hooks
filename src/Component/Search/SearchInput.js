import React, { Component } from "react";

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = { entry: "Car" };
  }

  onChangeHandler = (event) => {
    console.log(this.event);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <h1>Image Search Engine</h1>
          <div className="field">
            <div className="ui massive icon input">
              <input
                type="text"
                placeholder="Search here........"
                onChange={this.onChangeHandler.bind(this)}
                // onChange={(event) =>
                //   this.setState({ entry: event.target.value })
                // }
                value={this.state.entry}
              ></input>
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchInput;
