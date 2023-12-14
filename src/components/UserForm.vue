<script>
export default {
  emits: ["submited"],
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      form: {
        id: this.user.id,
        name: this.user.name,
        email: this.user.email,
      },
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.$emit("submited", this.form);
    },
  },
  mounted: () => {
    console.log("Componente montado");
  },
};
</script>

<template>
  <form @submit="(e) => handleSubmit(e)">
    <div class="mb-3">
      <label for="name" class="form-label">Nome</label>
      <input type="text" id="name" name="name" class="form-control" v-model="form.name" />
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">E-mail</label>
      <input
        type="email"
        id="email"
        name="email"
        class="form-control"
        v-model="form.email"
      />
    </div>
    <div class="d-flex gap-3">
      <RouterLink to="/users" class="btn btn-warning mr-2">Voltar</RouterLink>

      <button class="btn btn-primary" type="submit">Salvar</button>
    </div>
  </form>
</template>
