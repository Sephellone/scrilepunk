<template>
  <div class="description">
    <div class="description__subtitle">
      <slot name="subtitle"></slot>
    </div>
    <div class="description__default" :class="{ __line: showLine }">
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseDescription",
  props: {
    showLine: { type: Boolean },
  },
});
</script>
<style scoped lang="scss">
@import "@/assets/variables.scss";
.description {
  position: relative;
  width: 100%;
  height: 100%;
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%);
  background-color: rgba($color-blue, 0.15);

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $color-blue;
    clip-path: polygon(
      1px 0,
      100% 0,
      100% calc(100% - 20px),
      calc(100% - 20px) 100%,
      0 100%,
      0 1px,
      1px 1px,
      1px calc(100% - 1px),
      calc(100% - 20px) calc(100% - 1px),
      calc(100% - 1px) calc(100% - 20px),
      calc(100% - 1px) 1px,
      1px 1px
    );
  }
  &__subtitle {
    display: block;
    width: 100%;
    padding: 0 16px;
    background-color: rgba($color-blue, 0.3);
    color: $color-blue;
    border-bottom: 1px solid rgba($color-blue, 0.5);
  }

  &__default {
    position: relative;
    padding: 16px;

    &.__line {
      padding: 16px 16px 16px 26px;

      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 12px;
        display: block;
        width: 2px;
        height: 100%;
        background-color: $color-blue;
        transform: translateY(-50%);
        opacity: 0.7;
      }
    }
  }
}
</style>
