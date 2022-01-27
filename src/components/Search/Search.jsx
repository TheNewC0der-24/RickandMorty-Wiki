import React from 'react';
import styles from './Search.module.css';

const Search = ({ setSearch, setPageNumber }) => {
    return <form className='d-flex flex-sm-row flex-column align-items-center justify-content-center mb-4 gap-2'>
        <input onChange={e => { setSearch(e.target.value); setPageNumber(1); }} placeholder='Search for Characters' type="text" className={styles.input} />
        <button onClick={e => { e.preventDefault() }} className={`${styles.btn} btn btn-primary`}>
            <script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"></script>
            <lord-icon
                src="https://cdn.lordicon.com/msoeawqm.json"
                trigger="loop-on-hover"
                colors="primary:#ffffff,secondary:#ffffff"
                stroke="100"
                style={{ width: "30px", height: "30px" }}>
            </lord-icon>
        </button>
    </form >;
};

export default Search;
