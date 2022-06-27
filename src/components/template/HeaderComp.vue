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
