const express = require('express');
const router = express.Router();
const ensure = require('connect-ensure-login');
const multer = require('multer');
const path = require('path');
const passport = require('passport');


// require the Agency model here
const Agency = require('../models/agencyModel.js');
//requires the User model because there is a query in one 
//route that will use the User model
const User = require('../models/userModel.js');

//=========================================================
// ===   Render a LIST OF ALL AGENCIES and sends ==========
//====   the list with AgencyList variable ================
//====    to the view =====================================
router.get('/api/agencies', (req, res, next) => {
  Agency.find((err, agencyList) => {
      if (err) {
        res.status(500).json({ message: 'Sooomething went wrong.' });
        return;
      }
     //{ agencyList: agencyList});
        console.log('thelist',agencyList);
        {res.status(200).json(agencyList)}//working ok jul23
       })
    }
);
/// NEW AGENCY ONLY ADMINISTRATOR VIEW 
router.get('/agency/new', (req, res, next) => {

  res.render('agency/newAgency.ejs', {
      
    });
});

// ===================================
//======= DETAILS of AGENCY ==========
// ===================================
router.get('/api/agency/:id',(req,res,next) => { 
  // if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
  //   res.status(400)
  //      .json({ message: 'Specified id is not valid' });
  //   return;
  // }
  const agencyId=req.params.id;
  Agency.findById(agencyId,(err,theAgency) => {
    if (err) {
      res.status(500).json({ message: 'Something went wrong.' });
      return;
    }
    // res.render('agency/agencyDetails.ejs', {
    //    agency: theAgency 
    // })
    res.status(200).json(theAgency);
  });
});

//=======================================
//========= SELECT AGENCY FOR CLIENT ====
//=======================================
router.post('/api/agency/:id/select', 
            // ensure.ensureLoggedIn('/login'), not working 
            (req,res,next) => { 
                      const agencyId=req.params.id;
                      console.log('param picking up agency',agencyId)
                      // const userChanges={
                      //   agencyInUseId: agencyId
                      // };
                  User.findByIdAndUpdate( req.user._id , {agencyInUseId: agencyId }, (err,updatedUser) =>{
                        if(err){
                          next(err);
                          return;
                        }
                        res.status(200).json(updatedUser)
                    });
});
//=================================================
//====== for Queries as user types it     =========
//====== returns agency with keys pressed =========
//=================================================
router.get('/api/agency/', (req, res, next) => {
    const agencyNa = req.query.name;
    console.log('LOLOLOLO', agencyNa);
    Agency.find({nameAgency: { $regex: '.*' + agencyNa + '.*' }}, (err, theAgency) => {
      if (err) {
        res.json(err);
        return;
      }
    res.status(200).json(theAgency);
    });
});


// .        |
// >>>>>>For ADMIN ONLY and not for presentation of project3
router.post('/agency/:id', (req, res, next) => {    //----------
  const agencyId = req.params.id;
  
  const agencyChanges = {
    nameAgency: req.body.agencyName,
    email:req.body.email,
    contactPhone: req.body.contactPhone
    
    
    // author: req.body.author,
    
    // imageUrl: req.body.imageUrl,
  };
  Agency.findByIdAndUpdate( agencyId,agencyChanges, (err,theAgency) =>{
    if(err){
      next(err);
      return;
    }
    res.redirect('/Agency');
  });
});

// >>>>>>For ADMIN ONLY and not for presentation of project3
router.get('/agency/:id/edit',(req,res,next) => {  //-----------
    const AgencyId = req.params.id;                 //           |
    Agency.findById(AgencyId,(err,theAgency) => {     //           |
     if (err) {
      res.status(500).json({ message: 'Something went wrong.' });
      return;
    }
    res.render('agency/agencyEdit.ejs', {
      Agency:theAgency
    });
    }); 
});    

//======== Post the form and save the data   =======
//======== in the data base   =====================
// ONLY FOR ADMIN not for USERS
router.post('/agency',
  ensure.ensureLoggedIn('/login'),

    (req, res, next) => {      
        const nameAgency = req.body.nameAgencyInput;
        const emailAgency = req.body.emailAgencyInput;
        address: req.body.description;
        country: req.body.country
        //imageUrl: `/images/${req.file.filename}`
      console.log('NAME AGENCY',nameAgency);
      console.log('email AGENCY',emailAgency);

        if (emailAgency == '' || nameAgency == '') {
            res.render('agency/newAgency.ejs', {
                errorMessage: 'Please provide both email and password.'
            });
            return;
        //       {
        //     res.status(400).json({ message: 'Provide username and password.' });
        //     return;
        //   }
            }
    Agency.findOne(
        // 1st arg -> criteria of the findOne (which documents)
      { email: emailAgency },
      // 2nd arg -> projection (which fields)
      { email: 1 },
      // 3rd arg -> callback
      (err, foundAgency) =>{
            if (err) {
                res.status(500).json({ message: 'Something went wrong.' });
                return;
            }
            console.log('found',foundAgency)
            // Don't let the user register if the email is taken
            if (foundAgency) {
            res.render('agency/newAgency.ejs', {
              errorMessage: 'This agency is already in our system '
            });
            return;
            // res.status(400).json({ message: 'The username already exists.' });
            // return;
            }
        // Create the Agency
        const theAgency = new Agency({
          nameAgency: req.body.nameAgencyInput,
          email: req.body.emailAgencyInput,
          contactPhone: req.body.phoneInput,
          //address:,
        });
         // Save it
        theAgency.save((err) => {
          if (err) {
                res.render('agency/newAgency.ejs', {
                errors:newAgency.errors
                });
            return
            // next(err);
            // return;
            //res.status(500).json({ message: 'Something went wrong.' });
            //return;
          }
        //   req.login(theUser, (err) => {
        //     if (err) {
        //       res.status(500).json({ message: 'Something went wrong.' });
        //       return;
        //     }
            
        //     console.log('???????',req.user._id);
        //     const usertoken = req.user._id
        //     const token = jwt.sign(usertoken, '123');
        //     console.log(token);
        //     //res.json(token)
        //     res.status(200).json([(req.user), (token)]);
        //   });


        // redirect to the list of Agency if it saves
        return res.redirect('/agencies');
        }); 
        // .-------Save-----.
     });
});

//=== Get  and render  the view for   ================
//======== the form of new Agencys   =====================
//>>>>>>for ADMIN ONLY 


// ----delete agencies
//>>>>>>>for ADMIN ONLY
router.delete('/agency/:id/', 
  //ensure.ensureLoggedIn('/login'),
  (req, res, next) => {
      const agencyId = req.params.id;
      Agency.findByIdAndRemove(agencyId,(err, theAgency) =>{
        if(err){
          next(err);
          return;
        }
        {res.status(200).json(theAgency)}
      });
  });




module.exports = router;
