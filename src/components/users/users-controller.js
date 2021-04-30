const { User } = require('smart-models-db');

exports.getMe = async (req, res, next) => {
    // const user = await User
    //   .findById(req.user._id)
    //   .lean()
    //   .exec();
  
    // if (!user) throw new Error('User not found.');
  
    return res.status(200).json({
      data: 'Hello User.'
    });
  };