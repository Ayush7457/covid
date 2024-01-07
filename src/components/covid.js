import React from "react";
import { useEffect, useState } from "react";
const Covid = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () =>{
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
          const actualData = await res.json();
          console.log(actualData.statewise[0]);
          setData(actualData.statewise[0]);
        } catch(err){
            console.log("err");
        }
       
    }
    useEffect(() => {
       getCovidData();
    }, []);

    return (
        <div className="md:pt-36 pt-10 md:pb-36 pb-10 bg-gradient-to-r from-violet-200 to-pink-200 font-serif text-xl">
            <section>
            <h1 className="text-center">CREATED BY AYUSH PARMAR</h1>
            <h2 className="text-center">COVID-19 CORONAVIRUS TRACKER</h2>
        <div className="flex flex-wrap md:mt-20 mt-10 gap-5 justify-center">
          <ul className="border-black p-10 border-2 rounded bg-gradient-to-r from-blue-200 to-cyan-200 text-center">
            <li className="card ">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"><span> OUR </span> Country</p>
                        <p className="card_total card_small">INDIA</p>
                    </div>
                </div>
            </li>
          </ul>

          <ul className="border-black  border-2 p-10 rounded bg-gradient-to-r from-blue-200 to-cyan-200 text-center ">
            <li className="card ">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name"><span> TOTAL </span> RECOVERED</p>
                        <p className="card_total card_small">{data.recovered}</p>
                    </div>
                </div>
            </li>
          </ul>

          <ul className="border-black border-2 p-10 rounded bg-gradient-to-r from-blue-200 to-cyan-200 text-center">
            <li className="card ">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name"><span> TOTAL </span> CONFIRMED</p>
                        <p className="card_total card_small">{data.confirmed}</p>
                    </div>
                </div>
            </li>
          </ul>
          </div >
          <div className="flex flex-wrap mt-10 gap-5 justify-center">
          <ul className="border-black border-2 p-10 rounded bg-gradient-to-r from-blue-200 to-cyan-200 text-center ">
            <li className="card ">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name"><span> TOTAL </span> DEATH</p>
                        <p className="card_total card_small">{data.deaths}</p>
                    </div>
                </div>
            </li>
          </ul>

          <ul className="border-black border-2 p-10 rounded bg-gradient-to-r from-blue-200 to-cyan-200 text-center">
            <li className="card ">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name"><span> TOTAL </span> ACTIVE</p>
                        <p className="card_total card_small">{data.active}</p>
                    </div>
                </div>
            </li>
          </ul>

          <ul className="border-black border-2 p-10 rounded bg-gradient-to-r from-blue-200 to-cyan-200 text-center">
            <li className="card ">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name"><span> TOTAL </span> UPDATED</p>
                        <p className="card_total card_small">{data.lastupdatedtime}</p>
                    </div>
                </div>
            </li>
          </ul>

          </div>
          </section>
        </div>

    )
}
export default Covid;