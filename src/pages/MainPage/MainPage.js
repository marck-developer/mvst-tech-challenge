import React from "react";

import * as ROUTES from "../../routes";
import "./MainPage.css";
import SearchBar from "../../Components/SearchBar/SearchBar";
import SearchResults from "../../Components/SearchResults";

const MainPage = () => {

    return (
    <main className="main__container">
        <SearchBar />
        <SearchResults />
    </main>
    );
};

export default MainPage;
