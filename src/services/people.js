export default (client) => ({
  getPeople () {
    return client.get('people/')
      .then(({ data }) => {
        return data
      })
  },
  getNextTen (page) {
    return client.get(`people/?page${page}`)
      .then(({ data }) => {
        return data
      })
  }
})
