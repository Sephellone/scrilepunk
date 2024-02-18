<template>
  <div class="flying-button" :style="style" @click="$emit('click', text)">{{ text }}</div>
</template>
<script lang="ts">
import { defineComponent, ref, toRef, watch } from "vue";

export default defineComponent({
  name: "FlyingButton",
  props: {
    text: { type: String, required: true },
    flying: { type: Boolean, required: true },
  },
  emits: ["click"],
  setup(props) {
    let interval;
    const style = ref({ left: "50%", top: "50%" });

    const changeButtonPosition = () => {
      style.value = {
        left: Math.random() * 100 + "%",
        top: Math.random() * 100 + "%",
      };
    };

    const makeButtonFloat = () => {
      if (interval === null || interval === undefined) {
        interval = setInterval(changeButtonPosition, 1500);
      }
    };

    watch(toRef(props, "flying"), () => {
      if (props.flying) {
        makeButtonFloat();
      } else {
        clearInterval(interval);
        interval = null;
        style.value = { left: "50%", top: "50%" };
      }
    });

    return { style };
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";

.flying-button {
  position: absolute;
  top: 50%;
  left: 50%;
  width: min-content;
  padding: 4px;
  font-size: 20px;
  line-height: 22px;
  border-radius: 3px;
  border: 1px solid rgba($color-blue, 0.4);
  background-color: $color-bg;
  color: $color-blue;
  cursor: pointer;
  transition: all 1500ms ease;
}
</style>
