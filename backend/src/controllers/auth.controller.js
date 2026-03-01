export const signUp = async (req, res) => {
  const {email, password, firstName, lastName} = req.body;

  try{
    if(!email || !password || !firstName || !lastName){
      return res.status(400).json({message: "All fields are required"})
    }

    if(password.length < 6){
      return res.status(400).json({message: "Password should be at least 6 characters"})
    }

    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailValidation.test(email)){
      return res.status(400).json({message: "Invalidate email format"})
    }

  }
  catch(error){
    console.log("Error in signup", error)
  }
};

export const login = (req, res) => {
  res.send("Login successful endpoint");
};

export const logOut = (req, res) => {
  res.send("log out successful");
};
