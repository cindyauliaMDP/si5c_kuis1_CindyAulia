function cekApiKey(req, res, next) {
  const apiKey = req.headers['x-api-key'];
  const expectedApiKey = `Bearer ${process.env.API_KEY}`;

  if (apiKey !== expectedApiKey) {
    return res.status(401).json({
      status: 'error',
      message: 'API key tidak valid'
    });
  }

  next();
}

module.exports = cekApiKey;