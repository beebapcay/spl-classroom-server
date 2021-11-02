const model = require('./classes.model');

exports.getClasses = async () => {
  const classes = await model.getClasses();
  return classes;
};
