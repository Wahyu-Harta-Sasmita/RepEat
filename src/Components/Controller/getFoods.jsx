import axios from "axios";

export const getFoods = (callback) => {
    axios
    .get("https://api.trplweb.wefgis-sync.com/api/foods")
    .then((res) => {
        callback(res.data)
    })
    .catch((err) => {
        console.log(err);
    });
};

export const deleteFood = (id, callback) => {
    axios
      .delete("https://api.trplweb.wefgis-sync.com/api/foods/${id}")
      .then((response) => {
        console.log("Data berhasil dihapus", response);
        callback();
      })
      .catch((error) => {
        console.error("Gagal menghapus data", error);
      });
  };