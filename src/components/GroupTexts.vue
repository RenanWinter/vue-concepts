<script>
export default {
  props: {
    groups: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<template>
  <div class="d-flex flex-column gap-4">
    <template v-for="group of groups">
      <div class="group-title">{{ group.title }}</div>
      <div class="px-4">
        <div v-for="item of group.items">
          <pre
            v-if="typeof item === 'string'"
            :class="{ 'comment bold text-success': item.text?.trim().startsWith('//') }"
            v-text="item"
          />
          <component
            v-else
            :is="item.tag || 'pre'"
            :class="[
              item.class,
              { 'comment bold text-success': item.text?.trim().startsWith('//') },
            ]"
            @click="item.do"
          >
            <span v-if="item.text"> {{ item.text }} </span>

            <template v-else-if="item.texts">
              <span
                v-for="text of item.texts"
                :class="[
                  item.class,
                  { 'comment bold text-success': text?.trim().startsWith('//') },
                ]"
              >
                {{ text }}
                <br />
              </span>
            </template>
          </component>
          <div v-if="item.description" v-html="item.description"></div>
        </div>
      </div>
    </template>
  </div>
</template>
