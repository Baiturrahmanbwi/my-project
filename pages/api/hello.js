import connectMongo from "../../lib/mongodb"

export default function handler(req, res) {
    connectMongo()
    
    res.status(200).json({name:"JHON DOE"})
}