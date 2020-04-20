import React, {useEffect, useState} from 'react'
import {fetchEconomicData} from '../../api/'
import { Line } from 'react-chartjs-2'

const Economic = () => {
    const [ dailyData, setDailyData] = useState([])
    const [ countryCode] = useState("USA")
    const [countries] = useState()
    useEffect(()=> {
        const fetchAPIData = async() => {
            setDailyData(await fetchEconomicData(countryCode))
        }
        fetchAPIData() 
        // const getCountries = async() => {
        //     setCountries(await fetchDailyCountries())
        // }
        // getCountries()
        
    },[countryCode])
    if(countries){
        console.log(countries)
    }
    const lineChart = (
        dailyData.length ? (
            <Line 
            data={{
                labels: dailyData.map(({date }) => date),
                datasets: [{
                    data: dailyData.map((({value}) => value)),
                    label: 'Value',
                    borderColor: '#3333ff',
                    fill: true,
                }]
            }}
        />
        ) : 
        null
        
    )
    
    return(
        <div>
            Economic Data : USA ADP EMPLOYMENT CHANGE
            {lineChart}
        </div>
    )
}
export default Economic