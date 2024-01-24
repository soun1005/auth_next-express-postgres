const db = require('../../models/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    // Check if the email exists
    const userExists = await db.User.findOne({
      where: { email },
    });
    if (userExists) {
      return res
        .status(400)
        .send('Email is already associated with an account');
    }

    await db.User.create({
      firstName,
      lastName,
      email,
      password: await bcrypt.hash(password, 15),
    });
    return res.status(200).send('Registration successful');
  } catch (err) {
    console.log(err.message);
    return res.status(500).send('Error in registering user');
  }
};

const signInUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await db.User.findOne({
      where: { email },
    });
    if (!user) {
      console.log('Email not found');
      return res.status(404).json('Email not found');
    }

    // Verify password
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
      console.log('invalid pw');
      return res.status(404).json('Incorrect email and password combination');
    }

    // Authenticate user with jwt
    const token = jwt.sign({ id: user.id }, process.env.SECRET, {
      expiresIn: process.env.JWT_REFRESH_EXPIRATION,
    });

    res.status(200).send({
      id: user.id,
      email: user.email,
      accessToken: token,
    });

    console.log('loggedin');
  } catch (err) {
    console.log(err.message);
    return res.status(500).send('Sign in error');
  }
};

module.exports = {
  registerUser,
  signInUser,
};
