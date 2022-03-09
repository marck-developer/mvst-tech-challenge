import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { userSelector } from "../../redux/user-reducer/selectors";
import "./RepoList.css";

const RepoList = () => {
    const { userRepos, searchUserRepo, filteredRepos } =
    useSelector(userSelector);
    const getRepos = useSelector((state)=> {return state.user?.filteredRepos?.items});

    return (
    <div>
        <ul>
        {getRepos&&getRepos.map((repo)=> { 
            return <li>{repo.name}</li>
        })}
        </ul>
        
    </div>
    );
};

export default RepoList;