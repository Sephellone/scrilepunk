<template>
  <div class="rules">
    <BaseTitle class="rules__title" title="Иголка в стоге сена" red :icon="IconType.SCHEMA" />
    <div class="rules__description">
      <BaseDescription show-line>
        <p class="rules__text">
          Значит, ты решил отправиться на поиск потерянных сокровищ Скрайлпанка? Думаю, не
          пожалеешь.
        </p>
        <p class="rules__text">
          Карту сокровищ я не дам, зато дам задания. Справишься - получишь подсказку. Поймешь
          подсказку - сокровище твое.
        </p>
        <p class="rules__text">
          Но торопись, ты не единственный на этом пути. Может так статься, что все, что искал,
          уведут прямо из-под носа.
        </p>
        <p class="rules__text">Удачной охоты!</p>
      </BaseDescription>
    </div>
    <BaseButton class="rules__button" @click="onClick">Start</BaseButton>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import BaseButton from "@/components/BaseButton.vue";
import BaseTitle from "@/components/BaseTitle.vue";
import BaseDescription from "@/components/BaseDescription.vue";
import { IconType } from "@/types";

export default defineComponent({
  name: "PageRules",
  components: { BaseDescription, BaseTitle, BaseButton },
  setup() {
    const router = useRouter();

    const onClick = () => router.push({ name: "captcha" });
    return { IconType, onClick };
  },
});
</script>

<style scoped lang="scss">
.rules {
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

  &__button {
    align-self: flex-end;
    margin-top: 32px;
  }

  &__text:not(:last-child) {
    margin-bottom: 15px;
  }
}
</style>
