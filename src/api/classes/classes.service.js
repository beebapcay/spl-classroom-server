const model = require('./classes.model');

exports.getClasses = async () => {
  const classes = await model.getClasses();
  return classes;
};

exports.createClass = async (data) => {
  const newClass = await model.createClass(data);
  return newClass;
};
