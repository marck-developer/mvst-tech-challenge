import React from "react";
import { useSelector } from "react-redux";

import "./RepoList.css";

const RepoList = () => {

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