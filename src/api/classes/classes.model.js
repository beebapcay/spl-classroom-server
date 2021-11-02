const Class = require('../../models/Class');

exports.getClasses = async () => {
  try {
    const classes = await Class.findAll();
    return classes;
  } catch (error) {
    throw error;
  }
};
