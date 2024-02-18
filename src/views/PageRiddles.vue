<template>
  <div class="riddles">
    <BaseTitle class="riddles__title" title="Реши ребусы" red :icon="IconType.PHONE" />
    <div v-for="(answer, idx) in answers" :key="idx" class="riddles__item">
      <base-riddle :id="idx" :answer="answer" @correctAnswer="addCorrectAnswer" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { IconType } from "@/types";
import BaseTitle from "@/components/BaseTitle.vue";
import BaseRiddle from "@/components/BaseRiddle.vue";

export default defineComponent({
  name: "PageRiddles",
  components: { BaseRiddle, BaseTitle },
  setup() {
    const router = useRouter();
    const answers = ["реальность", "хотфикс", "экзоскелет"];
    const correctAnswers = ref<string[]>([]);

    const addCorrectAnswer = (v: number) => {
      correctAnswers.value.push(answers[v]);
      if (correctAnswers.value.length === answers.length) {
        router.push({ name: "complete", query: { quest: "riddles" } });
      }
    };

    return { IconType, answers, addCorrectAnswer, correctAnswers };
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.riddles {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;

  &__title {
    margin-top: 30px;
    margin-bottom: 15px;
  }

  &__item {
    margin-bottom: 36px;
  }
}
</style>
