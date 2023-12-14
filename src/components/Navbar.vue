<script>
export default {
  data() {
    return {
      activeRoute: "",
    };
  },
  watch: {
    $route(to) {
      this.activeRoute = to.name;
    },
  },
  mounted() {
    console.log(
      "Navbar mounted: Esta mensagem deve aparecer apenas uma vez durante todo o ciclo de vida da operação."
    );
  },
};
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <RouterLink
              class="nav-link"
              :class="{ active: activeRoute === 'slots' }"
              to="/"
              >Slots</RouterLink
            >
            <RouterLink
              class="nav-link"
              :class="{ active: ['users', 'user', 'newuser'].includes(activeRoute) }"
              to="/users"
              >Usuários</RouterLink
            >
            <RouterLink
              class="nav-link"
              :class="{ active: ['fundamentals'].includes(activeRoute) }"
              to="/fundamentals"
              >Fundamentos</RouterLink
            >
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
