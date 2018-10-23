import axios from 'axios';
const url = 'https://omgvamp-hearthstone-v1.p.mashape.com/';
class ApiHandle {
  static getCard(cardId) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`${url}cards/${cardId}`, {
          headers: {
            'Content-Type': 'application/json',
            'X-Mashape-Key':
              'hKmSaZwCRPmshF29q1crCzsbsxhAp1moa8Yjsn53S1NtYCURsw'
          }
        });
        const data = res.data;
        resolve(data.map(card => card));
        console.log(res.data);
      } catch (err) {
        reject(err);
      }
    });
  }
  // Gets every cards there is
  static getCards() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`${url}cards`, {
          headers: {
            'Content-Type': 'application/json',
            'X-Mashape-Key':
              'hKmSaZwCRPmshF29q1crCzsbsxhAp1moa8Yjsn53S1NtYCURsw'
          }
        });
        const data = res.data;
        resolve(data);
        // resolve(data.map(card => card));
      } catch (err) {
        reject(err);
      }
    });
  }
}

export default ApiHandle;
// return (
//   axios
//     .get(`${url}cards/ysera`, {
//       headers: {
//         'Content-Type': 'application/json',
//         'X-Mashape-Key':
//           'hKmSaZwCRPmshF29q1crCzsbsxhAp1moa8Yjsn53S1NtYCURsw'
//       }
//     })
//     //  function(response)
//     .then(response => {
//       const data = response.data;
//       console.log(data);
//       return this.data.map(card => card);
//     })
//     .catch(error => {
//       console.log(error);
//     })
// )
