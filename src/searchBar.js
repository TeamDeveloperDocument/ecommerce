import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const CustomTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#bfa75e"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#bfa75e"
    }
  }
})(TextField);

export function SearchBar({ setsearch }) {
  function handleSearch(event) {
    event.preventDefault();
    setsearch(searchInput);
  }

  const [searchInput, setsearchInput] = useState("");

  return (
    <section className="search-bar">
      <div className="container">
        <form onSubmit={handleSearch}>
          <CustomTextField
            className="search-field"
            label="what are we plannig to cook today ?"
            onChange={(e) => setsearchInput(e.target.value)}
          />
          <Button type="submit" onClick={handleSearch} variant="contained">
            Search
          </Button>
        </form>
      </div>
    </section>
  );
}
