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
          title: "Registrando os componentes",
          items: [
            {
              tag: "div",
              text:
                "Para registrar um componente globalmente, basta utilizar o Vue.component() como abaixo:",
            },
            {
              tag: "pre",
              class: "code",
              texts: [
                "import GlobalComponent from '@components/GlobalComponent.vue';",
                "const app = createApp(App)",
                '  .component("ComponenteGlobal", GlobalComponent)',
                '  .mount("#app");',
              ],
            },
            {
              tag: "div",
              text:
                "Para registrar um componente localmente, basta utilizar o components do objeto export default:",
            },
            {
              tag: "pre",
              class: "code",
              texts: [
                "import LocalComponent from '@components/LocalComponent.vue';",
                "export default {",
                "  components: {",
                "    LocalComponent",
                "  }",
                "}",
              ],
            },
          ],
        },
        {
          title: "Injetando o componente no template",
          items: [
            '<component :is="tagDoComponente"></component>',
            {
              tag: "div",
              class: "alert alert-warning",
              text:
                "No exemplo acima tagDoComponente é uma variável que contém o nome do componente que será injetado.",
            },
            '<component :is="ComponenteImportado"></component>',
            {
              tag: "div",
              class: "alert alert-warning",
              text:
                "Já neste outro caso é passada a referencia direta para o import do componente",
            },
          ],
        },
        {
          title: "Renderização",
          items: [
            {
              tag: "div",
              text:
                "Componentes são montados a cada renderização. Pode-se utilizar o KeepAlive para manter o estado do componente em casos como tabs por exemplo:",
            },
            {
              tag: "pre",
              text: '<Keepalive><component :is="tabComponent"/> </Keepalive>',
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
