import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredRepos } from "../../redux/user-reducer/actions";
import { userSelector } from "../../redux/user-reducer/selectors";


// Search User Repos

const SearchRepoBar = ({ setCurrentPage }) => {
  const { userRepos } = useSelector(userSelector);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");

  // Creating a Filtered Array depending on user search

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredRepos = userRepos.filter((repo) => {
      return repo.name.includes(filter);
    });


    dispatch(setFilteredRepos(filteredRepos));

    setCurrentPage(1);
  };

  return (
    <>
      <form
        className="new__search"
        style={{ padding: "0.5rem ", boxShadow: "none" }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Search User Repos..."
          className="new__search--input "
          onChange={({ target }) => {
            setFilter(target.value);
          }}
        />
        <button type="submit" className="new__search--btn">
          Search
        </button>
      </form>
   
    </>
  );
};

export default SearchRepoBar;
