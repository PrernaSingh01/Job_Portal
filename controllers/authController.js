export const registerController = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: "Error In Register Controller",
      success: false,
      error,
    });
  }
};
