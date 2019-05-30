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
  console.log('kkkkkkkk',req.user._id)
      User.findOne(req.user._id)
      .populate('agencyInUseId','nameAgency')
      .exec((err,completeUSerProfile) =>{
        if (err) {
                next(err);
                return;
        }
        {
           //console.log('completeUSerProfile/////',completeUSerProfile);
          res.json({theUserProfile: completeUSerProfile});
        }
        })///find
});
// --------Profile end



routeforUser.get('/api/allUsers',
       (req, res, next) =>{
          User.find((err, allUserList ) =>{
            const relArr = Array.from(allUserList);
            console.log('ALlUSER',relArr)
  
            if (err) {
              next(err);
              return;
            }
            {
              res.status(200).json(relArr);
            }
          })
})

          
          // if (theRel.relativeOfUser.indexOf(req.user.id) > -1) {
          //   let aa = theRel.relativeOfUser.indexOf(req.user.id)
          //   theRel.relativeOfUser.splice( aa, 1)
          //   console.log('ppppppp',theRel)
          //   {res.status(200).json(theRel)}
  
          // }
  

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
    {
      res.status(200).json(theRelative);
    }
//res.render('user/amount.ejs',{
  //passing family to the view
    //theFamily: theRelative
        //});
    });
});

//=======================================
//=========EDIT PROFILE ===============
//=======================================
routeforUser.post('/api/profile/edit',
  ensure.ensureLoggedIn('/login'),
  (req, res, next) => {
    console.log ('REQBODY',req.body)
    const editedName = req.body.firstNameEdit;
    const editedLastName = req.body.lastNameEdit;
    //const currentEmail = req.user.email
    const editedPhone     = req.body.phoneEdit;

    const currentPassword = req.body.currentPassword;
    const newPassword     = req.body.editedPassword;
    const editedCountry   = req.body.countryEdit;

        // Don't let users submit blank emails or passwords
 
    if (editedName == '' || editedLastName == '' || editedName == undefined ) {
      res.status(400).json({ message: 'Provide username and password.' });
    return;
    }

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