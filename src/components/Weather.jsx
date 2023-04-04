import React from "react";
import Loader from "./Loader";

const Weather = ({ weather }) => {
  console.log(weather);
  return (
    <section>
      {weather ? (
        <h2>
          {weather?.name},{weather?.sys.country}
        </h2>
      ) : (
        <Loader />
      )}

      <article>
        <h3>{weather?.weather[0].description}</h3>

        <h2>{parseInt(weather?.main.temp)} °K</h2>

        <div>
          <img
            src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`}
            alt=""
          />
        </div>
      </article>
      <section>
        <article>

          <div>
            <div>
              <img src="/public/image/viento.png" alt="" />
            </div>
            <h5>{weather?.wind.speed} m/s</h5>
          </div>

          <div>
            <div>
              <img src="/public/image/gotas.png" alt="" />
            </div>
            <h5>{weather?.wind.deg} %</h5>
          </div>

          <div>
            <div>
              <img src="/public/image/arrow.png" alt="" />
            </div>
            <h5>{weather?.wind.gust} hpa</h5>
          </div>

        </article>
      </section>

      <button className="bg-blue-500 py-2 px-6 text-white font-bolod rounded-full hover:bg-blue-800 duration-200 " >Change C°/F°</button>
    </section>
  );
};

export default Weather;
