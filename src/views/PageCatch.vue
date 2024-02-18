<template>
  <div class="catch">
    <base-title class="catch__title" title="Собери Scrile" red :icon="IconType.DRONE" />
    <div class="catch__description">
      <base-input class="catch__input" placeholder="..." readonly :value="inputedText" />
      <base-description>
        <div class="catch__field">
          <flying-button
            v-for="(letter, idx) in letters"
            :key="idx"
            class="catch__letter"
            :text="letter"
            :flying="buttonsFlying"
            @click="onLetterClick(letter)"
          />
        </div>
      </base-description>
    </div>
    <div class="catch__buttons-wrapper">
      <base-button class="catch__button __reset" blue small @click="onReset">reset</base-button>
      <base-button class="catch__button" small @click="onStart">start</base-button>
    </div>
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
import FlyingButton from "@/components/FlyingButton.vue";

export default defineComponent({
  name: "PageCatch",
  components: { FlyingButton, BaseInput, BaseDescription, BaseTitle, BaseButton },
  setup() {
    const router = useRouter();
    const answer = "scrile";
    const inputedText = ref("");
    const buttonsFlying = ref(false);

    const checkAnswer = () => {
      if (inputedText.value.toLowerCase().trim() === answer) {
        router.push({ name: "complete", query: { quest: "catch" } });
      }
    };

    const letters = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];

    const onStart = () => {
      buttonsFlying.value = true;
    };

    const onReset = () => {
      inputedText.value = "";
      buttonsFlying.value = false;
    };

    const onLetterClick = (letter: string) => {
      if (!buttonsFlying.value) return;
      inputedText.value = inputedText.value + letter;
      checkAnswer();
    };

    return { IconType, letters, inputedText, buttonsFlying, onStart, onReset, onLetterClick };
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.catch {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;

  &__description {
    width: 100%;
    height: auto;
    margin-top: 16px;
  }

  &__title {
    margin-top: 30px;
    margin-bottom: 15px;
  }

  &__input {
    margin-bottom: 16px;
  }

  &__buttons-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 16px;
  }

  &__field {
    position: relative;
    width: 100%;
    height: 400px;
  }
}
</style>
