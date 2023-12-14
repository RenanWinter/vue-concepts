<script>
export default {
  props: {
    title: {
      type: String,
      default: "Título padrão",
    },
  },
  data() {
    return {
      collapseId: `collapse${Math.random().toString(36).replace(".", "")}`,
    };
  },
};
</script>
<template>
  <div class="pb-4">
    <p class="d-inline-flex gap-1">
      <a
        class="btn btn-outline-primary full-width"
        data-bs-toggle="collapse"
        :href="'#' + collapseId"
        role="button"
        aria-expanded="false"
        :aria-controls="collapseId"
      >
        {{ title }}
      </a>
    </p>
    <div class="collapse" :id="collapseId">
      <div class="card card-body">
        <slot />
      </div>
    </div>
  </div>
</template>
