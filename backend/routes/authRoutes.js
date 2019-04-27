const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const ensure = require('connect-ensure-login');
const jwt          =require('jsonwebtoken');

const User = require('../models/userModel.js');


const authRoutes = express.Router();
// authRoutes.get('/contact',
//     //        redirects to '/' (home page) if you ARE logged in
//   //ensure.ensureNotLoggedIn('/'),

//   (req, res, next) => {
//     res.render('contact.ejs');
//   }
// );

//===============================================
// ============= SIGNUP =========================
//===============================================
authRoutes.post('/api/signup',
  ensure.ensureNotLoggedIn('/'),
  (req, res, next) => {
    const emailInput = req.body.emailInput;
    const signupPassword = req.body.signupPassword;
    // Don't let users submit blank emails or passwords
    if (emailInput === '' || signupPassword === '') {
      res.status(400).json({ message: 'Provide username and password.' });
    return;
    }
    // Check password length, characters
    // if (signupPassword.length<=1 || signupPassword.length >=10) {
    //   res.render('auth/signUp.ejs', {
    //     errorMessage: 'Password need to have between 3 and 10 characters.'
    //   });
    //   return;
    // }
    User.findOne(
      { email: emailInput },
      { email: 1 },
      (err, foundUser) => {
        if (err) { 
          res.status(500).json({ message: 'Something went wrong.' });
          return;
        }
      // Don't let the user register if the email is taken
        if (foundUser) {
          res.status(400).json({ message: 'The username already exists.' });
          return;
        }
        //console.log('founduser',foundUser)
        // We are good to go, time to save the user.
        // Encrypt the password
        const salt = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(signupPassword, salt);
        // Create the user
        const theUser = new User({
          firstName: req.body.firstNameInput,
          lastName: req.body.lastNameInput,
          email: emailInput,
          phone: req.body.phoneInput,
          //address:,
          country:req.body.countryInput,
          encryptedPassword: hashPass
        });
        // Save it
        theUser.save((err) => {
          if (err) {
            res.status(500).json({ message: 'Something went wrong.' });
            return;
          }
          req.login(theUser, (err) => {
            if (err) {
              res.status(500).json({ message: 'Something went wrong.' });
              return;
            }          
            res.status(200).json(req.user);
          });
        });
      });
  });




//=========================
//======= LOGIN BY NICK ====
//==========================
authRoutes.post('/api/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    if (err) {
      res.status(500).json({ message: 'Something went wrong.' });
      return;
    }
    if (!theUser) {
      res.status(401).json(failureDetails);
      return;
    }
    req.login(theUser, (err) => {
      if (err) {
        res.status(500).json({ message: 'Something went wrong.' });
        return;
      }
      res.status(200).json(req.user);
    });
  })(req, res, next);
});

//=========================
//======= LOG out ====
//==========================

authRoutes.post('/api/logout', (req, res, next) => {
  // req.logout() method provided by Passport
  req.logout();

  //req.flash('success', 'You have logged out successfully.');
  res.status(200).json({ message: 'Logged out' })
});

//=========================
//======= CHeck logged in ====
//==========================
authRoutes.get('/api/loggedin', (req, res, next) => {
  if (req.isAuthenticated()) {
    //console.log('i get in here ---------')
    res.status(200).json(req.user);
    return;
  }

  res.status(401).json({ message: 'Unauthorized.' });
});





module.exports = authRoutes;