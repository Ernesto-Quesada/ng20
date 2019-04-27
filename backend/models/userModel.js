const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// const userFamily=(require('./relativeModel.js'));
// const Agency = require('./agencyModel.js')
const userSchema = new Schema(
  // 1st arg -> fields of the documents of this collection
  {
    // All users
    // name: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    //***  is better to use email as username 
    //***  than username + name + email , is too confusing  */
    email:    {type:String},
    phone:    {type:String},
    address:  {type:String},
    country:    {type:String},
    firstTimeVisit: {type:Boolean},
    ACCESS_TOKEN: {type:String},
    ITEM_ID: {type:String},
    accountSpec: {type:Object},
    agencyInUseId:     { type: Schema.Types.ObjectId,ref: 'Agency' },
    relativeSendingNow:{ type: Schema.Types.ObjectId, ref: 'Relative' },

    // role: { type: String,
    //         enum: [ 'guest', 'admin' ],
    //         default: 'guest'
    //         },
    //relative:[{ type: Schema.Types.ObjectId }],

    // Traditional registration users
    //username: { type: String },
    encryptedPassword: { type: String },

    // Login with Facebook users
    //facebookID: { type: String },

    // Login with Google users
   // googleID: { type: String }
  },

  // 2nd arg -> additional options
  {
    // Adds createdAt & updatedAt to documents
    timestamps: true
  }
);

const User = mongoose.model('User', userSchema);


module.exports = User;