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
     

      <section className="grid gap-4 sm:grid-cols-two ">

      <article className="bg-slate-300/70 rounded-3xl grid grid-cols-2 justify-item-center item-center p-6">
        <h3 className="capitalize col-start-1 col-end-3">{weather.weather[0].description}</h3>

        <div className="place-content-center grid">
        <h2 className='text-[40px] font-bold sm:text-[80px]'>{isCelcius ? `${temp.celcius}°C`:`${temp.fahrenheit}°F`}</h2>
        </div>

        <div className=" grid place-content-center"> 
          <img className=""
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
            alt=""
          />
        </div>
      </article>
      

      <section>
        <article className="bg-slate-300/70 rounded-3xl grid grid-cols-3 justify-center justify-items-stretch mt-2 py-2 sm:block sm:py-[66px] sm:px-2 p-2 gap-3 h-full">

          <div className="flex text-[ms] justify-center items-center"> 
            <div >
              <img className="m-2 w-5 " src="/image/viento.png" alt="" />
            </div>
            <h5 className="text-[13px] ">{weather.wind.speed} m/s</h5>
          </div>

          <div  className="flex text-sm  justify-center items-center">
            <div>
              <img className="m-2 w-5 " src="/image/gotas.png" alt="" />
            </div>
            <h5 className="text-[13px]">{(weather.wind.deg)/10} %</h5>
          </div>

          <div  className="flex text-sm justify-center items-center">
            <div>
              <img className="m-2 w-5" src="/image/arrow.png" alt="" />
            </div>
            <h5 className="text-[13px]">{weather.wind.gust} hpa</h5>
          </div>

        </article>  
      </section>

      <button onClick={changeUnitTenp} className="bg-blue-500 py-2 px-6 text-white font-bolod rounded-full hover:bg-blue-800 duration-200 text-sm block mx-auto mt-2" >Change C°/F°</button>
    </section>
    </section>
  );
};

export default Weather;
