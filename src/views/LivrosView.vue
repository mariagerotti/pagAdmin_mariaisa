<script>
import LivrosApi from "@/api/Livros.js";
import AutoresApi from "@/api/Autores.js";
import CategoriasApi from "@/api/Categorias.js";
import EditorasApi from "@/api/Editoras.js";
const livrosApi = new LivrosApi();
const autoresApi = new AutoresApi();
const categoriasApi = new CategoriasApi();
const editorasApi = new EditorasApi();
export default {
  data() {
    return {
      livro: {},
      livros: [],
      categoria: {},
      categorias: [],
      editora: {},
      editoras: [],
      autor: {},
      autores: [],
    };
  },
  async created() {
    this.livros = await livrosApi.buscarTodosOsLivros();
    this.autores = await autoresApi.buscarTodosOsAutores();
    this.categorias = await categoriasApi.buscarTodasAsCategorias();
    this.editoras = await editorasApi.buscarTodasAsEditoras();
  },
  methods: {
    async salvar() {
      if (this.livro.id) {
        await livrosApi.atualizarLivro(this.livro);
      } else {
        await livrosApi.adicionarLivro(this.livro);
      }
      this.livros = await livrosApi.buscarTodosOsLivros();
      this.categorias = await categoriasApi.buscarTodasAsCategorias();
      this.editoras = await editorasApi.buscarTodasAsEditoras();
      this.autores = await autoresApi.buscarTodosOsAutores();
      this.livro = {};
    },
    async excluir(livro) {
      await livrosApi.excluirLivro(livro.id);
      this.livros = await livrosApi.buscarTodosOsLivros();
    },
    editar(livro) {
      Object.assign(this.livro, livro);
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <h1>Seção Livros</h1>
      <div class="form-input">
        <input type="text" v-model="livro.titulo" placeholder="título" />
        <input type="text" v-model="livro.ISBN" placeholder="ISBN" />

        <label for="categoria"></label>
        <select name="categoria" id="categoria" v-model="livro.categoria">
          <option class="disabled" value="" disabled selected>Categoria</option>
          <option value="Ficcão">Ficção</option>
          <option value="Fantasia">Fantasia</option>
          <option value="Filosofia">Filosofia</option>
          <option value="Biografia">Biografia</option>
        </select>

        <label for="editora"></label>
        <select name="editora" id="editora" v-model="livro.editora">
          <option value="" disabled selected>Editora</option>
          <option value="DarkSide">DarkSide</option>
          <option value="Moderna">Moderna</option>
          <option value="Draco">Draco</option>
          <option value="Arqueiro">Arqueiro</option>
          <option value="FTD">FTD</option>
        </select>

        <label for="quantidade">Quantidade</label>
        <input
          type="number"
          id="quantidade"
          name="quantidade"
          placeholder="Quantidade"
          v-model="livro.quantidade"
        />
        <label for="dinheiro">R$</label
        ><input
          type="number"
          id="dinheiro"
          name="dinheiro"
          placeholder="Preço"
          v-model="livro.preco"
        />
        <button @click="salvar" id="save-btn">salvar</button>
      </div>
      <div class="list-books">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>ISBN</th>
              <th>Categoria_ID</th>
              <th>Editora_ID</th>
              <th>Quantidade</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="livro in livros" :key="livro.id">
              <td>{{ livro.id }}</td>
              <td>{{ livro.titulo }}</td>
              <td>{{ livro.ISBN }}</td>
              <td>{{ livro.categoria }}</td>
              <td>{{ livro.editora }}</td>
              <td>{{ livro.quantidade }}</td>
              <td>{{ livro.preco }}</td>
              <td>
                <div class="edit-btn">
                  <button @click="editar(livro)">editar</button>
                  <button @click="excluir(livro)">excluir</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<style>
body {
  background: #f2f3eb;
}

button {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
input,
select {
  color: #5a5a5a;
  font: inherit;
  margin: 0;
}

input {
  line-height: normal;
}

.form-input {
  border: solid 3px #474544;
  padding: 2%;
  max-width: 768px;
  margin: 40px auto;
  position: relative;
}

form {
  padding: 37.5px;
  margin: 50px 0;
}

h1 {
  color: #474544;
  margin-top: 2%;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 7px;
  text-align: center;
  text-transform: uppercase;
}

input[type="text"],
input[type="number"],
select {
  background: none;
  border: none;
  border-bottom: solid 2px #474544;
  color: #474544;
  font-size: 1em;
  font-weight: 400;
  letter-spacing: 1px;
  margin: 0em 0 1.875em 0;
  padding: 0 0 0.875em 0;
  text-transform: uppercase;
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

#save-btn,
.edit-btn button {
  background: none;
  border: solid 2px #474544;
  color: #474544;
  cursor: pointer;
  display: inline-block;
  font-size: 0.875em;
  font-weight: bold;
  outline: none;
  padding: 20px 35px;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

#save-btn:hover {
  background: #474544;
  color: #f2f3eb;
}

.edit-btn button:hover {
  background: #474544;
  color: #f2f3eb;
}

.edit-btn button {
  padding: 8%;
  margin: 3px;
}

#save-btn {
  padding: 15px 25px;
}
</style>
