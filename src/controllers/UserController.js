import User from '../models/User';

class UserController{

	// listar todos os usuários
	async index(req, res){
		// resgata todos os usuário da tabela User
		const users = await User.find({});

		// devolve o resulta em forma de json
		return res.json(users)
	}

	// editar, atualizar um Ponto de Risco
	async update(req, res){
		try {
			// Resgatar dados da requisição
			const { user_id } = req.params;
			const { email, password } = req.body;

			// Atualizar o usuário
			const result = await User.updateOne(
					{ _id: user_id },
					{ $set: { email, password } }
			);

			// Verificar se a atualização foi bem-sucedida
			if (result.nModified === 0) {
					return res.status(404).send('Usuário não encontrado ou dados não alterados');
			}

			res.send('Usuário atualizado com sucesso');
		} catch (error) {
			res.status(500).send('Erro ao atualizar usuário: ' + error.message);
		}
	}

	// deletar usuário
	async delete(req, res){
		try {
			// Resgatar o ID do usuário da requisição
			const { user_id } = req.params;

			// Excluir o usuário
			const result = await User.deleteOne({ _id: user_id });

			// Verificar se a exclusão foi bem-sucedida
			if (result.deletedCount === 0) {
				return res.status(404).send('Usuário não encontrado');
			}

			res.send('Usuário excluído com sucesso');

		} catch (error) {
			res.status(500).send('Erro ao excluir usuário: ' + error.message);

		}
	}
}

export default new UserController();