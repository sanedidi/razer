import React from "react";
import "./Mouse.scss";
import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast('Added to cart', {
  duration: 1000,
  position: 'bottom-right',

  // Styling
  style: {},
  className: '',

  // Custom Icon
  icon: '👏',

  // Change colors of success/error/loading icon
  iconTheme: {
    primary: '#000',
    secondary: '#fff',
  },

  // Aria
  ariaProps: {
    role: 'status',
    'aria-live': 'polite',
  },
});
const Mouse = ({ mice }) => {
  return (
    <section className="catalog">
      <div className="container">
          <h2 className="catalog__main-title">
          MICE BY RAZER
          </h2>
        <div className="catalog__wrapper">
          {mice.map((el) => {
            return (
              <div key={el._id} className="catalog__card">
                <div className="catalog__top">
                  <img src={el.image} alt="" />
                </div>
                <div className="catalog__content">
                  <div className="catalog__title">
                    <h2>{el.name}</h2>
                  </div>
                  <div className="catalog__desc">
                    <p>{el.desc}</p>
                  </div>
                  <div className="catalog__btm">
                    <p>US${el.price}</p>
                    <button onClick={notify}>BUY</button>
                    <Toaster />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Mouse;
