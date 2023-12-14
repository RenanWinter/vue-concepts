export default {
  namespaced: true,
  state: {
    users: [
      {
        id: 1,
        name: "João",
        email: "joao@teste.com",
      },
      {
        id: 2,
        name: "Maria",
        email: "maria@teste.com",
      },
    ],
    user: null,
  },
  getters: {
    users: state => state.users,
    userNames: state => state.users.map(user => user.name),
    user: state => state.user,
    getById: state => id => state.users.find(user => user.id === id),
  },
  actions: {
    adicionarUsuario({ commit }, usuario) {
      commit("adicionar", usuario);
    },
    removerUsuario({ commit }, id) {
      commit("remover", id);
    },
    editarUsuario({ commit }, usuario) {
      if (!usuario.id) {
        commit("adicionar", usuario);
        return;
      }
      commit("editar", usuario);
    },
    carregarUsuario({ commit }, id) {
      commit("carregar", id === "add" ? null : id);
    },
    fecharUsuario({ commit }) {
      commit("fechar");
    },
  },
  mutations: {
    adicionar(state, usuario) {
      const id = state.users.reduce((acc, user) => (user.id > acc ? user.id : acc), 0);
      state.users.push({
        ...usuario,
        id: id + 1,
      });
    },
    remover(state, id) {
      state.users = state.users.filter(user => user.id !== id);
      
    },
    editar(state, usuario) {
      const index = state.users.findIndex(user => user.id === usuario.id);
      users[index] = usuario;
    },
    carregar(state, id) {
      if (!id) {
        state.user = {
          name: "",
          email: "",
        };
        return;
      }
      state.user = state.users.find(user => user.id === id);
    },
    fechar(state) {
      state.user = null;
    },
  },
};
