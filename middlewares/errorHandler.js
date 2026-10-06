function errorHandler(err, req, res, next) {
  console.error(err);

  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({
      status: 'error',
      message: 'Format JSON tidak valid'
    });
  }

  res.status(500).json({
    status: 'error',
    message: 'Terjadi kesalahan pada server'
  });
}

module.exports = errorHandler;