<script>
import { mapActions, mapGetters } from "vuex";
import AppTable from "./AppTable.vue";

export default {
  components: { AppTable },
  data() {
    return {
      tableConfig: {
        columns: [
          {
            field: "id",
            label: "ID",
          },
          {
            field: "name",
            label: "Nome",
          },
          {
            field: "email",
            label: "E-mail",
          },
        ],
        actions: [
          {
            icon: "fa fa-edit",
            color: "btn-primary",
            handler: (user) => {
              this.$router.push(`/user/${user.id}/editar`);
            },
          },
          {
            icon: "fa fa-trash",
            color: "btn-danger",
            handler: (user) => {
              this.excluir(user);
            },
          },
        ],
      },
    };
  },
  computed: {
    ...mapGetters("users", ["users"]),
  },
  methods: {
    ...mapActions("users", ["removerUsuario"]),
    excluir(user) {
      this.removerUsuario(user.id);
    },
  },
};
</script>

<template>
  <template v-if="users">
    <AppTable :value="users" :config="tableConfig" />
  </template>
</template>
