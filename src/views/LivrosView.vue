<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      livros: [
        {
          id: "01986caa-0a42-4eef-9d11-25c77fd98df1",
          titulo: "",
          isbn: "TD Garden",
          categoria_id: "cd39786b-0a5c-4378-8dbb-ba15f266cb5b",
          editora_id: "dc40599e-56e5-492b-8b96-26a2a39ce7f1",
          quantidade: "n",
          preco: "x",
        },
        {
          id: "fd358753-5c5b-458b-afe4-c321742f6b86",
          titulo: "",
          isbn: "TD Garden",
          categoria_id: "1a14add5-c7ff-41e4-9422-1f2bbe6dd129",
          editora_id: "9f3ce3be-8168-4daf-a374-f71891a880f5",
          quantidade: "n",
          preco: "x",
        },
        {
          id: "1da71c33-6bb4-4ba0-9f04-8c55a132df79",
          titulo: "",
          isbn: "TD Garden",
          categoria_id: "d3d9dcbf-63d8-4cce-a90b-d096a19eb470",
          editora_id: "77de8e74-3b89-432a-bf90-e9fd94e83057",
          quantidade: "n",
          preco: "x",
        },
        {
          id: "7576dc1a-9815-4b1c-9b9a-91416f76070a",
          titulo: "",
          isbn: "TD Garden",
          categoria_id: "4b7cde92-b7f5-4775-84e8-9e6b8ab2489b",
          editora_id: "a0d8a08e-92ff-4d49-bcf8-3ec68d0495e7",
          quantidade: "n",
          preco: "x",
        },
        {
          id: "77902653-9726-4977-9367-1000a3c2181a",
          titulo: "",
          isbn: "TD Garden",
          categoria_id: "5e87edce-1a2b-4600-adef-df88f107b4fc",
          editora_id: "7bed718e-0849-4e3c-acfa-1f77af04395d",
          quantidade: "n",
          preco: "x",
        },
      ],
      novo_titulo: "",
      nova_categoria_id: "",
      nova_editora_id: "",
      nova_quantidade: "",
      novo_preco: "",
    };
  },
  methods: {
    salvar() {
      if (this.novo_titulo !== "") {
        const novo_id = uuidv4();
        this.times.push({
          id: novo_id,
          nome: this.novo_titulo,
        });
        this.novo_titulo = "";
      }
    },
    excluir(livros) {
      const indice = this.livros.indexOf(livros);
      this.livros.splice(indice, 1);
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="input">
        <input type="text" placeholder="título" />
        <input type="text" placeholder="ISBN" />
        <input type="text" placeholder="Categoria_ID" />
        <input type="text" placeholder="Editora_ID" />
        <input type="number" placeholder="Quantidade" />
        <label for="dinheiro">R$</label
        ><input
          type="number"
          id="dinheiro"
          name="dinheiro"
          placeholder="Preço"
        />
      </div>
      <!--<div>
        <button @click="salvar" class="btn_salvar" type="submit">+</button>
      </div>-->
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
            <tr v-for="livros in livro" :key="livros.id">
              <td>{{ livros.id }}</td>
              <td>{{ livros.nome }}</td>
              <td>
                <button>editar</button>
                <button @click="excluir(livros)">excluir</button>
              </td>
              <td>{{ livros.titulo }}</td>
              <td>{{ livros.titulo }}</td>
              <td>{{ livros.titulo }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<style>
.search-bar {
  float: right;
  padding-right: 1%;
  margin-top: 1%;
}
</style>
