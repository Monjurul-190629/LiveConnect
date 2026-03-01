import User from "../models/User.js";

export const signUp = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    if (!email || !password || !firstName || !lastName) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password should be at least 6 characters" });
    }

    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValidation.test(email)) {
      return res.status(400).json({ message: "Invalidate email format" });
    }

    // check for existing email
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res
        .status(400)
        .json({ message: "Email already exists, please use a different one" });
    }

    // for avatar image
    const fullName = `${firstName} ${lastName}`;

    const avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(
      fullName,
    )}&size=300&background=random&color=ffffff&rounded=true`;

    // create user
    const newUser = new User.create({
      email,
      firstName,
      lastName,
      password,
      profilePic: avatar
    })
    
  } catch (error) {
    console.log("Error in signup", error);
  }
};

export const login = (req, res) => {
  res.send("Login successful endpoint");
};

export const logOut = (req, res) => {
  res.send("log out successful");
};
