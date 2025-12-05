const {sendErrorResponse,sendResponse}=require('../utils/response')

exports.getUser = (req, res, next) => {
   try {
    const user = req.params.id;   // simulating that no user was found
    console.log(user)
    if (user>10) {
     let error=new Error('User not found');
     error.statusCode=404;
     throw error
  }
    return sendResponse(res,user,200);
}
catch(error){
          return sendErrorResponse(res,error);
}
    //res.json(user);
};

exports.createUser = (req, res, next) => {
    const { name, email } = req.body;

    if (!name || !email) {
     return sendErrorResponse(res, { message: 'Name and email are required',statusCode:400});
    }

    // Simulate creation
    const user = { id: 1, name, email };
    // res.status(201).json({
    //     success: true,
    //     data: user,
    // });
    return sendResponse(res,user,201)
};


// const getAllUsers = (req, res) => {
//     res.send("Fetching all users");
// };

// const getUserById = (req, res) => {
//     const { id } = req.params;
//     res.send(`Fetching user with ID: ${id}`);
// };

// const addUser = (req, res) => {
//     res.send("Adding a new user");
// };

// module.exports = {
//     getUser,
//     createUser,
// };
