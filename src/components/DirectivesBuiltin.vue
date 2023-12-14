<script>
import GroupTexts from "@/components/GroupTexts.vue";
export default {
  components: {
    GroupTexts,
  },
  data() {
    return {
      groups: [],
    };
  },
};
</script>
<template>
  <GroupTexts :groups="groups" />
</template>
