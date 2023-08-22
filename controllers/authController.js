import userModel from "../models/userModel.js";

export const registerController = async (req, res) => {
  const { name, email, password } = req.body;
  //validate
  if (!name) {
    return res
      .status(400)
      .send({ success: false, message: "please provide name" });
  }
  if (!email) {
    return res
      .status(400)
      .send({ success: false, message: "please provide email" });
  }
  if (!password) {
    return res
      .status(400)
      .send({ success: false, message: "please provide password" });
  }

  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    return res.status(200).send({
      success: false,
      message: "Email Already Registere Please Login",
    });
  }

  const user = await userModel.create({ name, email, password });

  //token
  const token = user.createJWT();

  res.status(201).send({
    success: true,
    message: "User Created Succesfully",
    user: {
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      location: user.location,
    },
    token,
  });
};

export const loginController = async (req, res) => {
  const { email, password } = req.body;
  //validation

  if (!email || !password) {
    next("Please Provide all fields");
  }

  //find user by email
  const user = await userModel.findOne({ email }).select("+password");
  if (!user) {
    next("Invalid Username or Password");
  }

  //compare password
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    next("Invalid Username or Password");
  }
  user.password = undefined;
  const token = user.createJWT();
  res.status(200).json({
    success: true,
    message: "Login Successfully",
    user,
    token,
  });
};
