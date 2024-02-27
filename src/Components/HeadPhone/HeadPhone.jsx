import React from 'react'
import './HeadPhone.scss'
const HeadPhone = ({headsets}) => {
  return (
    <section className="catalog">
    <div className="container">
      <div className="catalog__wrapper">
        {headsets.map((el) => {
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
                  <button>BUY</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
  )
}

export default HeadPhone