const mongoose = require("mongoose");

const connectBazu = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  });

  console.log("Baza podataka spojena");
};
module.exports = connectBazu;
