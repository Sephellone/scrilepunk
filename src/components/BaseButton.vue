<template>
  <component
    class="base-button"
    :is="to ? 'router-link' : 'button'"
    :to="to"
    :class="{ __blue: blue, __red: red, __small: small }"
    @click="$emit('click')"
  >
    <slot />
    <span class="base-button__icon">
      <slot name="icon">></slot>
    </span>
  </component>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { RouteLocation } from "vue-router";

export default defineComponent({
  name: "BaseButton",
  props: {
    to: { type: Object as PropType<RouteLocation> },
    red: { type: Boolean, default: false },
    blue: { type: Boolean, default: false },
    small: { type: Boolean, default: false },
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";

.base-button {
  display: flex;
  align-items: center;
  padding: 4px;
  appearance: none;
  border: none;
  outline: none;
  background-color: transparent;
  color: $color-green;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 20px;
  line-height: 24px;
  font-family: "PT Mono", sans-serif;
  filter: drop-shadow(0 0 4px rgba($color-green, 0.5));

  &:hover,
  &:focus,
  &:active {
    filter: drop-shadow(0 0 7px rgba($color-green, 1));
  }

  &__icon {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    padding: 8px 14px;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba($color-green, 0.1);
      clip-path: polygon(0 0, 100% 0, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%);
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $color-green;
      clip-path: polygon(
        1px 0,
        100% 0,
        100% calc(100% - 5px),
        calc(100% - 5px) 100%,
        0 100%,
        0 1px,
        1px 1px,
        1px calc(100% - 1px),
        calc(100% - 5px) calc(100% - 1px),
        calc(100% - 1px) calc(100% - 5px),
        calc(100% - 1px) 1px,
        1px 1px
      );
    }
  }

  &.__small {
    font-size: 14px;
    line-height: 16px;

    &__icon {
      padding: 4px 8px;
    }
  }

  &.__red {
    color: $color-red;
    filter: drop-shadow(0 0 4px rgba($color-red, 0.5));

    &:hover,
    &:focus,
    &:active {
      filter: drop-shadow(0 0 7px rgba($color-red, 1));
    }

    .base-button__icon {
      &::before {
        background-color: rgba($color-red, 0.15);
      }
      &::after {
        background-color: $color-red;
      }
    }
  }

  &.__blue {
    color: $color-blue;
    filter: drop-shadow(0 0 4px rgba($color-blue, 0.5));

    &:hover,
    &:focus,
    &:active {
      filter: drop-shadow(0 0 7px rgba($color-blue, 1));
    }

    .base-button__icon {
      &::before {
        background-color: rgba($color-blue, 0.15);
      }
      &::after {
        background-color: $color-blue;
      }
    }
  }
}
</style>
