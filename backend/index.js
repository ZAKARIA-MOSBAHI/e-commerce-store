const express = require("express");
const Joi = require("joi");
const cors = require("cors");
const db = require("./database");
const app = express();
const bcrypt = require("bcrypt");
const PORT = 3500;
const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});
const signUpSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password")) // Correct reference to 'password'
    .required()
    .messages({
      "any.only": "Confirm password must match password", // Custom error message for mismatch
    }),
});
//This middleware parses incoming requests with JSON payloads and makes the data available on req.body.
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

app.post("/login", (req, res) => {
  // Validate the request body against the Joi schema
  const { error } = loginSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      status: "error",
      message: error.details[0].message,
    });
  }

  // Query the database to check if the user exists with the provided credentials
  db.query(
    "SELECT * FROM users WHERE email = ?",
    [req.body.email],
    (err, results) => {
      if (err) {
        return res.status(500).json({
          status: "error",
          message: "Database error occurred",
        });
      }

      // If no user is found with that email
      if (results.length === 0) {
        return res.status(404).json({
          status: "error",
          message: "User not found",
        });
      }

      // Compare the entered password with the hashed password from the database
      const user = results[0];
      bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
        if (err) {
          return res.status(500).json({
            status: "error",
            message: "Password comparison failed",
          });
        }

        if (!isMatch) {
          return res.status(401).json({
            status: "error",
            message: "Invalid password",
          });
        }

        // If the password matches, send success response
        return res.json({
          status: "success",
          message: "Login successful",
          user: {
            id: user.id,
            email: user.email,
            // Include any other user details you want
          },
        });
      });
    }
  );
});

app.post("/signup", (req, res) => {
  // Validate the request body against the Joi schema
  const { error } = signUpSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      status: "error",
      message: error.details[0].message,
    });
  }

  // Hash the password before storing it
  bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({
        status: "error",
        message: "Password hashing failed",
      });
    }

    // Check if the user already exists in the database
    db.query(
      "SELECT * FROM users WHERE email = ?",
      [req.body.email],
      (err, results) => {
        if (err) {
          return res.status(500).json({
            status: "error",
            message: "Database error occurred while checking user",
          });
        }

        if (results.length > 0) {
          return res.status(400).json({
            status: "error",
            message: "User already exists",
          });
        }

        // If user does not exist, insert the new user
        db.query(
          "INSERT INTO users (email, password) VALUES (?, ?);",
          [req.body.email, hashedPassword],
          (err) => {
            if (err) {
              return res.status(500).json({
                status: "error",
                message: "Database error occurred while creating user",
              });
            }

            // Successful insertion, send response with the user info
            return res.json({
              status: "success",
              message: "Signup successful",
              user: {
                email: req.body.email, // Include the email or other info you want
              },
            });
          }
        );
      }
    );
  });
});

app.listen(PORT, () => {
  console.log("server is running on port  " + PORT);
});
