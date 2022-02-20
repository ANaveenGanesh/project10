const {readFileSync}=require('fs');
var load=()=>JSON.parse(readFileSync('customer.json))
module.exports={load};
