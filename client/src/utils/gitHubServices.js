import axios from "axios";

export const getAccessTokenGithub = async (code) => {
  const { data } = await axios.get(`http://localhost:8000/api/accessToken?code=${code}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return data;
};

export const getUserDataGithub = async (accessToken) => {
  const { data } = await axios.get(`http://localhost:8000/api/userData?accessToken=${accessToken}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data;
};
