<script>
import ListUser from "@/components/ListUser.vue";
import { mapActions } from "vuex";

export default {
  components: {
    ListUser,
  },
  methods: {
    ...mapActions("users", [
      "adicionarUsuario",
      "editarUsuario",
      "getById",
      "fecharUsuario",
    ]),

    addUser() {
      this.$router.push("/user/cadastrar");
    },
    editUser1() {
      this.editarUsuario({ id: 1, name: "Teste1", email: "teste1@teste" });
    },
  },
  mounted() {
    this.fecharUsuario();
  },
};
</script>
<template>
  <div class="about">
    <h1>Relação de Usuários</h1>
    <ListUser />
    <div class="d-flex gap-3">
      <button class="btn btn-primary" @click="addUser">Adicionar Usuário</button>
      <button class="btn btn-warning" @click="editUser1">Alterar Usuario1</button>
    </div>
  </div>
</template>
