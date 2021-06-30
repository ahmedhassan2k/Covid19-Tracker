import React,{useEffect, useState} from 'react';
function Countries(){
    let [country,setCountry] = useState([]);
    useEffect (()=> {
        async function getData(){
            const res = await fetch("https://api.covid19api.com/summary");
            let data = await res.json();
            setCountry (data.Countries);
        }
        getData();
    }
    
    ,[])
    
    console.log(country);
    if (!country){
        return <h3>Loading Data, Please Wait</h3>
    }
    return(
        <div  className = "container">
            {country.map((value, index) => {
                delete value.Premium
                delete value.ID
                    return(
                        <div  className = "box">
                            <h1>{value.Country}</h1>
                            <hr/>
                            
                            {Object.keys(value).map((val, ind) =>{
                                var x = value[val]
                                
                                //console.log(value[val]);
                                return(
                                    <div  className = "inner-container">
                                        <div className="x1"><strong>{val}:</strong></div>
                                        <div className="x2">{x}</div>       
                                        
                                    </div>
                                )
                            })}
                            
                        </div>
                    )
                })
            
            }
        </div>
    )
}
export default Countries;