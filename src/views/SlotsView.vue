<script>
import TheWelcome from "@/components/TheWelcome.vue";

export default {
  components: {
    TheWelcome,
  },
  data() {
    return {
      title: "Slots",
      subtitle: "Vue.js",
      nome: "Renan",
    };
  },
  computed: {
    completo() {
      return `${this.title} - ${this.subtitle}`;
    },
  },
  watch: {
    title(to, from) {
      console.log(to, from);
    },
  },
  methods: {
    changeName() {
      this.nome = "Diego";
    },
    clicked(teste) {
      console.log(this);
      console.log(teste);
    },
  },
};
</script>

<template>
  <h1 @click="changeName">{{ completo }}</h1>
  <span>{{ this.nome }}</span>
  <div class="px-4b">
    <TheWelcome @click="clicked" />
  </div>
</template>
