const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");
const Teacher = require("../../models/User");

//@route POST api/users/register
//@desc Register a user
//@access Public
router.post("/register", (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);

  // check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    }

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });

    // Hash password before saving into database
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then(user => res.json(user))
          .catch(err => console.log(err));
      });
    });
  });
});

//@route POST api/users/login
//@dec Login user and retrun JWToken
//@access Public
router.post("/login", (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailNotFound: "Email not found" });
    }

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };

        //Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordIncorrect: "Password incorrect" });
      }
    });
  });
});

// @route GET api/users/current_user
//@desc Return current user
// @access Private
router.get(
  "/current_user",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

//@route POST api/users/teacher
//@desc Register a teacher
//@access Private
router.post(
  "/add_teacher",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body);

    // check validation
    // if (!isValid) {
    //   return res.status(400).json(errors);
    // }

    Teacher.findOne({ user: req.body.email }).then(user => {
      if (email) {
        return res.status(400).json({ email: "Teacher already exists" });
      }
      const newTeacher = new Teacher({
        name: req.body.name,
        email: req.body.email,
        teacherIdNo: req.body.teacherIdNo
      });
      user.teacher.unshift(newTeacher);
      user.save().then(user => res.json(user));
    });
  }
);

module.exports = router;
