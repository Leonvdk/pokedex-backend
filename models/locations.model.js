const connection = require("../config");

const Location = {};

//! Rating is missing
Location.getAll = (callback) => {
  console.log(location);
  connection.query("SELECT Locations.id, Locations.name, Locations.capacity, Image.image_url, Schedule.* FROM Locations JOIN Location_Images ON Location_Images.location_id = Locations.id JOIN Image ON Image.id = Location_Images.image_id JOIN  Schedule ON Schedule.location_id = Locations.id;",
  (err, results) => {
    console.log(results)
    callback(err, results);
  });
};

// Location.postInfo = (callback, location) => {
//   // const {name, address, description, capacity, wifi, wifiPassword, phoneNumber, website, latitude, longitude} = location;
//   console.log(location);
//   connection.query("INSERT INTO locations SET ? ;",
//   [location],
//   (err, results) => {
//     console.log(results)
//     callback(err, results);
//   });
// };

//! Rating is missing
Location.getById = (callback) => {
  const { id } = req.params;
  const sql = ("SELECT Locations.*, Image.image_url, ExclusivePerks.*, ImportantInfo.*, Amenities.*, AmenitiesDrinks.*, Schedule.* FROM Locations JOIN Location_Images ON Location_Images.location_id = Locations.id JOIN Image ON Image.id = Location_Images.image_id JOIN ExclusivePerks ON ExclusivePerks.location_id = Locations.id JOIN ImportantInfo ON ImportantInfo.location_id = Locations.id JOIN Location_Amenities ON Location_Amenities.location_id = Locations.id JOIN Amenities ON Amenities.id = Location_Amenities.Amenities_id JOIN Location_AmenitiesDrinks ON Location_AmenitiesDrinks.location_id = Locations.id JOIN AmenitiesDrinks ON AmenitiesDrinks.id = Location_AmenitiesDrinks.AmenitiesDrinks_id JOIN  Schedule ON Schedule.location_id = Locations.id WHERE Locations.id = ? ;")
  connection.query(sql, [id], (err, results) => {
    callback(err, results)
  })
}

module.exports = Location;