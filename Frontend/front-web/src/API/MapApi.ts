import axios from 'axios';

const MapBoxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;

const MapApi = {
    fetchLocalMapBox: (local:string)=>{
        return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${MapBoxToken}`)
    }
}

export default MapApi;