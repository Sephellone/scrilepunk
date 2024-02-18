<template>
  <div class="checkbox">
    <label>
      <input type="checkbox" :checked="checked" @change="$emit('change', label)" />
      <span class="checkbox__label" :class="{ __checked: checked }">{{ label }}</span>
    </label>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseCheckbox",
  props: {
    label: { type: String, required: true },
    checked: { type: Boolean, required: true },
  },
  emits: ["change"],
});
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";

.checkbox {
  position: relative;
  cursor: pointer;

  input[type="checkbox"] {
    position: absolute;
    left: -999px;
    opacity: 0;
  }

  &__label {
    position: relative;
    padding-left: 24px;
    display: flex;
    align-items: center;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      display: block;
      width: 16px;
      height: 16px;
      border: 1px solid $color-blue;
      transform: translateY(-50%);
    }

    &.__checked {
      &::before {
        background-color: rgba($color-blue, 0.15);
      }
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        display: block;
        width: 12px;
        height: 8px;
        border-bottom: 2px solid $color-blue;
        border-left: 2px solid $color-blue;
        transform: translateY(-70%) translateX(20%) rotate(-50deg);
      }
    }
  }
}
</style>
