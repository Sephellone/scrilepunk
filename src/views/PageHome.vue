<template>
  <div class="home">
    <BaseTitle class="home__title" title="404" red :icon="IconType.SCULL"></BaseTitle>
    <div class="home__description">
      <BaseDescription show-line>
        <template #subtitle> Ты ошибся адресом </template>
        <p>Не трогай адресную строку ручками >_></p>
      </BaseDescription>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import BaseDescription from "@/components/BaseDescription.vue";
import BaseTitle from "@/components/BaseTitle.vue";
import { IconType } from "@/types";

export default defineComponent({
  name: "PageHome",
  computed: {
    IconType() {
      return IconType;
    },
  },
  components: { BaseTitle, BaseDescription },
});
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;

  &__description {
    width: 100%;
    height: auto;
  }

  &__title {
    margin-top: 30px;
    margin-bottom: 15px;
  }

  :deep(.description) {
    background-color: rgba($color-red, 0.15);
    color: $color-red;
  }
}
</style>
