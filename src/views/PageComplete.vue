<template>
  <div class="complete">
    <BaseTitle class="complete__title" title="Complete" green :icon="IconType.SCULL" />
    <div class="complete__description">
      <BaseDescription>
        <p class="complete__text">Награда ждет тебя здесь...</p>
        <img
          class="complete__image"
          :src="imageSrc"
          alt="Локация с наградой"
          width="200"
          height="200"
        />
      </BaseDescription>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { IconType } from "@/types";
import BaseTitle from "@/components/BaseTitle.vue";
import BaseDescription from "@/components/BaseDescription.vue";

export default defineComponent({
  name: "PageComplete",
  components: { BaseDescription, BaseTitle },
  props: {
    quest: { type: String, required: true },
  },
  setup(props) {
    const imageSrc = computed(() => `/img/complete/${props.quest}.jpg`);

    return {
      IconType,
      imageSrc,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";

.complete {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;

  &__description {
    width: 100%;
    height: auto;
  }

  &__title {
    align-self: flex-start;
    margin-top: 30px;
    margin-bottom: 15px;
  }

  &__button {
    align-self: flex-end;
    margin-top: 32px;
  }

  &__text {
    margin-bottom: 15px;
  }

  :deep(.description) {
    color: $color-green;
    background-color: rgba($color-green, 0.15);
    &::after {
      background-color: $color-green;
    }
  }

  &__image {
    display: block;
    width: 100%;
    max-width: 400px;
    height: auto;
  }
}
</style>
