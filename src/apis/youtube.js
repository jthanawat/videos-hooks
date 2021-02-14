import axios from 'axios';

const KEY = 'AIzaSyDHNDTmZyQk9WPJTalfC2UdruqSMuMLeZo';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
