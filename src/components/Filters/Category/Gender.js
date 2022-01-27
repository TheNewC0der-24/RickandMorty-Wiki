import React from 'react';
import FilterBtn from '../FilterBtn';

const Gender = ({ setPageNumber, setGender }) => {

    let gender = ['Male', 'Female', 'Genderless', 'Unknown']

    return <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Gender
            </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body d-flex justify-content-center flex-wrap gap-3">
                {gender.map((items, index) => (
                    <FilterBtn
                        setPageNumber={setPageNumber}
                        task={setGender}
                        key={index}
                        name="gender"
                        index={index}
                        items={items}
                    />
                ))}
            </div>
        </div>
    </div>;
};

export default Gender;
