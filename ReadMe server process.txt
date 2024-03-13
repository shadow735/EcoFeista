
To run the code download the Docker desktop and run the docker 

in the root directory run this 2 command in the terminal





1st Command :       docker build -t my-node-app .


2nd Command :      docker run -p 8000:8000 my-node-app















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
