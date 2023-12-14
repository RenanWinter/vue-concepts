import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import i18nPlugin from "./plugins/i18n";
import router from "./router";
import store from "./store";

import BasicaoItem from "@/components/BasicoItem.vue";
import BindingsWays from "@/components/BindingsWays.vue";
import DirectivesBuiltin from "@/components/DirectivesBuiltin.vue";
import EventHandling from "@/components/EventHandling.vue";
import MoreTips from "@/components/MoreTips.vue";
import DinamicComponents from "./components/DinamicComponents.vue";
createApp(App)
  .component("EventHandling", EventHandling)
  .component("BasicaoItem", BasicaoItem)
  .component("BidingWays", BindingsWays)
  .component("DinamicComponents", DinamicComponents)
  .component("MoreTips", MoreTips)
  .component("DirectivesBuiltin", DirectivesBuiltin)
  .use(router)
  .use(store)
  .use(i18nPlugin, {
    slots: {
      tooling: "Tooling 🛠 - VIA TRANSLATE PLUGIN",
    },
  })
  .mount("#app");
