<template>
  <div class="title" :class="{ __red: red, __green: green, __blue: blue }">
    <svg class="title__icon" width="36px" height="36px">
      <use :href="iconSrc"></use>
    </svg>
    <h1 class="title__text">{{ title }}</h1>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import type { PropType } from "vue";
import type { IconType } from "@/types";

export default defineComponent({
  name: "BaseTitle",
  props: {
    title: { type: String, required: true },
    icon: { type: String as PropType<IconType>, required: true },
    red: { type: Boolean },
    green: { type: Boolean },
    blue: { type: Boolean },
  },
  setup(props) {
    const iconSrc = computed(() => `/img/icons/icon-${props.icon}.svg#icon`);
    return { iconSrc };
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.title {
  display: flex;
  color: inherit;
  align-self: flex-start;

  &.__red {
    color: $color-red;
    filter: drop-shadow(0 0 8px $color-red);
  }

  &.__green {
    color: $color-green;
    filter: drop-shadow(0 0 8px $color-green);
  }

  &.__blue {
    color: $color-blue;
    filter: drop-shadow(0 0 8px $color-blue);
  }

  &__text {
    margin: 0;
    font-size: 32px;
    line-height: 36px;
    color: inherit;
  }

  &__icon {
    margin-right: 10px;
    color: inherit;
    flex-shrink: 0;
  }
}
</style>
