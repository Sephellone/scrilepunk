<template>
  <div class="home">
    <BaseTitle class="home__title" title="Игра на выживание" red :icon="IconType.SCULL"></BaseTitle>
    <div class="home__description">
      <BaseDescription show-line>
        <template #subtitle> Короткое описание задания </template>
        <p>
          Разнообразный и богатый опыт реализация намеченных плановых заданий способствует
          подготовки и реализации форм развития.
        </p>
        <br />
        <p>
          Товарищи! укрепление и развитие структуры представляет собой интересный эксперимент
          проверки модели развития. С другой стороны рамки и место обучения кадров требуют от нас
          анализа модели развития. Таким образом реализация намеченных плановых заданий обеспечивает
          широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в
          отношении поставленных задач
        </p>
      </BaseDescription>
    </div>
    <BaseButton class="home__button">Start</BaseButton>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import BaseDescription from "@/components/BaseDescription.vue";
import BaseTitle from "@/components/BaseTitle.vue";
import { IconType } from "@/types";
import BaseButton from "@/components/BaseButton.vue";

export default defineComponent({
  name: "PageHome",
  computed: {
    IconType() {
      return IconType;
    },
  },
  components: { BaseButton, BaseTitle, BaseDescription },
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

  &__button {
    align-self: flex-end;
    margin-top: 32px;
  }

  :deep(.description) {
    background-color: rgba($color-green, 0.15);
  }
}
</style>
