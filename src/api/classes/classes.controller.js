const service = require('./classes.service');

exports.getClasses = async (req, res) => {
  const classes = await service.getClasses();
  if (classes) {
    res.status(200).json(classes);
  } else {
    res.status(404).json({ message: 'No classes found' });
  }
};
