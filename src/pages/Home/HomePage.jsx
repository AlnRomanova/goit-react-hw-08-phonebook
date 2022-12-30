import React from 'react';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.homeBox}>
       <h1 className={css.homeTitle}>
        Welcome to contact app{' '}
        <span role="img" aria-label="Greeting icon">
        🦄
        </span>
      </h1>
      <h2 className={css.homeText}>
        Let`s start{' '}
        <span role="img" aria-label="Greeting icon">
        🚀
        </span>
      </h2>
    </div>
  )
}
export default HomePage;
