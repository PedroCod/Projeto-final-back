const TarefaModel = require("./../models/tarefa");

class tarefasService {
  findAll = async () => await TarefaModel.find();

  findById = async (id) => {
    return await TarefaModel.findById(id);
  };

  create = async (tarefa) => {
    return await TarefaModel.create(tarefa);
  };

  edit = async (id, tarefa) => {
    return await TarefaModel.updateOne({ _id: id }, tarefa);
  };

  delete = async (id) => {
    return await TarefaModel.deleteOne({ _id: id });
  };
}

module.exports = tarefasService;