Clone the Project 


1) In the root directory terminal run this command 

command  :          npm install 

command : npm start

In the server directory ternimal run this command  (open new ternimal)

command :         npm install

command : nodemon server.js 

(if there is error of nodemon then run this command : npm install nodemon ) and again run nodemon server.js 











To connect your Mongo DB database then go to the server.js file in the server directory


at  Add your Mongodb code  put your mongo db code

// Connect to the database
async function connectToDatabase() {
  try {
    await mongoose.connect('# Add your Mongodb code , {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Increase server selection timeout if needed
      socketTimeoutMS: 45000, // Increase socket timeout if needed
    });
    console.log('Connected to the database');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
}
