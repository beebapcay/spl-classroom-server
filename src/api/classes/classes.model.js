const Class = require('../../models/Class');

const errHandler = (err) => {
  throw err;
};

exports.getClasses = async () => {
  const classes = await Class.findAll().catch(errHandler);
  return classes;
};

exports.createClass = async (data) => {
  const classCreated = await Class.create(data).catch(errHandler);
  console.log(classCreated);
  return classCreated;
};
