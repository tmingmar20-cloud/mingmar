import React from 'react'
import './home.css'
import img from '../../assets/img.jpg'

const Home = () => {
  return (
    <div>
      <section className="home">
        <div className="home-content">
            <h1>Mingmar Lama</h1>
            <h2>tmro lagi ek hainaS</h2>
            <p>
    Aatma timi khushi timi mero artha timi bhayera. Aaakashamai saachi rakhi arko janma ni timrai banera.
            </p>
            <button className="home-btn"> Download CV</button>
        </div>
        <div className="home-img">
            <img
            src={img}
            alt="Mingmar Lama"
            width={300}
            />
        </div>
      </section>
    </div>
  );
};

export default Home