<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      livros: [
        {
          id: "01986caa-0a42-4eef-9d11-25c77fd98df1",
          titulo: "O Homem de Giz",
          ISBN: "9783442489398",
          categoria_id: "cd39786b-0a5c-4378-8dbb-ba15f266cb5b",
          editora_id: "dc40599e-56e5-492b-8b96-26a2a39ce7f1",
          quantidade: "90",
          preco: "R$31,00",
        },
        {
          id: "fd358753-5c5b-458b-afe4-c321742f6b86",
          titulo: "Orgulho e Preconceito",
          ISBN: "9783959390859",
          categoria_id: "1a14add5-c7ff-41e4-9422-1f2bbe6dd129",
          editora_id: "9f3ce3be-8168-4daf-a374-f71891a880f5",
          quantidade: "68",
          preco: "R$37,00",
        },
        {
          id: "1da71c33-6bb4-4ba0-9f04-8c55a132df79",
          titulo: "1984",
          ISBN: "9780155658110",
          categoria_id: "d3d9dcbf-63d8-4cce-a90b-d096a19eb470",
          editora_id: "77de8e74-3b89-432a-bf90-e9fd94e83057",
          quantidade: "302",
          preco: "R$21,50",
        },
        {
          id: "7576dc1a-9815-4b1c-9b9a-91416f76070a",
          titulo: "Moby Dick",
          ISBN: "9780393972832",
          categoria_id: "4b7cde92-b7f5-4775-84e8-9e6b8ab2489b",
          editora_id: "a0d8a08e-92ff-4d49-bcf8-3ec68d0495e7",
          quantidade: "245",
          preco: "R$72,80",
        },
        {
          id: "77902653-9726-4977-9367-1000a3c2181a",
          titulo: "A Divina Comédia",
          ISBN: "9781607109914",
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
      <h1>Seção Livros</h1>
      <div class="form-input">
        <input type="text" v-model="novo_livro.titulo" placeholder="título" />
        <input type="text" v-model="novo_livro.ISBN" placeholder="ISBN" />

        <label for="categoria"></label>
        <select
          name="categoria"
          id="categoria"
          v-model="novo_livro.categoria_id"
        >
          <option class="disabled" value="" disabled selected>Categoria</option>
          <option value="Ficcão">Ficção</option>
          <option value="Fantasia">Fantasia</option>
          <option value="Filosofia">Filosofia</option>
          <option value="Biografia">Biografia</option>
        </select>

        <label for="editora"></label>
        <select name="editora" id="editora" v-model="novo_livro.editora_id">
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
          v-model="novo_livro.quantidade"
        />
        <label for="dinheiro">R$</label
        ><input
          type="number"
          id="dinheiro"
          name="dinheiro"
          placeholder="Preço"
          v-model="novo_livro.preco"
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
              <td>{{ livro.categoria_id }}</td>
              <td>{{ livro.editora_id }}</td>
              <td>{{ livro.quantidade }}</td>
              <td>{{ livro.preco }}</td>
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
