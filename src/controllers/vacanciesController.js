const { Vacancy } = require('smart-models-db');

exports.getAll = async (req, res, next) => {
  try {
    const vacancies = await Vacancy
      .find()
      .populate({ path: 'skills' })
      .lean();

    return res.status(200).json({ data: vacancies });
  } catch (e) {
    next(e);
  }
};

exports.getById = async (req, res, next) => {
  const { vacancieId } = req.params;

  try {
    const vacancy = await Vacancy
      .findById(vacancieId)
      .populate({ path: 'skills' })
      .lean()
      .exec();

    return res.status(200).json({ data: vacancy });
  } catch (e) {
    next(e);
  }
};

exports.create = async (req, res, next) => {
  const { vacancy_name } = req.body;

  const created = {
    vacancy_name
  };

  try {
    const vacancy = await Vacancy.create(created);

    return res.status(201).json({ data: vacancy });
  } catch (e) {
    next(e);
  }
};

exports.updateById = async (req, res, next) => {
  const { vacancy_name } = req.body;

  const filter = { _id: req.params.vacancieId };

  const updated = {
    $set: { vacancy_name }
  };

  const options = { new: true, runValidators: true };

  try {
    const vacancy = await Vacancy.findByIdAndUpdate(filter, updated, options);

    return res.status(200).json({ data: vacancy });
  } catch (e) {
    next(e);
  }
};

exports.deleteById = async (req, res, next) => {
  const { vacancieId } = req.params;

  try {
    await Vacancy.deleteOne({ _id: vacancieId });

    return res.status(200).json({
      message: 'vacancy was deleted.',
    });
  } catch (e) {
    next(e);
  }
};
