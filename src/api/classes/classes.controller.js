const service = require('./classes.service');

exports.getClasses = async (req, res) => {
  const classes = await service.getClasses();
  if (classes) {
    res.status(200).json(classes);
  } else {
    res.status(404).json({ message: 'No classes found' });
  }
};

exports.createClass = async (req, res) => {
  const newClass = await service.createClass(req.body);
  if (newClass) {
    res.status(201).json(newClass);
  } else {
    res.status(400).json({ message: 'Class not created' });
  }
};
