// import User from '../model/user.js';
// import Product from '../model/product.js';


// export const getProducts = async (request, response) => {
//     try{
//         const products = await Product.find();
//         response.status(200).json(products);
//     }catch( error ){
//         response.status(404).json({ message: error.message })
//     }
// }



// export const getUsers = async (request, response) => {
//     try{
//         const users = await User.find();
//         response.status(200).json(users);
//     }catch( error ){
//         response.status(404).json({ message: error.message })
//     }
// }


import UserModel from '../model/user.js';
import Product from '../model/product.js';


export const getProducts = async (request, response) => {
    try{
        const products = await Product.find();
        response.status(200).json(products);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

export const getUsers = async (request, response) => {
    try{
        const cached_data = await client.get("users");
        // const users = await User.find();
        if(cached_data){
            console.log("Data is coming from redis");
            response.status(200).json(JSON.parse(cached_data))
        }
        else{
            let users = await UserModel.find();

            users = users.map((user) => {
                const {password, ...otherDetails} = user._doc
                return otherDetails;
            })
            client.set("users", JSON.stringify(users));
            response.status(200).json(users)
        }
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}