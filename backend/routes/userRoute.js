const express = require('express');
const ensure = require('connect-ensure-login');
const bcrypt = require('bcrypt');

const User = require('../models/userModel.js');
//const Family = require('../models/userFamily.js');
const Relative = require('../models/relativeModel.js');


// ------Profile start
const routeforUser = express.Router();
// routeforUser.get('/user/:id', (req, res, next) => {

routeforUser.get('/api/profile',  ensure.ensureLoggedIn('/login'),(req, res, next) => {
      User.findOne(req.user._id)
      .populate('agencyInUseId')
      .exec((err,completeUSerProfile) =>{
        if (err) {
                next(err);
                return;
        }
        {
           console.log('/////',completeUSerProfile);
          res.json({theUserProfile: completeUSerProfile});
          // res.render('user/userProfile.ejs',{
          //   user:req.user,
          //   relativeList: theRelativeList

          // });
        }
      }
    )///find
    }
);
// --------Profile end

// relatives with user  ok with postman do not touch
routeforUser.get('/api/relatives',
   ensure.ensureLoggedIn('/login'),
    (req, res, next) => {
      Relative.find({relativeOfUser: req.user._id } ,(err,theRelativeList) =>{
        if (err) {
          next(err);
          return;
        }
        {
          res.status(200).json(theRelativeList);
        }
      })
    }
);
  // view only to develop after is done delete
// routeforUser.get('/relative/new', (req, res, next) => {
//   res.render('user/addFamily.ejs', {
//   });
//   console.log('<><><><>',req.user._id)
// });

//-------ADD a RELATIVE----- ok +- on sund 17

routeforUser.post('/api/relative/new',
 ensure.ensureLoggedIn('/login'), 
 (req, res, next) => {
      //---receive all inputs from the form ----
      console.log('<><><><REQ>BODY', req.body)

      const nameR = req.body.relativeName;
      const firstApellR = req.body.firstApell;
      const secondApellR = req.body.secondApell;
      const cIdentidadR = req.body.cIdentidad;
      //console.log('<><><><CI', cIdentidadR);

      const phoneR = req.body.phoneRelative;
      const addressR = req.body.addressRelative;
      const parentescoR = req.body.parentesco;
      //       emailR: req.body.emailRelative,
      //       countryR:req.body.country,

    // Don't let users submit blank relatives info-----poner esto abajo|| addressR === '' || parentescoR === ''
      if (nameR === '' || firstApellR === '' || secondApellR === '' ) {
        res.status(400).json({message: 'provide all requiered fields' });
              return;
      }
      

      
      // Relative.findOne(
      //       // 1st arg -> criteria of the findOne (which documents)
      //       { cIdentidad: cIdentidadR , relativeOfUser: req.user._id},
            
      //       // 3rd arg -> callback
      //       (err, foundRelative) => {
      //         if (err) { 
      //           res.status(500).json({ message: 'Something went wrong.' });
      //           return;
      //         }
      //       // if foundRelative don't let the user register it because is already there
      //       if (foundRelative) {
      //         res.status(400).json({message: 'member already in list' });
      //         console.log('REQ.USER in RELATIVE NEW', req.user)
      //         return;
      //       }

      Relative.findOne({ cIdentidad: cIdentidadR }, 
          (err, foundRelative) => { 
            if (err) { 
              res.status(500)
              .json( { message: 'Something went wrong.' } );
              return;
            }
        // if foundRelative check if already with user
            if (foundRelative) {
              //console.log('Found Relative',foundRelative);
              //console.log('REQ>USER>ID',req.user._id)
               foundRelative.relativeOfUser.indexOf(req.user._id)===-1 ?
               //many actions in a ternary operator go inside () and separated by ,
               (foundRelative.relativeOfUser.push(req.user._id),
               foundRelative.save((err) => {
                          if (err) {
                            res.status(500).json({ message: 'Something went wrong.' });
                            return;
                          }
                          res.status(200).json({foundRelative})
                          })
                        )
                          //console.log("empuje"))
               : res.status(200).json({foundRelative})
              // foundRelative.relativeOfUser.forEach((oneUser)=> { 
              //   console.log(oneUser,'ONE USER in relative new');
              //   if ( oneUser.equals(req.user._id) ) {
              return
            }
            //We are good to go, time to save the RElative.
            //Create the new Relative
            const theRelative = new Relative({
              name: nameR,
              firstApell:     firstApellR,
              secondApell:    secondApellR,
              relativeOfUser: req.user._id,
              cIdentidad:     cIdentidadR,
              // phone:phoneR,
              address:        addressR,
              parentesco:     parentescoR,
              //email: emailR,
              //country:countryR,
            });
           //Save it
           theRelative.save((err) => {
                if (err) {
                      res.status(500).json({ message: 'Something went wrong.' });
                      return;
                      }
                       res.status(200).json(theRelative)
                      });
      });
  });

  
//=======================================
//========= SELECT RELATIVE to SEND NOW ====
//=======================================
routeforUser.post('/api/relative/:id/select', 
            // ensure.ensureLoggedIn('/login'), not working 
            (req,res,next) => { 
                      const relativeId=req.params.id;
                      console.log('param picking up relative',relativeId)
                      
                  User.findByIdAndUpdate( req.user._id , {relativeSendingNow: relativeId }, (err,updatedUser) =>{
                        if(err){
                          next(err);
                          return;
                        }
                        console.log('\n','\n','\n', 'UPDATED USER FROM API', updatedUser)
                        res.status(200).json(updatedUser)
                    });
});











routeforUser.get('/api/useramount/:familyid',(req,res,next)=>{
//                              |
const myFamilyId =req.params.familyid;
Relative.findById(myFamilyId, (err, theRelative) =>{
if (err){
    next(err);
    return;
}
    //console.log('therelative',theRelative);
    //console.log('reuser',req.user);
    //console.log('myfamily',req.user.family)
res.render('user/amount.ejs',{
  //passing family to the view
    theFamily: theRelative
        });
    });
});

// <form method="post" action="/profile/edit">
routeforUser.post('/profile/edit',
  ensure.ensureLoggedIn('/login'),
  (req, res, next) => {
    const editedName = req.body.firstNameInput;
    const editedLastName = req.body.lastNameInput;
    //const currentEmail = req.user.email
    const editedPhone     = req.body.phoneInput;
    const currentPassword = req.body.currentPassword;
    const newPassword     = req.body.editedPassword;
    const editedCountry   = req.body.countryInput;

        // Don't let users submit blank emails or passwords
    if (editedName == '' || editedLastName == '') {
      res.status(400).json({ message: 'Provide username and password.' });
    return;
    }

    // if (profileName === '' || editedName === '' || currentPassword==='' || newPassword ==='') {
    //   res.render('user/editUserProfile.ejs', {
    //     errorMessage: 'Please all info is required.'
    //   });
    //   return;
    // }
    // if (newPassword.length<=6 || newPassword.length >=12) {
    //   res.render('user/editUserProfile.ejs', {
    //     errorMessage: 'Password need to have between 6 and 12 characters.'
    //   });
    //   return;
    // }

    User.findOne(
      { email: req.user.email },
      { firstName: 1 },
      (err, foundUser) => {
        if (err) {
          next(err);
          return;
        }

        // // if there's a user with the username and it's not you
        // if (foundUser && !foundUser._id.equals(req.user._id)) {
        //   res.render('user/edit-profile-view.ejs', {
        //     errorMessage: 'Username already taken.'
        //   });
        //   return;
        // }


        // add updates from form
       req.user.firstName = editedName;
       req.user.lastName = editedLastName;
       req.user.phone = editedPhone;
       req.user.country = editedCountry;

        // if both passwords are filled and the current password is correct
        if (currentPassword && newPassword
            && bcrypt.compareSync(currentPassword, req.user.encryptedPassword)) {
          // add new encryptedPassword to the updates
          const salt = bcrypt.genSaltSync(10);
          const hashPass = bcrypt.hashSync(newPassword, salt);
          // profileChanges.encryptedPassword = hashPass;
          req.user.encryptedPassword = hashPass;
        }

        // save updates!
        req.user.save((err) => {
          if (err) { 
            res.status(500).json({ message: 'Something went wrong.' });
            return;
          }
          req.login(foundUser, (err) => {
            if (err) {
              res.status(500).json({ message: 'Something went wrong.' });
              return;
            }
            res.status(200).json(req.user);
          });
        });
      }
    );
  }
);
           
          


// Query to make people admins in MongoDB shell
// db.users.updateOne(
//   { username: 'nizar' },
//   { $set: { role: 'admin' } }
// )
// routeforUser.get('/myaccount',
//   ensure.ensureLoggedIn(),

//   (req, res, next) => {
//     Photo.find(
//       { owner: req.user._id },

//       (err, photoList) => {
//         if (err) {
//           next(err);
//           return;
//         }

//         res.render('user/myaccount.ejs', {
//           myAccountPhotoList: photoList,
//         //   successMessage: req.flash('success')
//         });
//       }
//     );
//   }
// );

// routeforUser.get('/users', (req, res, next) => {
//   // If you are logged in AND and admin LEZ DO THIS
//   if (req.user && req.user.role === 'admin') {
//     User.find((err, usersList) => {
//       if (err) {
//         next(err);
//         return;
//       }

//       res.render('user/users-list-view.ejs', {
//         users: usersList,
//         successMessage: req.flash('success')
//       });
//     });
//   }

//   // Otherwise show 404 page
//   else {
//     next();
//   }
// });


// routeforUser.post('/users/:id/admin', (req, res, next) => {
//   // If you are logged in AND and admin LEZ DO THIS
//   if (req.user && req.user.role === 'admin') {
//     User.findByIdAndUpdate(
//       req.params.id,
//       { role: 'admin' },
//       (err, theUser) => {
//         if (err) {
//           next(err);
//           return;
//         }

//         req.flash('success', `User "${theUser.name}" is now an admin. 😎`);

//         res.redirect('/users');
//       }
//     );
//     return;
//   }

//   // Otherwise show 404 page
//   else {
//     next();
//   }
// });


module.exports = routeforUser;