import React from 'react';
import classes from '../../styles/Sellers.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { MdOutlineArrowForward, MdOutlineArrowBack } from 'react-icons/md';

const Sellers = (props) => {
  const PER_PAGE = 12;
  const totalPages = Math.ceil(props.Sellers.length / PER_PAGE);
  const [page, setPage] = useState(1);
  let items = null;

  const pagination = (page = 1) => {
    const start = (page - 1) * PER_PAGE;
    const end = page * PER_PAGE;
    items = props.Sellers.slice(start, end);
  };
  pagination(page);
  const nextPageHandler = () => {
    // 1.) first page
    setPage((prev) => prev + 1);
    pagination(page);
  };
  const backPageHandler = () => {
    setPage((prev) => prev - 1);
    pagination(page);
  };
  return (
    <div className={classes.BigBox}>
      <div className={classes.SellersContainer}>
        {items.map((seller, i) => {
          return (
            <div className={classes.SellerBox} key={seller.id}>
              <div className={classes.SellerBox__Left}>
                <img src={seller.img} alt="" className={classes.SellerImage} />
              </div>
              <div className={classes.SellerBox__Right}>
                <h3 className={classes.SellerBox__Head}>{seller.name}</h3>
                <div className={classes.SellerBox__Rating}>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>
                <div className={classes.SellerBox__Link}>
                  <Link
                    to="/seller/Filon-Asset-Store-2"
                    className={classes.SellerLink}
                  >
                    Visit Store
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={classes.PagBtns}>
        {page === 1 ? (
          <button
            disabled={true}
            className={classes.PagBtn}
            style={{
              backgroundColor: '#eee',
              cursor: 'not-allowed',
            }}
          >
            <MdOutlineArrowBack />
            <span>Back</span>
          </button>
        ) : (
          <button className={classes.PagBtn} onClick={backPageHandler}>
            <MdOutlineArrowBack />
            <span>Back</span>
          </button>
        )}
        {page === totalPages && page !== 1 ? (
          <button
            disabled={true}
            className={classes.PagBtn}
            style={{
              backgroundColor: '#eee',
              cursor: 'not-allowed',
            }}
          >
            <span>Next</span>
            <MdOutlineArrowForward />
          </button>
        ) : (
          <button className={classes.PagBtn} onClick={nextPageHandler}>
            <span>Next</span>
            <MdOutlineArrowForward />
          </button>
        )}
        {/* {page !== 1 ? <div>...</div> : null} */}

        {/* <div
          onClick={() => {
            setPage(page + 3);
          }}
        >
          {page + 3}
        </div>
        <div
          onClick={() => {
            setPage(page + 4);
          }}
        >
          {page + 4}
        </div>
        <div
          onClick={() => {
            setPage(page + 5);
          }}
        >
          {page + 5}
        </div> */}
        {/* {page !== totalPages ? <div>...</div> : null} */}
      </div>
    </div>
  );
};

export default Sellers;
