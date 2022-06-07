import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'http://localhost:5001/fir-11f86/us-central1/api'
});

export default instance;