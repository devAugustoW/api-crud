import User from '../models/User';

class LoginController{

	// Criando sessão de Login
	async store(req, res){

		// receber os dados da requisição
		const { email } = req.body;
		const { password } = req.body;

		// Impedir a criação do mesmo usuário mais de uma vez
		let user = await User.findOne({ email });
		if(!user){
			user = await User.create({ email });
		}

		return res.json(user);
	}
}

export default new LoginController();