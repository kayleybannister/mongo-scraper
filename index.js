//USE THE BELOW TO CONNECT MONGO DB TO MONGOOSE
//This was provided in the HW instructions
// If deployed, use the deployed database. 
//Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);