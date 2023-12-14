<script>
import DiretivasList from "@/components/DiretivasList.vue";
export default {
  components: {
    DiretivasList,
  },
  data() {
    return {
      items: [
        { title: "Eventos", component: "EventHandling" },
        { title: "Bidings", component: "BidingWays" },
        { title: "Componentes", component: "DinamicComponents" },
        { title: "Diretivas e Atributos", component: "DiretivasList" },
        { title: "Outras Dicas", component: "MoreTips" },
      ],
    };
  },
  methods: {
    showAlertHandler(message) {
      alert(message);
    },
  },
};
</script>
<template>
  <div>
    <h1>Fundamentos</h1>

    <div class="accordion" id="accordionExample">
      <div v-for="item of items" class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="'#' + item.title.split(' ').join('_')"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            {{ item.title }}
          </button>
        </h2>
        <div
          :id="item.title.split(' ').join('_')"
          class="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <component
              v-bind:is="item.component"
              @show-alert="showAlertHandler"
            ></component>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
