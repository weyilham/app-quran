import axios from "axios";

export const getDataSurat = (callback) => {
  const url = "https://equran.id/api/v2/surat";
  axios
    .get(url)
    .then((response) => {
      return callback(response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

// export const getDetailSurat = (nomor, callback) => {
//   const url = `https://equran.id/api/v2/surat/${nomor}`;
//   axios
//     .get(url)
//     .then((res) => callback(res.data))
//     .catch((err) => console.log(err));
// };

export const getDetailSurat = async (nomor) => {
  const url = `https://equran.id/api/v2/surat/${nomor}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};
