<script>
export default {
  props: {
    config: {
      type: Object,
      required: true,
    },
    value: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      items: [],
      headers: this.config.columns.map((column) => column.label),
    };
  },
  watch: {
    value: {
      immediate: true,
      handler(value) {
        this.items = value.map((record) => {
          const columns = this.config.columns.map((column) => {
            return record[column.field];
          });
          return {
            id: record.id,
            record,
            columns,
          };
        });
      },
    },
  },
};
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="header in headers" :key="header">{{ header }}</th>
        <th v-if="config.actions">Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <td v-for="column in item.columns">{{ column }}</td>
        <td v-if="config.actions">
          <button
            v-for="action in config.actions"
            :key="action.label"
            v-on:click="() => action.handler(item.record)"
            class="btn"
            :class="action.color"
          >
            <i :class="action.icon" />
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.btn {
  border-radius: 100%;
  margin: 0px 5px;
}
</style>
