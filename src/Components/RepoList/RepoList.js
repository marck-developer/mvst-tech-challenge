import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { userSelector } from "../../redux/user-reducer/selectors";
import RepoDetail from "../RepoDetail";

import "./RepoList.css";
import SearchRepoBar from "../SearchRepoBar";
import { pagination } from "../../utils/pagintation";

const RepoList = () => {
    const { userRepos, searchUserRepo, filteredRepos } =
    useSelector(userSelector);
    const getRepos = useSelector((state)=> {return state.user?.filteredRepos?.items});
    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedRepoList, setPaginatedList] = useState(null);

  // Using UseEffects to trigger pagination() if user searches for a Repo

    useEffect(() => {
    pagination(currentPage, userRepos, setPaginatedList);
    }, [currentPage, userRepos]);

    useEffect(() => {
    if (filteredRepos !== null && filteredRepos.length > 0 && searchUserRepo) {
        pagination(currentPage, filteredRepos, setPaginatedList);
    }
    }, [currentPage, filteredRepos, searchUserRepo]);
    console.log(getRepos);
    return (
    <div>
        <ul>
        {getRepos&&getRepos.map((repo)=> { 
            console.log(repo.name);
            return <li>{repo.name}</li>
        })}
        </ul>
        
        {/* {searchUserRepo && <SearchRepoBar setCurrentPage={setCurrentPage} />}
        {paginatedRepoList?.data?.map((repo) => (
        <RepoDetail repo={repo} key={repo.id} />
        ))}
        <footer className="footer__buttons">
        <button
            onClick={() => {
            setCurrentPage(currentPage - 1);
            }}
            className="footer__buttons--button"
            style={{
            visibility: paginatedRepoList?.pre_page === null && "hidden",
            }}
        >
            Previous
        </button>
        <span>
            {paginatedRepoList?.page} of {paginatedRepoList?.total_pages}
        </span>
        <button
            className="footer__buttons--button"
            onClick={() => {
            setCurrentPage(currentPage + 1);
            }}
            style={{
            visibility: paginatedRepoList?.next_page === null && "hidden",
            }}
        >
            Next
        </button>
        </footer> */}
    </div>
    );
};

export default RepoList;