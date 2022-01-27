import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Cards.module.css';

const Cards = ({ results, page }) => {

    let display;
    if (results) {
        display = results.map(x => {
            let { id, name, image, location, status } = x;
            return (
                <Link to={`${page}${id}`} key={id} style={{ textDecoration: "none" }} className='col-lg-4 col-md-6 col-12 mb-4 text-dark position-relative'>
                    <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
                        <img src={image} alt="" className={`${styles.img} img-fluid`} />
                        <div style={{ padding: "10px" }} className="content">
                            <div className="fs-4 fw-bold mb-4">{name}</div>
                            <div className="">
                                <div className="fs-6 text-muted">Last location</div>
                                <div className="fs-5">{location.name}</div>
                            </div>
                        </div>
                    </div>

                    {(() => {
                        if (status === "Dead") {
                            return (
                                <div className={`${styles.badge} position-absolute badge bg-danger`} >{status}</div>
                            )
                        } else if (status === "Alive") {
                            return (
                                <div className={`${styles.badge} position-absolute badge bg-success`} >{status}</div>
                            )
                        } else {
                            return (
                                <div className={`${styles.badge} position-absolute badge bg-secondary`} >{status}</div>
                            )
                        }
                    })()}
                </ Link>
            )
        })
    } else {
        display = "No Characters Found:/";
    }

    return <>{display}</>;
};

export default Cards;
