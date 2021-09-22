const getStart = async (req, res) => {
  console.log('hello');
  res.json({
    message: '🌏',
  });
};

module.exports = { getStart };
