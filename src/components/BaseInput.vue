<template>
  <input
    class="base-input"
    type="text"
    v-model="value"
    :placeholder="placeholder"
    @input="onInput"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "BaseInput",
  props: {
    placeholder: { type: String, default: "" },
  },
  setup(props, { emit }) {
    const value = ref("");
    const onInput = () => {
      emit("inputValue", value.value);
    };

    return {
      value,
      onInput,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";

.base-input {
  display: block;
  width: 100%;
  padding: 8px;
  font-family: "PT Mono", Inter, sans-serif;
  text-transform: uppercase;
  font-size: 16px;
  line-height: 20px;
  background-color: rgba($color-blue, 0.15);
  border: 1px solid rgba($color-blue, 0.5);
  color: $color-blue;
  box-shadow: none;

  &:focus {
    border-color: $color-blue;
    filter: drop-shadow(0 0 8px $color-blue);
    outline: none;
  }
}
</style>
