<template>
  <div class="base-footer">
    <div class="text">find your way</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseFooter",
});
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.base-footer {
  position: relative;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 8px;
  font-size: 8px;
  line-height: 10px;
  color: $color-red;
  opacity: 0.7;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 10px;
    clip-path: polygon(
      0 0,
      calc(35% + 1px) 0,
      37.5% calc(100% - 1px),
      62.5% calc(100% - 1px),
      calc(65% - 1px) 0,
      100% 0,
      100% 1px,
      65% 1px,
      62.5% 100%,
      37.5% 100%,
      35% 1px,
      0 1px
    );
    background-color: $color-red;
    transform: rotate(180deg);
  }
}
</style>
