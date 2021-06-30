import React, {useEffect, useState} from 'react';

function Global(){
    let [State, setState] = useState({});
    useEffect(()=> {
        async function getData(){
            const res = await fetch("https://api.covid19api.com/summary");
            let data = await res.json();
            setState (data.Global);
        }
        getData();

    },[])

    // console.log(State);
    return(
        <div className = "container">
            {Object.keys(State).map((value, ind)=>{
                return(
                    <div className = "box" key={ind}>
                        <h2>{value.toUpperCase()} </h2>
                        <h4>{State[value]}</h4>
                    </div>
                )
            })}
        </div>
    )
}
export default Global;