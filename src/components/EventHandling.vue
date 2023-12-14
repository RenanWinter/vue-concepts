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
          title: "Emitindo eventos",
          items: [
            "//* Emitindo eventos pelo template*/",
            "$emit('enlarge-text')",
            {
              tag: "button",
              class: "btn btn-primary",
              text:
                "<button @click=\"$emit('show-alert', 'Chama a Mãe que o pai tá brabo')\">CLICA NESTE EXEMPLO</button>",
              do: () => {
                this.$emit("show-alert", "Chama a Mãe que o pai tá brabo");
              },
            },
          ],
        },
        {
          title: "Escutando evento dos componentes",
          items: [
            "<-- Exemplo do listner do evento acima -->",
            '<EventHandling @show-alert="(param)=>alert(params)" />',
            {
              tag: "div",
              class: "alert alert-info",
              text:
                "O evento pode ser capturado por qualquer componente que esteja acima do componente que emitiu o evento.",
            },
            '<Component1 v-on:nome-evento="doThis" />',
            '<Component1 @nome-evento="doThis" />',
            '<Button @click="doThis" >Botão</button>',
            '<button v-on="{ mousedown: doThis, mouseup: doThat }"></button>',
          ],
        },
        {
          title: "Exemplo de Modificadores de evento",
          items: [
            "<form @submit.prevent></form>",
            '<button @click.stop.prevent="doThis"></button>',
            '<input @keyup.enter="onEnter" />',
            '<button v-on:[event]="doThis"></button>',
            {
              tag: "div",
              class: "alert alert-info",
              text:
                "Existem outros modificadores de eventos, como .capture, .self, .once, .passive, etc.",
            },
          ],
        },
        {
          title: "Atenção",
          items: [
            {
              tag: "div",
              class: "alert alert-danger",
              text: "Cuidado com a multipla emissão e captura de eventos.",
            },
            {
              tag: "div",
              texts: [
                "Todos os eventos são retransmitidos para os componentes pais, então se for emitido um evento customizado com o mesmo nome de um evento nativo, o evento nativo será emitido também.",
                "Por Exemplo: ",
                "<button @click=\"$emit('click')\">CLICA NESTE EXEMPLO</button>",
                "O evento click será emitido e o evento nativo click também será emitido. Quem estiver escutando os eventos deste componente, receberá os dois eventos.",
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
