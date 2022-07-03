<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      categorias: [
        {
          id: "01986caa-0a42-4eef-9d11-25c77fd98df1",
          descrição:
            "A ficção científica normalmente se passa em um futuro distante, na exploração especial e em viagens no tempo e espaço. Por outro lado, seu livro pode ter uma temática mais leve que não dependa de conhecimento científico, mas sim, em temas antropológicos e sociais que prevejam o futuro da humanidade.",
        },
        {
          id: "fd358753-5c5b-458b-afe4-c321742f6b86",
          descrição:
            "Fantasia é caracterizado por elementos fantásticos, como magia ou sobrenatural. Além disso, se passa em um mundo onde os elementos fantásticos possuem suas regras e leis próprias. Por outro lado, na baixa fantasia os elementos fantásticos estão presentes, mas usam as regras do nosso mundo.",
        },
        {
          id: "1da71c33-6bb4-4ba0-9f04-8c55a132df79",
          descrição:
            "A ficção policial é caracterizada por meio de histórias que envolvem um crime ou mistério, como o nome indica e que deve ser solucionado pelo protagonista através de pistas durante o enredo. Você pode explorar um mistério mais aconchegante, sem nada muito tenso e com personagens reais, ou explorar um enredo noir e até mesmo os trabalhos de um detetive particular.",
        },
        {
          id: "7576dc1a-9815-4b1c-9b9a-91416f76070a",
          descrição:
            "Ficção feminina é um termo genérico para livros centrados nas mulheres que se concentram na experiência de suas vidas e seus direitos. Por outro lado, é diferente da escrita feminina, que se refere à literatura escrita por mulheres. Também conhecido como Chick lit, é um gênero de ficção que aborda as questões das mulheres modernas com romances leves, divertidos e charmosos.",
        },
        {
          id: "77902653-9726-4977-9367-1000a3c2181a",
          descrição:
            "As biografias fornecem aos leitores a histórias da vida de terminada pessoa, mas com uma visão de terceiros e que podem em alguns casos não tê-las conhecido. Normalmente são livros de autores póstumos ou ainda estudos sobre personalidades que nunca tiveram suas vidas exploradas por inteiro.",
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
      <h1>Seção Categorias</h1>
      <div class="form-input">
        <input
          type="text"
          v-model="nova_categoria.descrição"
          placeholder="Descrição"
        />
        <button @click="salvar" id="save-btn">salvar</button>
      </div>
      <div class="list-books">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Descrição da Categoria</th>
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
