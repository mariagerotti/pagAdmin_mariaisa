import axios from 'axios';
export default class AutoresApi {
  async buscarTodosOsAutores() {
    const response = await axios.get('https://livraria-admin.herokuapp.com/autores/');
    return response.data;
  }

  async buscarAutores(id) {
    const response = await axios.get(`https://livraria-admin.herokuapp.com/autores/${id}`);
    return response.data;
  }

  async adicionarAutores(autores) {
    const response = await axios.post('https://livraria-admin.herokuapp.com/autores', autores);
    return response.data;
  }

  async excluirAutor(id) {
    const response = await axios.delete(`https://livraria-admin.herokuapp.com/autores/${id}`);
    return response.data;
  }

  async atualizarAutores(autores) {
    const response = await axios.put(
      `https://livraria-admin.herokuapp.com/autores/${autores.id}`,
      autores,
    );
    return response.data;
  }
}