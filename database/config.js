const mongoose =  require('mongoose');

const connectDB =  async () => {
    try {

        const {connection} = await mongoose.connect(process.env.DB_CONNECTION)
        /* console.log(connection); */
        const url = `${connection.host}:${connection.port}`
        console.log(`MongoDB esta conectado en ${url}`);

    }
    catch(error) {
        console.log(`error MongoDB: ${error.message}`);
    }
}

module.exports = connectDB