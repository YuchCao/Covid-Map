import axios from "axios"

export const CovidDataService = {
    getAllCountyCases: function(){
        return axios.get("https://corona.lmao.ninja/v2/jhucsse/counties")
    }
}