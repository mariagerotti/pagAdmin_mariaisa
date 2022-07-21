<script>
import AutoresApi from "@/api/Autores.js";
const autoresApi = new AutoresApi();
export default {
  data() {
    return {
      autor: {},
      autores: [],
    };
  },
  async created() {
    this.autores = await autoresApi.buscarTodosOsAutores();
  },
  methods: {
    async salvar() {
      if (this.autor.id) {
        await autoresApi.atualizarAutores(this.autor);
      } else {
        await autoresApi.adicionarAutores(this.autor);
      }
      this.autores = await autoresApi.buscarTodosOsAutores();
      this.autor = {};
    },
    async excluir(autor) {
      await autoresApi.excluirAutor(autor.id);
      this.autores = await autoresApi.buscarTodosOsAutores();
    },
    editar(autor) {
      Object.assign(this.autor, autor);
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <h1>Seção Autores</h1>
      <div class="form-input">
        <input type="text" v-model="autor.nome" placeholder="Nome do Autor" />
        <button @click="salvar" id="save-btn">salvar</button>
      </div>
      <div class="list-books">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome do Autor</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="autor in autores" :key="autor.id">
              <td>{{ autor.id }}</td>
              <td>{{ autor.nome }}</td>
              <td>
                <div class="edit-btn">
                  <button @click="editar(autor)">editar</button>
                  <button @click="excluir(autor)">excluir</button>
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
.list-books {
  display: flex;
  justify-content: center;
}
.list-books table {
  margin: 0 auto;
  border-collapse: collapse;
}
table tr td {
  border: 1px solid rgb(211, 211, 211);
  padding: 10px;
}

.form-input input {
  border-radius: 7px;
}

button {
  border-radius: 5px;
}
</style>
