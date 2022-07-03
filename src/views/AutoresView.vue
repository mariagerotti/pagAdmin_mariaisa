<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      autor: [
        {
          id: "01986caa-0a42-4eef-9d11-25c77fd98df1",
          nome: "Machado de Assis",
        },
        {
          id: "fd358753-5c5b-458b-afe4-c321742f6b86",
          nome: "William Shakespeare",
        },
        {
          id: "1da71c33-6bb4-4ba0-9f04-8c55a132df79",
          nome: "Stephen King",
        },
        {
          id: "7576dc1a-9815-4b1c-9b9a-91416f76070a",
          nome: "George Orwell",
        },
        {
          id: "77902653-9726-4977-9367-1000a3c2181a",
          nome: "Clarice Lispector",
        },
      ],
      novo_autor: {
        id: "",
        nome: "",
      },
    };
  },
  methods: {
    salvar() {
      if (this.novo_autor.nome !== "") {
        this.novo_autor.id = uuidv4();
        this.autor.push(this.novo_autor);
        this.novo_autor = {
          id: "",
          nome: "",

        };
      }
    },
    excluir(autor) {
      const indice = this.autor.indexOf(autor);
      this.autor.splice(indice, 1);
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <h1>Seção Autores</h1>
      <div class="form-input">
        <input
          type="text"
          v-model="novo_autor.nome"
          placeholder="Nome do Autor"
        />
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
            <tr v-for="autor in autor" :key="autor.id">
              <td>{{ autor.id }}</td>
              <td>{{ autor.nome }}</td>
              <td>
                <div class="edit-btn">
                  <button>editar</button>
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
