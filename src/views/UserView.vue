<script>
import UserForm from "@/components/UserForm.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    UserForm,
  },
  computed: {
    ...mapGetters("users", ["user"]),
  },
  methods: {
    ...mapActions("users", ["editarUsuario", "carregarUsuario"]),
    handleSubmit(user) {
      this.editarUsuario(user);
      this.$router.push("/users");
    },
  },
  mounted() {
    //Analise do objeto this
    const userId = this.$route.params.id;

    this.carregarUsuario(userId ? +userId : "add");
  },
};
</script>

<template>
  <div>
    <h1>Perfil do Usuário</h1>
    <UserForm v-if="user" v-bind:user="user" @submited="handleSubmit" />
  </div>
</template>
