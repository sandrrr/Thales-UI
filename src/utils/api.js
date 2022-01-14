//const BASE_URL = 'http://localhost:3000/api/data'
const BASE_URL = 'http://192.168.37.144:50006/api/data'

export const API = {
    getAll: async () => {
        return await fetch(BASE_URL + '/getAll')
        .then(res => res.json());
    }
}
