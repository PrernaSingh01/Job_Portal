import userModel from "../models/userModel.js";

export const updateUserController = async (req, res, next) => {
  const { name, email, lastName, password, location } = req.body;
  if (!name || !email || !lastName || !password) {
    return res.status(400).json({ message: "Please provide all fields" });
  }

  try {
    const user = await userModel.findOne({ _id: req.user.userId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.name = name;
    user.lastName = lastName;
    user.email = email;
    user.location = location;

    await user.save();
    const token = user.createJWT();
    return res.status(200).json({
      user,
      token,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
