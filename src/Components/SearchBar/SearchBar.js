import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';

import "./SearchBar.css";
import { getAllRepos } from '../../api/getRepos';
import { setFilteredRepos } from '../../redux/user-reducer/actions';

function SearchBar() {

    const [query, setQuery] = useState('')
    const dispatch = useDispatch();
    const handleSubmit = (e) =>  
    {
        e.preventDefault()
        getAllRepos(query)
        .then((res) => {
            if (res?.data?.items?.length === 0) {
            }console.log(res.data)
            dispatch(setFilteredRepos(res.data))
            })
            .catch((err) => {
            console.log(err)
            });
        // console.log(process.env.REACT_APP_GITHUB_AUTH_TOKEN);
    }

    return (
    <>
        <form onSubmit={handleSubmit}>
        <div className="new__search ">
            <input
            type="text"
            placeholder={`Enter a Github repo name...`}
            required=""
            className="new__search--input "
            onChange={({ target }) => {
            setQuery(target.value);
            }}
            />
            <div>
            <button type="submit" className="new__search--btn">
            <SearchIcon />
            </button>
            </div>
        </div>
        </form>
    </>
    );
}

export default SearchBar;