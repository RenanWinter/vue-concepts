<script setup>
import GroupTexts from "@/components/GroupTexts.vue";
import { onMounted } from "vue";
const groups = [
  {
    title: "Estrutura do script",
    items: [
      {
        tag: "div",
        class: "group-title",
        text: "Estrutura geral de uma options API",
      },
      {
        tag: "pre",
        class: "code",
        texts: [
          "export default {",
          "  name: 'NomeDoComponente',",
          "  components: {",
          "    ComponenteImportado",
          "  },",
          "  props: {",
          "    propriedade: {",
          "      type: String,",
          "      default: 'valor padrão',",
          "      required: true,",
          "      validator: (value) => value.length > 0,",
          "    },",
          "  },",
          "  data() {",
          "    return {",
          "      propriedade: 'valor',",
          "    }",
          "  },",
          "  computed: {",
          "    propriedadeCalculada() {",
          "      return this.propriedade + ' calculado'",
          "    }",
          "  },",
          "  watch: {",
          "    propriedade(novoValor, valorAntigo) {",
          "      // faça algo como por exemplo",
          "      this.metodo1()",
          "    }",
          "  },",
          "  //* Métodos do componente */",
          "  methods: {",
          "    metodo1() {// faça algo }",
          "    metodo2() {// faça algo }",
          "  },",
          "  //* Hooks do ciclo de vida */",
          "  created() {// faça algo },",
          "  mounted() {// faça algo },",
          "  destroyed() {// faça algo },",
          "  beforeCreate() {// faça algo },",
          "  beforeMount() {// faça algo },",
          "  beforeUpdate() {// faça algo },",
          "  updated() {// faça algo },",
          "  beforeUnmount() {// faça algo },",
          "  unmounted() {// faça algo },",

          "}",
        ],
      },
      {
        tag: "div",
        class: "group-title",
        text: "Proriedade Data",
        description:
          "Data é uma função que retorna um objeto. Este objeto é o estado interno do componente.",
      },
      {
        tag: "pre",
        class: "code",
        texts: [
          "export default {",
          "  data() {",
          "    return {",
          '      propriedade: "valor",',
          "    }",
          "  }",
          "}",
        ],
      },
      {
        tag: "div",
        class: "group-title",
        text: "Proriedade Watchers",
        description:
          "Watchers são funções que observam mudanças em uma propriedade/data e executam uma ação quando a propriedade é alterada.",
      },
      {
        tag: "pre",
        class: "code",
        texts: [
          "export default {",
          "  data() {",
          "    return {",
          '      propriedade: "valor",',
          "    }",
          "  },",
          "  watch: {",
          "    propriedade(novoValor, valorAntigo) {",
          "      // faça algo",
          "    }",
          "  }",
          "}",
        ],
      },
      {
        tag: "div",
        class: "group-title",
        text: "Proriedade Computed",
        description: `Computed properties são funções que retornam um valor calculado baseado em uma propriedade/data.<br />
                 O valor retornado é armazenado em cache e só é recalculado quando qualquer propriedade/data utilizada internamente na função é alterada.`,
      },
      {
        tag: "pre",
        class: "code",
        texts: [
          "export default {",
          "  data() {",
          "    return {",
          '      propriedade: "valor",',
          "    }",
          "  },",
          "  computed: {",
          "    propriedadeCalculada() {",
          "      return this.propriedade + ' calculado'",
          "    }",
          "  }",
          "}",
        ],
      },
      {
        tag: "div",
        text:
          "Computeds são readonly por padrão, mas podem ser tornados readwrite utilizando getter e setter.",
      },
      {
        tag: "div",
        class: "alert alert-danger",
        texts: ["Apenas como exemplo, pois as computeds não deve ter side effects."],
      },
      {
        tag: "pre",
        class: "code",
        texts: [
          "export default {",
          "  data() {",
          "    return {",
          '      propriedade: "valor",',
          "    }",
          "  },",
          "  computed: {",
          "    propriedadeCalculada: {",
          "      get() {",
          '        return this.propriedade + " calculado"',
          "      },",
          "      set(novoValor) {",
          "        this.propriedade = novoValor",
          "      }",
          "    }",
          "  }",
          "}",
        ],
      },
    ],
  },
];

onMounted(() => {
  console.log("Outras Dicas -> mounted com composition API");
});
</script>
<template>
  <GroupTexts :groups="groups" />
</template>
