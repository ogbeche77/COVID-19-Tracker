import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';
//Api call, only needed object are selected
export const fetchData = async () => {
    try {
        const { data: {confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);
        
         return {confirmed, recovered, deaths, lastUpdate };
    } catch (error) {

    }
}

export const fetchDailyData = async () =>{
try {
    const { data } = await axios.get(`${url}/daily`); // fetching dailt data

    console.log(data);
} catch (error) {

}
}