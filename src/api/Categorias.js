import axios from 'axios';
export default class CategoriasApi {
  async buscarTodasAsCategorias() {
    const response = await axios.get('https://livraria-admin.herokuapp.com/categorias');
    return response.data;
  }

  async buscarCategorias(id) {
    const response = await axios.get(`https://livraria-admin.herokuapp.com/categorias/${id}`);
    return response.data;
  }

  async adicionarCategorias(categorias) {
    const response = await axios.post('https://livraria-admin.herokuapp.com/categorias', categorias);
    return response.data;
  }

  async excluirCategorias(id) {
    const response = await axios.delete(`https://livraria-admin.herokuapp.com/categorias/${id}`);
    return response.data;
  }

  async atualizarCategorias(categorias) {
    const response = await axios.put(
      `https://livraria-admin.herokuapp.com/categorias/${categorias.id}`,
      categorias,
    );
    return response.data;
  }
}