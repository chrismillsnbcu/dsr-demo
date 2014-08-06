/**
 * This script automatically creates a default Admin user when an
 * empty database is used for the first time. You can use this
 * technique to insert data into any List you have defined.
 */

exports.create = {
	User: [
    {
      company: "NBC Universal",
      createdAt: new Date("2014-07-24T00:14:00Z"),
      createdBy: "53d027957b30df2a1a314ee6",
      groupId: "53d027957b30df2a1a314ee6",
      email: "user@keystonejs.com",
      isAdmin: true,
      level: 3,
      name: {
        last: "User",
        first: "Admin"
      },
      password: "admin",
      phone: "555-555-5555",
      rooms: null
    }	]

};


/**
 * The following is the older version of this update script, it is
 * left here for reference as an example of how more complex updates
 * can be structured.
 */
/*
var keystone = require('keystone'),
	async = require('async'),
	User = keystone.list('User');

var admins = [
	{ email: 'user@keystonejs.com', password: 'admin', name: { first: 'Admin', last: 'User' } }
];

function createAdmin(admin, done) {
	
	var newAdmin = new User.model(admin);
	
	newAdmin.isAdmin = true;
	newAdmin.save(function(err) {
		if (err) {
			console.error("Error adding admin " + admin.email + " to the database:");
			console.error(err);
		} else {
			console.log("Added admin " + admin.email + " to the database.");
		}
		done(err);
	});
	
}

exports = module.exports = function(done) {
	async.forEach(admins, createAdmin, done);
};
*/
