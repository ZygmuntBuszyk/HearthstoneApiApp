class Set {
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
}

export default Set;
