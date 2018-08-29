module.exports = app => {

  return {
    findAll: (params, callback) => {
      return callback([
        { title: 'Book1' },
        { title: 'Book2' }
      ]);
    }
  }

};