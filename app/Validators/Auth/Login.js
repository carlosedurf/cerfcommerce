'use strict'

class Login {
  get rules() {
    return {
      // validation rules
      email: 'required|email',
      password: 'required',
    }
  }

  get messages() {
    return {
      'email.required': 'O email é obrigatório!',
      'email.email': 'O email já existe!',
      'password.required': 'A senha é obrigatória!',
    }
  }
}

module.exports = Login
