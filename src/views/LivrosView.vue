<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      livros: [
        {
          id: "01986caa-0a42-4eef-9d11-25c77fd98df1",
          titulo: "Boston Celtics",
          isbn: "TD Garden",
          categoria_id: "cd39786b-0a5c-4378-8dbb-ba15f266cb5b",
          editora_id: "dc40599e-56e5-492b-8b96-26a2a39ce7f1",
          quantidade: "n",
          preco: "x",
        },
        {
          id: "fd358753-5c5b-458b-afe4-c321742f6b86",
          titulo: "Boston Celtics",
          isbn: "TD Garden",
          categoria_id: "1a14add5-c7ff-41e4-9422-1f2bbe6dd129",
          editora_id: "9f3ce3be-8168-4daf-a374-f71891a880f5",
          quantidade: "n",
          preco: "x",
        },
        {
          id: "1da71c33-6bb4-4ba0-9f04-8c55a132df79",
          titulo: "Boston Celtics",
          isbn: "TD Garden",
          categoria_id: "d3d9dcbf-63d8-4cce-a90b-d096a19eb470",
          editora_id: "77de8e74-3b89-432a-bf90-e9fd94e83057",
          quantidade: "n",
          preco: "x",
        },
        {
          id: "7576dc1a-9815-4b1c-9b9a-91416f76070a",
          titulo: "Boston Celtics",
          isbn: "TD Garden",
          categoria_id: "4b7cde92-b7f5-4775-84e8-9e6b8ab2489b",
          editora_id: "a0d8a08e-92ff-4d49-bcf8-3ec68d0495e7",
          quantidade: "n",
          preco: "x",
        },
        {
          id: "77902653-9726-4977-9367-1000a3c2181a",
          titulo: "Boston Celtics",
          isbn: "TD Garden",
          categoria_id: "5e87edce-1a2b-4600-adef-df88f107b4fc",
          editora_id: "7bed718e-0849-4e3c-acfa-1f77af04395d",
          quantidade: "n",
          preco: "x",
        },
      ],
      novo_time: "",
    };
  },
  methods: {
    salvar() {
      if (this.novo_time !== "") {
        const novo_id = uuidv4();
        this.times.push({
          id: novo_id,
          nome: this.novo_time,
        });
        this.novo_time = "";
      }
    },
    excluir(time){
      const indice = this.times.indexOf(time);
      this.times.splice(indice, 1)
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="search-bar">
        <nav class="navbar navbar-light">
          <form class="form-inline">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Adicionar"
              aria-label="Search"
            />
            <button
              @click="salvar"
              class="btn btn-outline-dark my-2 my-sm-0"
              type="submit"
            >
              +
            </button>
          </form>
        </nav>
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
            <tr v-for="livro in livro" :key="time.id">
              <td>{{ time.id }}</td>
              <td>{{ time.nome }}</td>
              <td>
                <button>editar</button>
                <button @click="excluir(time)">excluir</button>
              </td>
              <td>{{ time.estadio }}</td>
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
