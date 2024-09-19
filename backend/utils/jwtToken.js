const sendToken = (user, statusCode, res, message) => {
    const token = user.getJwtToken();
  

  
    res
      .status(statusCode).json({ success: true, token, user, message});
  };
  
  module.exports = sendToken;
  