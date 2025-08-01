import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.pexels.com/videos",
  headers: {
    Authorization: "ubz0ErF0RFUedbmmQx4Y6kqBnAWZtLHUd85K0STUKWtivn3BqcmRFwfV",
    "Content-Type": "application/json",
  },
});

export const apiService = async (method, url, body) => {
  switch (method) {
    case "GET":
      let res = await instance.get(url);
      return res.data;
  }
};

export const popularVideosAPI = async () => {
  let res = await instance.get("/popular");
  return res;
};

export const getParticularVideo = async (id) => {
  let res = await instance.get(`/videos/${id}`);
  return res;
};

export const searchVideos = async (query) => {
  let res = await instance.get(`/search?query=${query}`);
  return res;
};
