<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      livros: [
        {
          id: "01986caa-0a42-4eef-9d11-25c77fd98df1",
          titulo: "O Homem de Giz",
          isbn: "9783442489398",
          categoria_id: "cd39786b-0a5c-4378-8dbb-ba15f266cb5b",
          editora_id: "dc40599e-56e5-492b-8b96-26a2a39ce7f1",
          quantidade: "90",
          preco: "R$31,00",
        },
        {
          id: "fd358753-5c5b-458b-afe4-c321742f6b86",
          titulo: "Orgulho e Preconceito",
          isbn: "9783959390859",
          categoria_id: "1a14add5-c7ff-41e4-9422-1f2bbe6dd129",
          editora_id: "9f3ce3be-8168-4daf-a374-f71891a880f5",
          quantidade: "68",
          preco: "R$37,00",
        },
        {
          id: "1da71c33-6bb4-4ba0-9f04-8c55a132df79",
          titulo: "1984",
          isbn: "9780155658110",
          categoria_id: "d3d9dcbf-63d8-4cce-a90b-d096a19eb470",
          editora_id: "77de8e74-3b89-432a-bf90-e9fd94e83057",
          quantidade: "302",
          preco: "R$21,50",
        },
        {
          id: "7576dc1a-9815-4b1c-9b9a-91416f76070a",
          titulo: "Moby Dick",
          isbn: "9780393972832",
          categoria_id: "4b7cde92-b7f5-4775-84e8-9e6b8ab2489b",
          editora_id: "a0d8a08e-92ff-4d49-bcf8-3ec68d0495e7",
          quantidade: "245",
          preco: "R$72,80",
        },
        {
          id: "77902653-9726-4977-9367-1000a3c2181a",
          titulo: "A Divina Comédia",
          isbn: "9781607109914",
          categoria_id: "5e87edce-1a2b-4600-adef-df88f107b4fc",
          editora_id: "7bed718e-0849-4e3c-acfa-1f77af04395d",
          quantidade: "107",
          preco: "R$120,00",
        },
      ],
      novo_livro: {
        id: "",
        titulo: "",
        ISBN: "",
        categoria_id: "",
        editora_id: "",
        quantidade: 0,
        preco: 0,
      },
    };
  },
  methods: {
    salvar() {
      if (this.novo_livro.titulo !== "") {
        this.novo_livro.id = uuidv4();
        this.livros.push(this.novo_livro);
        this.novo_livro = {
          id: "",
          titulo: "",
          ISBN: "",
          categoria_id: "",
          editora_id: "",
          quantidade: 0,
          preco: 0,
        };
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
      <div class="form-input">
        <input type="text" v-model="novo_livro.titulo" placeholder="título" />
        <input type="text" v-model="novo_livro.ISBN" placeholder="ISBN" />
        <input
          type="text"
          v-model="novo_livro.categoria_id"
          placeholder="Categoria_ID"
        />
        <input
          type="text"
          v-model="novo_livro.editora_id"
          placeholder="Editora_ID"
        />
        <input
          type="number"
          v-model="novo_livro.quantidade"
          placeholder="Quantidade"
        />
        <label for="dinheiro">R$</label
        ><input
          type="number"
          id="dinheiro"
          name="dinheiro"
          placeholder="Preço"
          v-model="novo_livro.preco"
        />
        <button @click="salvar">Salvar</button>
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
              <td>{{ livro.isbn }}</td>
              <td>{{ livro.categoria_id }}</td>
              <td>{{ livro.editora_id }}</td>
              <td>{{ livro.quantidade }}</td>
              <td>{{ livro.preco }}</td>
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

.form-input input{
  border-radius: 7px;
  
}

button{
  border-radius: 5px;
}
</style>
