import React from "react";
import { useSelector } from "react-redux";
import RepoList from "../RepoList";
import "./SearchResults.css";

const SearchResults = () => {
    const getRepos = useSelector((state)=> {return state.user?.filteredRepos?.items});

    return (
    <div className="search__results">
        {getRepos&&getRepos?.length > 0 ? (
        <RepoList />
        ) : (
        <div className="norepo__message">
        <span>Please enter a repository name in the search bar</span>
        </div>
        )}
    </div>
    );
};

export default SearchResults;