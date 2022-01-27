import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.css';

const Pagination = ({ info, pageNumber, setPageNumber }) => {

    let [width, setWidth] = useState(window.innerWidth);

    let updateDimension = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimension);
        return () => window.removeEventListener("resize", updateDimension);

    }, [])

    return (
        <>
            <style jsx="true">
                {`
                    @media (max-width: 768px){
                        .next,.prev{
                            display: none;
                        }

                        .pagination{
                            font-size: 14px;
                        }
                    }
                `}
            </style>
            <ReactPaginate
                className={`${styles.a} pagination justify-content-center my-4 gap-3`}
                nextLabel="Next"
                previousLabel="Prev"
                nextClassName="btn btn-primary next"
                previousClassName="btn btn-primary prev"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                marginPagesDisplayed={width < 576 ? 1 : 2}
                pageRangeDisplayed={width < 576 ? 1 : 2}
                onPageChange={(data) => {
                    setPageNumber(data.selected + 1)
                }}
                activeClassName="active"
                forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
                pageCount={Math.ceil(info?.pages)}
            />
        </>
    );
};

export default Pagination;
