<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      editora: [
        {
          id: "01986caa-0a42-4eef-9d11-25c77fd98df1",
          nome: "O Homem de Giz",
          site: "9783442489398",
        },
        {
          id: "fd358753-5c5b-458b-afe4-c321742f6b86",
          nome: "Orgulho e Preconceito",
          site: "9783959390859",
        },
        {
          id: "1da71c33-6bb4-4ba0-9f04-8c55a132df79",
          nome: "1984",
          site: "9780155658110",
        },
        {
          id: "7576dc1a-9815-4b1c-9b9a-91416f76070a",
          nome: "Moby Dick",
          site: "9780393972832",
        },
        {
          id: "77902653-9726-4977-9367-1000a3c2181a",
          nome: "A Divina Comédia",
          site: "9781607109914",
        },
      ],
      nova_editora: {
        id: "",
        nome: "",
        site: "",
      },
    };
  },
  methods: {
    salvar() {
      if (this.nova_editora.nome !== "") {
        this.nova_editora.id = uuidv4();
        this.editora.push(this.nova_editora);
        this.nova_editora = {
          id: "",
          nome: "",
          site: "",
        };
      }
    },
    excluir(editora) {
      const indice = this.editora.indexOf(editora);
      this.editora.splice(indice, 1);
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="form-input">
        <input type="text" v-model="nova_editora.nome" placeholder="Nome" />
        <input type="text" v-model="nova_editora.site" placeholder="Site" />
        <button @click="salvar">Salvar</button>
      </div>
      <div class="list-books">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Site</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="livro in editora" :key="livro.id">
              <td>{{ livro.id }}</td>
              <td>{{ livro.nome }}</td>
              <td>{{ livro.site }}</td>
              <td>
                <button>editar</button>
                <button @click="excluir(livro)">excluir</button>
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
