<template>
  <h1>Bem-Vindo(a)!</h1>
  <main class="card-books">
    <div class="row">
      <div class="card">
        <h2>Monetização</h2>
        <p>Configure a monetização</p>
        <div class="btnlivro">
          <button type="button" class="btn btn-outline-danger">Excluir</button>
        </div>
      </div>

      <div class="card">
        <h2>Artigos</h2>
        <p>Crie e edite artigos</p>
        <div class="btnlivro">
          <button type="button" class="btn btn-outline-danger">Excluir</button>
        </div>
      </div>

      <div class="card">
        <h2>Monetização</h2>
        <p>Configure a monetização</p>
        <div class="btnlivro">
          <button type="button" class="btn btn-outline-danger">Excluir</button>
        </div>
      </div>

      <div class="card">
        <h2>Monetização</h2>
        <p>Configure a monetização</p>
        <div class="btnlivro">
          <button type="button" class="btn btn-outline-danger">Excluir</button>
        </div>
      </div>

      <div class="card">
        <h2>Artigos</h2>
        <p>Crie e edite artigos</p>
        <div class="btnlivro">
          <button type="button" class="btn btn-outline-danger">Excluir</button>
        </div>
      </div>

      <div class="card">
        <h2>Monetização</h2>
        <p>Configure a monetização</p>
        <div class="btnlivro">
          <button type="button" class="btn btn-outline-danger">Excluir</button>
        </div>
      </div>

      <div class="card">
        <h2>Artigos</h2>
        <p>Crie e edite artigos</p>
        <div class="btnlivro">
          <button type="button" class="btn btn-outline-danger">Excluir</button>
        </div>
      </div>

      <div class="card">
        <h2>Artigos</h2>
        <p>Crie e edite artigos</p>
        <div class="btnlivro">
          <button type="button" class="btn btn-outline-danger">Excluir</button>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.card-books {
  display: flex;
  margin: 50px;
}

.card {
  background-color: #d9d9d9;
  border-radius: 5px;
  box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
  padding: 30px;
  margin: 20px;
  width: 400px;
  transition: all 0.3s ease-out;
}

.row {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card:hover {
  transform: translateY(-5px);
  cursor: pointer;
}

.card p {
  color: #a3a5ae;
  font-size: 16px;
}

.image {
  float: right;
  max-width: 64px;
  max-height: 64px;
}
.btnlivro {
  right: inherit;
}
</style>
