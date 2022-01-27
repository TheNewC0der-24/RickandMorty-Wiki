import React from 'react';
import Gender from './Category/Gender';
import Species from './Category/Species';
import Status from './Category/Status';

const Filters = ({ setPageNumber, setStatus, setGender, setSpecies }) => {

    let clear = () => {
        setPageNumber("");
        setStatus("");
        setGender("");
        setSpecies("");
        window.location.reload(false);
    }

    return <div className='col-lg-3 col-12 mb-5'>
        <div className="text-center fs-4 fw-bold mb-2">Filter</div>
        <div onClick={clear} className="text-center text-decoration-underline text-primary mb-4" style={{ cursor: "pointer" }}>Clear Filters</div>
        <div className="accordion" id="accordionExample">
            <Status setPageNumber={setPageNumber} setStatus={setStatus} />
            <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
            <Gender setPageNumber={setPageNumber} setGender={setGender} />
        </div>
    </div>;
};

export default Filters;
