<template>
  <div class="test">
    <BaseButton
      v-for="(button, idx) in buttons"
      :key="idx"
      class="test__button"
      @click="handleClick(button.component)"
      >{{ button.name }}</BaseButton
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "@/components/BaseButton.vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "PageTest",
  components: { BaseButton },
  setup() {
    const buttons = [
      {
        name: "01 правила + captcha",
        component: "rules",
      },
      {
        name: "02 match pics",
        component: "match",
      },
      {
        name: "03 ребусы",
        component: "riddles",
      },
      {
        name: "04 морзянка",
        component: "translate",
      },
      {
        name: "05 поймай буквы",
        component: "catch",
      },
      {
        name: "06 ебучая форма",
        component: "form",
      },
      {
        name: "07 мегкапча",
        component: "megaCaptcha",
      },
    ];

    const router = useRouter();
    const handleClick = (v: string) => {
      router.push({ name: v });
    };

    return { buttons, handleClick };
  },
});
</script>

<style scoped lang="scss"></style>
