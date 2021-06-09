const { Position } = require('smart-models-db');

exports.getAll = async (req, res, next) => {
  try {
    const positions = await Position
      .find()
      .populate({ path: 'skills' })
      .lean();

    return res.status(200).json({ data: positions });
  } catch (e) {
    next(e);
  }
};

exports.getById = async (req, res, next) => {
  const { positionId } = req.params;
  // console.log('positionId: ', positionId);

  try {
    const position = await Position
      .findById(positionId)
      .populate({ path: 'skills' })
      .lean()
      .exec();

    return res.status(200).json({ data: position });
  } catch (e) {
    next(e);
  }
};

exports.create = async (req, res, next) => {
  const { position_name } = req.body;

  const created = {
    position_name
  };

  try {
    const position = await Position.create(created);

    return res.status(201).json({ data: position });
  } catch (e) {
    next(e);
  }
};

exports.updateById = async (req, res, next) => {
  const { position_name } = req.body;

  const filter = { _id: req.params.positionId };

  const updated = {
    $set: { position_name }
  };

  const options = { new: true, runValidators: true };

  try {
    const position = await Position.findByIdAndUpdate(filter, updated, options);

    return res.status(200).json({ data: position });
  } catch (e) {
    next(e);
  }
};

exports.deleteById = async (req, res, next) => {
  const { positionId } = req.params;

  try {
    await Position.deleteOne({ _id: positionId });

    return res.status(200).json({
      message: 'Position was deleted.',
    });
  } catch (e) {
    next(e);
  }
};
