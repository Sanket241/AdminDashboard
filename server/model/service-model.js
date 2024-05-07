const {model,Schema}= require("mongoose")
const serviceSchema = new Schema({
    service:{type:String, required:true},
    description:{type:String, required:true},
    price:{type:String, required:true},
    provider:{type:String, required:true}
})
const Service = new model('services',serviceSchema);
module.exports = Service;