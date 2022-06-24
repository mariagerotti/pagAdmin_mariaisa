<template>
  <header>
    <div class="menu-header">
      <!-- Image and text 
      <nav class="navbar navbar-light">
        <a class="navbar-brand" href="#">
          <img
            src="/docs/4.2/assets/brand/bootstrap-solid.svg"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt=""
          />
          Bootstrap
        </a>
      </nav>-->

      <span> <RouterLink to="/">HOME</RouterLink> </span>

      <span> <RouterLink to="/livros">LIVROS</RouterLink> </span>

      <span> <RouterLink to="/editoras">EDITORAS</RouterLink> </span>

      <span> <RouterLink to="/autores">AUTORES</RouterLink> </span>

      <span> <RouterLink to="/categorias">CATEGORIAS</RouterLink> </span>
    </div>
  </header>

  <div class="search-bar">
    <nav class="navbar navbar-light">
      <form class="form-inline">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Adicionar"
          aria-label="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          +
        </button>
      </form>
    </nav>
  </div>
</template>

<style>
header span {
  padding-right: 2%;
}

header {
  border-bottom: 1px solid black;
  padding: 1%;
}

a {
  color: inherit;
  text-decoration: none;
}

.search-bar {
  /*float: right;*/
  padding-right: 1%;
  margin-top: 1%;
}

</style>
