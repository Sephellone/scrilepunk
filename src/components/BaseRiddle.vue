<template>
  <div class="base-riddle">
    <base-description>
      <img class="base-riddle__image" :src="imageSrc" alt="riddle" width="100" height="100" />
    </base-description>
    <base-input class="base-riddle__input" placeholder="Ответ..." @inputValue="onInput" />
    <p v-if="error" class="base-riddle__error">Не угадал. Попробуй еще раз</p>
    <base-button v-if="!correct" class="base-riddle__button" small @click="checkAnswer"
      >Check</base-button
    >
    <div v-else class="base-riddle__correct"></div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseDescription from "@/components/BaseDescription.vue";
import BaseButton from "@/components/BaseButton.vue";

export default defineComponent({
  name: "BaseRiddle",
  components: { BaseButton, BaseDescription, BaseInput },
  props: {
    answer: { type: String, required: true },
    id: { type: Number, required: true },
  },
  setup(props, { emit }) {
    const error = ref(false);
    const userAnswer = ref("");
    const correct = ref(false);

    const imageSrc = computed(() => `/img/riddles/${props.id}.png`);

    const onInput = (v: string) => {
      if (error.value) {
        error.value = false;
      }
      userAnswer.value = v;
    };

    const checkAnswer = () => {
      const checked = userAnswer.value.toLowerCase().trim() === props.answer;
      if (checked) {
        correct.value = true;
        emit("correctAnswer", props.id);
        return;
      } else {
        error.value = true;
        return;
      }
    };

    return { error, correct, imageSrc, onInput, checkAnswer };
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.base-riddle {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &__image {
    display: block;
    width: 100%;
    height: auto;
  }

  &__input {
    margin: 16px 0;
  }

  &__error {
    color: $color-red;
  }

  &__button {
    align-self: flex-end;
  }
  &__correct {
    position: relative;
    align-self: flex-end;
    width: 35px;
    height: 35px;
    background-color: rgba($color-green, 0.15);
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%);

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      width: 20px;
      height: 15px;
      border-bottom: 2px solid $color-green;
      border-left: 2px solid $color-green;
      transform: translate(-50%, -70%) rotate(-45deg);
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $color-green;
      clip-path: $polygon;
    }
  }
}
</style>
