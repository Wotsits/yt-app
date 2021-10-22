import axios from 'axios'

const KEY = 'AIzaSyDsmNdmbwDdkYW6gpYLMAtj_TJVDlHaWV4'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
})
