//
//Required components
//
const passport = require('passport');
const express = require('express');
const routeforPlaid = express.Router();
const ensure = require('connect-ensure-login');
const multer = require('multer');
const path = require('path');
const plaid = require('plaid');
var envvar = require('envvar');

const User = require('../models/userModel.js');



var APP_PORT = envvar.number('APP_PORT', 8000);
var PLAID_CLIENT_ID = envvar.string('PLAID_CLIENT_ID',process.env.PLAID_CLIENT_ID);
var PLAID_SECRET = envvar.string('PLAID_SECRET',process.env.PLAID_SECRET);
var PLAID_PUBLIC_KEY = envvar.string('PLAID_PUBLIC_KEY',process.env.PLAID_PUBLIC_KEY);
var PLAID_ENV = envvar.string('PLAID_ENV', 'sandbox');

// We store the access_token in memory - in production, store it in a secure
// persistent data store
var ACCESS_TOKEN = null;
var PUBLIC_TOKEN = null;
var ITEM_ID = null;

// Initialize the Plaid client
var client = new plaid.Client(
  PLAID_CLIENT_ID,
  PLAID_SECRET,
  PLAID_PUBLIC_KEY,
  plaid.environments[PLAID_ENV]
);
  // console.log('USER REQUEST', req.user)


//
//Home controller
//
routeforPlaid.get('/accountPlaid', (req, res, next) => {
  // res.render('accountPlaid/home',{
  //   PLAID_PUBLIC_KEY: PLAID_PUBLIC_KEY,
  //   PLAID_ENV: PLAID_ENV,
  // });
  //console.log('USER REQUEST', req.user)
  {res.status(200).json({
    PLAID_PUBLIC_KEY: PLAID_PUBLIC_KEY,
    PLAID_ENV: PLAID_ENV,
  })}
 
});

//
// Get access token
//
routeforPlaid.post('/accountPlaid/get_access_token', function(request, response, next) {
      PUBLIC_TOKEN = request.body.publicToken;
      console.log('PUblic', PUBLIC_TOKEN);
      client.exchangePublicToken(PUBLIC_TOKEN, function(error, tokenResponse) {
          if (error != null) {
            var msg = 'Could not exchange public_token!';
            console.log(msg + '\n' + error);
            return response.json({
              error: msg
            });
            }
          ACCESS_TOKEN = tokenResponse.access_token;
          ITEM_ID = tokenResponse.item_id;
          console.log('Access Token: ' + ACCESS_TOKEN);
          console.log('Item ID: ' + ITEM_ID);
          // response.json({
          //   'error': false
          User.findByIdAndUpdate( request.user._id, 

            { ACCESS_TOKEN: ACCESS_TOKEN ,
              ITEM_ID: ITEM_ID },
               (err, savedTokens) => {
                console.log('=============',savedTokens);

                 console.log('=============',savedTokens);
                 
                  if (err) {
                            response.status(500).json({ message: 'Tokens update went to 💩.' });
                            return;
                           }
                  response.json({'error': false })
          });
      });
    
});


routeforPlaid.post('/accountPlaid/accounts/get', function(request, response, next) {

  client.getAccounts(ACCESS_TOKEN, (error, result) => {
    // Handle err
    // Each account has up-to-date balance information associated with it
      if (error != null) {
        var msg = 'Unable to pull accounts from the Plaid API.';
        console.log(msg + '\n' + error);
        return response.json({
          error: msg
        });
      }
     // console.log('RESULTS FORM PAID', result);
      var filteredAccounts = result.accounts.filter((value)=>{
         console.log('valu', value);
         //returns only checking acc
          return value.subtype=="checking";
      })
      console.log('FILTERED ACCOUNTS', filteredAccounts)
    User.findByIdAndUpdate( request.user._id, 
      {accountSpec: filteredAccounts},
    (err,accountSpecsSaved) =>{
      if (err) {response.status(500)
                .json({ message: 'Tokens update went to 💩.' });
                return;
                }
          response.json({
              error: false,
              results: filteredAccounts,
          });

    })
  });
  return
});


module.exports = routeforPlaid;