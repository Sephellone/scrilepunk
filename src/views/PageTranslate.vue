<template>
  <div class="translate">
    <BaseTitle
      class="translate__title"
      title="Переведите"
      red
      :icon="IconType.TRANSLATE"
    ></BaseTitle>
    <div class="translate__description">
      <BaseDescription>
        <p class="translate__text">
          .-.- .-.. ..-- -... .-.. ..-- -.. ...- .- .-- .- ... -.- .-. .. .--. -
        </p>
      </BaseDescription>
      <base-input class="translate__input" placeholder="Ответ..." @inputValue="onInput" />
      <p v-if="error" class="translate__error">В переводе ошибка. Попробуйте еще раз</p>
    </div>
    <BaseButton class="translate__button" small @click="checkAnswer">check</BaseButton>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { IconType } from "@/types";
import BaseButton from "@/components/BaseButton.vue";
import BaseTitle from "@/components/BaseTitle.vue";
import BaseDescription from "@/components/BaseDescription.vue";
import BaseInput from "@/components/BaseInput.vue";

export default defineComponent({
  name: "PageTranslate",
  components: { BaseInput, BaseDescription, BaseTitle, BaseButton },
  setup() {
    const router = useRouter();
    const error = ref(false);
    const answer = "я люблю джаваскрипт";
    const inputedText = ref("");

    const onInput = (value: string) => {
      inputedText.value = value;
      if (error.value) {
        error.value = false;
      }
    };

    const checkAnswer = () => {
      if (inputedText.value.toLowerCase().trim() !== answer) {
        error.value = true;
      } else {
        router.push({ name: "complete", query: { quest: "translate" } });
      }
    };

    return { IconType, error, checkAnswer, onInput };
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.translate {
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

  &__text {
    font-size: 20px;
    line-height: 24px;
  }

  &__error {
    padding: 8px;
    color: $color-red;
  }

  &__input {
    margin-top: 16px;
  }

  &__button {
    align-self: flex-end;
    margin-top: 32px;
  }
}
</style>
