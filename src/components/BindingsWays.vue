<script>
import GroupTexts from "@/components/GroupTexts.vue";
export default {
  components: {
    GroupTexts,
  },
  data() {
    return {
      groups: [
        {
          title: "Bind de atributos",
          items: [
            {
              tag: "div",
              class: "group-title",
              text: "Métodos básicos de bind",
              description:
                "Para fazer o bind de atributos, basta utilizar o v-bind:nomeDoAtributo ou :nomeDoAtributo",
            },

            {
              tag: "pre",
              class: "code",
              texts: [
                '<div v-bind:nomeDoAtributo="valorDoAtributo"></div>',
                '<div :nomeDoAtributo="valorDoAtributo"></div>',
                '<div :id="`list-${id}`"></div>',
                "",
                "//*Se dinamicId for nulo ou undefined atributo será removido do elemento exceto para atributos boleanos*/",
                '<div v-bind:id="dynamicId"></div>',
                "",
                "//* formas de bind dinamico de atrubutos */",
                '<div v-bind:[atributo]="valorDoAtributo"></div>',
                "atributos={id:'teste', class:'teste2'}",
                '<div v-bind="atributos"></div>',
                '<time :title="toTitleDate(date)" :datetime="date"/>',
              ],
            },
            {
              tag: "div",
              class: "group-title",
              text: "Bind de classes e estilos",
              description:
                "Classes e estilos funcionam de forma semelhante aos atributos, porém com algumas diferenças. Para fazer o bind de classes, basta utilizar o v-bind:class ou :class",
            },
            {
              tag: "pre",
              class: "code",
              texts: [
                '<div v-bind:class="nomeDasClasses"></div>',
                '<div :class="nomeDaClasse"></div>',
                '<div :class="{ active: isActive }"></div>',
                "//* As classes serão concatenadas com o class nativo */",
                '<div class="static" :class="{ active: isActive, \'text-danger\': hasError }"></div>',
                "//* Array de condições e referencias */",
                "<div :class=\"[isActive ? activeClass : '', errorClass]\"></div>",
                '<div :class="[{ active: isActive }, errorClass]"></div>',
              ],
            },
            {
              tag: "div",
              text:
                "Para fazer o bind de estilos, basta utilizar o v-bind:style ou :style",
            },
            {
              tag: "pre",
              class: "code",
              texts: [
                '<div v-bind:style="nomeDoEstilo"></div>',
                '<div :style="nomeDoEstilo"></div>',
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>
<template>
  <GroupTexts :groups="groups" />
</template>
