module.exports = app => {

  app.set('port', process.env.PORT || 3000);
  app.set('json spaces', 4);

};