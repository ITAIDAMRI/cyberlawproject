import data from "../mochData/mockdata.js"
export const login = async (req, res, next) => {

    const {email, password} = req.body

    for(let usr of data.users){
        if(usr.email === email && usr.password === password){
            res.status(200).json({success: "true", message: "You are looged in !"})
        }
    }

    res.send({success: false, message:"Wrong username or password"})
}