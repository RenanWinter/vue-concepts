<script>
import WelcomeItem from "./WelcomeItem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import SupportIcon from "./icons/IconSupport.vue";
import ToolingIcon from "./icons/IconTooling.vue";

export default {
  components: {
    WelcomeItem,
    CommunityIcon,
    DocumentationIcon,
    EcosystemIcon,
    SupportIcon,
    ToolingIcon,
  },
  data() {
    return {
      listners: {
        "icon-click": this.onClick,
        clicked: this.onClick,
      },
      subtitle: "Vue.js",
      nome: "Renan",
    };
  },
  methods: {
    async onClick() {
      await this.$nextTick();
      this.$refs.documentation.changeTitle("Documentation - Alterada por ref");
    },
  },
};
</script>

<template>
  <div class="px-4">
    <div>TEste</div>
    <WelcomeItem ref="documentation" @icon-click="onClick" v-on="listners">
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Exemplo $ref clicando no icone</template>

      Ao clicar no icone será chamada uma função interna do WelcomeItem através do
      this.$refs.documentation.changeTitle('...')
    </WelcomeItem>

    <WelcomeItem ref="Translation - Plugin">
      <template #icon><ToolingIcon /></template>
      <template #heading>{{ $translate("slots.tooling") }}</template>
      O texto renderizado acima foi traduzido pelo plugin customizado.
    </WelcomeItem>

    <WelcomeItem ref="ecosystem">
      <template #icon>
        <EcosystemIcon />
      </template>
      <template #heading>Ecosystem</template>

      Get official tools and libraries for your project:
      <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
      <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
      <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener"
        >Vue Test Utils</a
      >, and
      <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener"
        >Vue Dev Tools</a
      >. If you need more resources, we suggest paying
      <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener"
        >Awesome Vue</a
      >
      a visit.
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <CommunityIcon />
      </template>
      <template #heading>Community</template>

      Got stuck? Ask your question on
      <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>, our
      official Discord server, or
      <a
        href="https://stackoverflow.com/questions/tagged/vue.js"
        target="_blank"
        rel="noopener"
        >StackOverflow</a
      >. You should also subscribe to
      <a href="https://news.vuejs.org" target="_blank" rel="noopener">our mailing list</a>
      and follow the official
      <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
      twitter account for latest news in the Vue world.
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <SupportIcon />
      </template>
      <template #heading>Support Vue</template>

      As an independent project, Vue relies on community backing for its sustainability.
      You can help us by
      <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener"
        >becoming a sponsor</a
      >.
    </WelcomeItem>
  </div>
</template>
