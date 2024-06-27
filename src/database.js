import express from 'express'
import mongoose from 'mongoose';

const app = express();
const port  = 8080;
const conn_str = 'mongodb+srv://saul:12345@saul.ey7q2vo.mongodb.net/?retryWrites=true&w=majority&appName=Saul'
mongoose.connect( 
conn_str, 
{ 
useNewUrlParser: true, 
useUnifiedTopology: true 
},(err) => { 
if (err) { 
console.log("error en la conexión"); 
} else { 
console.log("mongodb está conectado")
} 
});
app.listen(port, () => { 
console.log("iniciando el servidor"); 
}); 
