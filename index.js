const express = require('express');
const cors  = require('cors');
const TarefasRouter = require('./routes/tarefas.routes');
const Conn = require('./conn/conn');
const app = express();

app.use(express.json());

app.use(cors());

app.use('/tarefas', TarefasRouter);

if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
};
const db_url= process.env.DB_URL;
const db_user= process.env.DB_USER;
const db_pass= process.env.DB_PASS;
const db_data= process.env.DB_DATA;

console.log(db_url, db_user, db_data, db_pass)
Conn(db_url, db_user, db_pass ,db_data);


const port = 3001;
app.listen(process.env.PORT || port, () => {
  console.log(`servidor rodando na porta ${port}`)
});