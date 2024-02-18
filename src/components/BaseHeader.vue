<template>
  <div class="base-header">
    <img alt="logo" class="logo" src="/img/logo.svg" width="105" height="29" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseHeader",
});
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.base-header {
  position: relative;
  padding: 8px 8px 20px 8px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 12px;
    display: block;
    width: 100%;
    height: 10px;
    background-color: $color-red;
    opacity: 0.5;
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
  }

  &::after {
    content: "ONLY CC35 CERTIFIED AND DHSF 5TH CLASS OFFICERS ARE ALLOWED TO MANIPULATE, ACCESS OR DISABLE THESE DEVICE";
    position: absolute;
    right: 8px;
    bottom: 0;
    display: block;
    width: 96px;
    font-size: 4px;
    line-height: 6px;
    color: $color-red;
    opacity: 0.5;
  }
}
</style>
