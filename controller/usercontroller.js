import usermodel from '../model/usermodel.js';

 export const register = async (req,res) => {
    try{
        const requestBody = req.body;
        const  {name, username, email, phone} = requestBody;
        const user = await usermodel.create(requestBody);
        res.status(201).send({message : 'User Registered Successfully', data : user})
    }catch(error) {
        res.status(500).send({message : error})
    }
}

