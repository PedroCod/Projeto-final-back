const TarefasService = require('./../services/tarefas.service');

const tarefasService = new TarefasService;


class TarefasController {
    getTarefas = async (req, res) => {
      const tarefas = await tarefasService.findAll();
      res.send(tarefas);
    }
  

    getTarefaById = async (req, res) => {
      const tarefa = await tarefasService.findById(req.params.id);
      if(!tarefa){
        res.status(404).send({message:`Tarefa não encontrada`});
      }else{
      res.status(200).send(tarefa);

      }
    }
    createTarefa = async (req, res) => {
      if(!req.body){
        return;
      }
      await tarefasService.create(req.body)
      .then(() => {
        res.send({message: `Tarefa Criada com sucesso`})
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({message: `Erro no servidor`})
      })
    }
  
    editTarefa = async (req, res) => {
      const idParam = req.params.id;
      const tarefaEdit = req.body;
      await tarefasService.edit(idParam, tarefaEdit)
      .then(() => {
        res.send({message: `Tarefa Editada com sucesso`})
      })
      .catch( err => { 
        res.status(500).send({message: `Erro: ${err}`})
      })
    }
  
    deleteTarefa = async (req, res) => {
      const idParam = req.params.id;
      await tarefasService.delete(idParam)
      .then(() => {
        res.send({message: 'Excluido com sucesso'})
      })
      .catch(err => {
        res.status(500).send({message: `Error: ${err}`});
      })
    }
  }
  
  module.exports = TarefasController;