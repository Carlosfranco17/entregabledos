import React, { useState } from "react";
import Loader from "./Loader";
 

const Weather = ({ weather,temp }) => {
  const [isCelcius, setIsCelcius] = useState(true)
  console.log(weather);

  const changeUnitTenp=()=>{

    setIsCelcius(!isCelcius)

  }
  return (
    <section className="text-xl">
    
        <h2 className="text-center mb-4 font-bold text-2xl">{weather.name},{weather.sys.country}</h2>
     

      <section className="grid gap-4">

      <article className="bg-slate-300/70 rounded-3xl grid grid-cols-2 justify-item-center item-center">
        <h3 className="capitalize col-start-1 col-end-3">{weather.weather[0].description}</h3>

        <h2 className='text-[45px] font-light'>{isCelcius ? `${temp.celcius} °C`:`${temp.fahrenheit} °F`}</h2>

        <div>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
            alt=""
          />
        </div>
      </article>
      </section>

      <section>
        <article className="bg-slate-300/70 rounded-3xl grid grid-cols-3 justify-center justify-items-stretch mt-2">

          <div className="flex text-sm justify-center items-center"> 
            <div>
              <img src="/public/image/viento.png" alt="" />
            </div>
            <h5>{weather.wind.speed} m/s</h5>
          </div>

          <div  className="flex text-sm justify-center items-center">
            <div>
              <img src="/public/image/gotas.png" alt="" />
            </div>
            <h5>{weather.wind.deg} %</h5>
          </div>

          <div  className="flex text-sm justify-center items-center">
            <div>
              <img src="/public/image/arrow.png" alt="" />
            </div>
            <h5>{weather.wind.gust} hpa</h5>
          </div>

        </article>  
      </section>

      <button onClick={changeUnitTenp} className="bg-blue-500 py-2 px-6 text-white font-bolod rounded-full hover:bg-blue-800 duration-200 text-sm block mx-auto" >Change C°/F°</button>
    </section>
  );
};

export default Weather;
