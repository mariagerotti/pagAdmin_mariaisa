<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      categorias: [
        {
          id: "01986caa-0a42-4eef-9d11-25c77fd98df1",
          descrição: "O Homem de Giz",
        },
        {
          id: "fd358753-5c5b-458b-afe4-c321742f6b86",
          descrição: "Orgulho e Preconceito",
        },
        {
          id: "1da71c33-6bb4-4ba0-9f04-8c55a132df79",
          descrição: "1984",
        },
        {
          id: "7576dc1a-9815-4b1c-9b9a-91416f76070a",
          descrição: "Moby Dick",
        },
        {
          id: "77902653-9726-4977-9367-1000a3c2181a",
          descrição: "A Divina Comédia",
        },
      ],
      nova_categoria: {
        id: "",
        descrição: "",
      },
    };
  },
  methods: {
    salvar() {
      if (this.nova_categoria.descrição !== "") {
        this.nova_categoria.id = uuidv4();
        this.categorias.push(this.nova_categoria);
        this.nova_categoria = {
          id: "",
          descrição: "",
        };
      }
    },
    excluir(categoria) {
      const indice = this.categorias.indexOf(categoria);
      this.categorias.splice(indice, 1);
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="form-input">
        <input
          type="text"
          v-model="nova_categoria.descrição"
          placeholder="Descrição"
        />
        <button @click="salvar">Salvar</button>
      </div>
      <div class="list-books">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="categoria in categorias" :key="categoria.id">
              <td>{{ categoria.id }}</td>
              <td>{{ categoria.descrição }}</td>
              <td>
                <button>editar</button>
                <button @click="excluir(categoria)">excluir</button>
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
