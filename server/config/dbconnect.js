const { default: mongoose } = require("mongoose");


const dbConnect = async () => {
  try {
    const conn = await mongoose.connect("mongodb://0.0.0.0:27017/cuahangdientu", {

    useNewUrlParser: "true",
    useUnifiedTopology: "true"
  
  })
    
    // mongoose.connect(process.env.MONGODB_URI);
    // console.log(conn);
    if (conn.connection.readyState === 1)
      console.log("DB connection is successfully");
    else console.log("DB connecting");
  } catch (error) {
    console.log("DB connection is failed");
    throw new Error(error);
  }
};

module.exports = dbConnect;
