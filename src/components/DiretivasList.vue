<script setup>
import AppTable from "./AppTable.vue";

const tableConfig = {
  columns: [
    {
      field: "name",
      label: "Nome",
    },
    {
      field: "description",
      label: "Descrição",
    },
  ],
};
const diretivas = [
  {
    name: "v-text",
    description: "Substitui o conteúdo do elemento pelo valor da expressão",
  },
  {
    name: "v-html",
    description:
      "Substitui o conteúdo do elemento pelo valor da expressão, interpretando o valor como HTML",
  },
  {
    name: "v-show",
    description:
      "Altera a propriedade CSS display do elemento, exibindo-o ou ocultando-o",
  },
  {
    name: "v-if",
    description: "Adiciona ou remove o elemento do DOM, dependendo do valor da expressão",
  },
  {
    name: "v-else",
    description: "Adiciona ou remove o elemento do DOM, dependendo do valor da expressão",
  },
  {
    name: "v-else-if",
    description: "Adiciona ou remove o elemento do DOM, dependendo do valor da expressão",
  },
  { name: "v-for", description: "Renderiza o elemento para cada item da lista" },
  {
    name: "v-on",
    description: "Adiciona um listener de evento ao elemento (Shortchut: @)",
  },
  {
    name: "v-bind",
    description:
      'Adiciona um binding de atributo ao elemento (Shortchut: ":" ou "." para props)',
  },
  {
    name: "v-model",
    description:
      "Adiciona um binding de propriedade e listener de evento ao elemento, permitindo a criação de componentes com duas vias de dados",
  },
  {
    name: "v-slot",
    description: 'Define um slot de conteúdo para um componente pai (Shortchut: "#")',
  },
  {
    name: "v-pre",
    description: "Renderiza o elemento sem interpretar as expressões contidas nele",
  },
  {
    name: "v-cloak",
    description:
      "Renderiza o elemento somente após a conclusão do ciclo de vida do componente",
  },
  {
    name: "v-memo",
    description:
      "Renderiza o elemento somente se o valor da expressão for diferente da última renderização",
  },
  {
    name: "v-once",
    description:
      "Renderiza o elemento apenas uma vez, ignorando atualizações posteriores",
  },
  {
    name: "v-slot",
    description: "Define um slot de conteúdo para um componente pai (Shortchut: #)",
  },
  {
    name: "v-is",
    description: "Define o componente que será renderizado dinamicamente pelo elemento",
  },
];
const atributos = [
  {
    name: "key",
    description:
      "Define uma chave única para o elemento, permitindo a otimização de renderização",
  },
  {
    name: "ref",
    description:
      "Define uma referência ao elemento, permitindo o acesso direto a ele. Todas as referencias estarão registradas no this.$refs do componente",
  },
  {
    name: "is",
    description: "Define o componente que será renderizado dinamicamente pelo elemento",
  },
];
const elementos = [
  {
    name: "template",
    description:
      "Define um elemento que não será renderizado no DOM (Usado com: v-if, v-else-if, v-else, v-for, v-slot)",
  },
  {
    name: "slot",
    description: "Define um slot de conteúdo para um componente pai (Shortchut: #)",
  },
  {
    name: "component",
    description: "Define um componente que será renderizado dinamicamente pelo elemento",
  },
];
</script>

<template>
  <div class="group-title">Diretivas</div>
  <AppTable :value="diretivas" :config="tableConfig" class="table-bordered" />
  <div class="group-title">Atributos</div>
  <AppTable :value="atributos" :config="tableConfig" class="table-bordered" />
  <div class="group-title">Elementos</div>
  <AppTable :value="elementos" :config="tableConfig" class="table-bordered" />
</template>
