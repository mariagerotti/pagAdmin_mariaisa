<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      editora: [
        {
          id: "01986caa-0a42-4eef-9d11-25c77fd98df1",
          nome: "DarkSide",
          site: "https://www.darksidebooks.com.br/",
        },
        {
          id: "fd358753-5c5b-458b-afe4-c321742f6b86",
          nome: "Moderna",
          site: "https://www.moderna.com.br/",
        },
        {
          id: "1da71c33-6bb4-4ba0-9f04-8c55a132df79",
          nome: "Draco",
          site: "https://editoradraco.com/",
        },
        {
          id: "7576dc1a-9815-4b1c-9b9a-91416f76070a",
          nome: "Arqueiro",
          site: "https://www.editoraarqueiro.com.br/",
        },
        {
          id: "77902653-9726-4977-9367-1000a3c2181a",
          nome: "FTD",
          site: "https://ftd.com.br/",
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
      <h1>Seção Editoras</h1>
      <div class="form-input">
        <input type="text" v-model="nova_editora.nome" placeholder="Nome" />
        <input type="text" v-model="nova_editora.site" placeholder="Site" />
        <button @click="salvar" id="save-btn">salvar</button>
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
