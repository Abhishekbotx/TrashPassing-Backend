const mongoose=require('mongoose');

const connect = async () => {
    try {
        await mongoose.connect('mongodb+srv://abhishekbotx:C7WFnaIVtbkOoICF@abhishek.wcvut4u.mongodb.net/TrashPassing');
        console.log('db connection successful');
    } catch (error) {
        console.error('Unable to connect with DB:', error);
    }
};

module.exports={connect}