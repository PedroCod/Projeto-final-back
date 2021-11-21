const mongoose = require('mongoose');

const tarefaSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: { type: String },
    prioridade: { type: String },
    status: { type: String },
    prazo: { type: String },
    dataCriacao: { type: Date, default: Date.now },
  });
  
  const TarefaModel = mongoose.model("tarefas", tarefaSchema);
  
  module.exports = TarefaModel;