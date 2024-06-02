const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((error) => {
    res.status(500).json({ success: false, message: error.message });
  });
};

export default asyncHandler;
