import axios from 'axios';
export const baseUrl = "https://bayut.p.rapidapi.com";


export const fetchApi = async (url) => {
    const {data} = await axios.get((url), { 
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '9d235ff5camsh0bd89ee7970adb8p150b2ajsn0e32c4ffb065',
        }
    });

    return data;
}

//idk