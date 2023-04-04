import React from 'react'
import Loader from './Loader'

const Weather = ({weather}) => {
    console.log(weather);
  return (
    <section>
{
weather ? (<h2>{weather?.name},{weather?.sys.country}</h2>):(<Loader/>)
}

<section>

        <h3>{weather?.weather[0].description}</h3>
 

        <h2>{parseInt(weather?.main.temp/10)}°C</h2>

        <div>
            <img src="" alt="" />
        </div>


</section>


    </section>
  )


}

export default Weather