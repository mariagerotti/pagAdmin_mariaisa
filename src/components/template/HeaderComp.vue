<template>
  <header>
    <div class="menu-header">
      <span> <RouterLink to="/">HOME</RouterLink> </span>

      <span> <RouterLink to="/livros">LIVROS</RouterLink> </span>

      <span> <RouterLink to="/editoras">EDITORAS</RouterLink> </span>

      <span> <RouterLink to="/autores">AUTORES</RouterLink> </span>

      <span> <RouterLink to="/categorias">CATEGORIAS</RouterLink> </span>
    </div>
  </header>

  <div class="search-bar">
    <nav class="navbar navbar-light bg-light">
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
</style>
