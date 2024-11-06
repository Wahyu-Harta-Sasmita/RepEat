import axios from 'axios';

const API_URL = 'https://api.trplweb.wefgis-sync.com/api/foods';

export const getFoods = (callback) => {
  axios
  .get(API_URL)
  .then((response) => {
    callback(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
}

export const addFoods = (data) => {
  axios
    .post(API_URL, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => {
      console.log("Data berhasil ditambahkan", response);
    })
    .catch((error) => {
      console.log("Gagal menambahkan data", error);
    });
};


export const deleteFood = (id, callback) => {
  axios
    .delete(`${API_URL}/${id}`)
    .then((response) => {
      console.log("Data berhasil dihapus", response);
      callback();
    })
    .catch((error) => {
      console.error("Gagal menghapus data", error);
    });
};
