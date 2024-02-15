<template>
  <div class="match-item" :class="{ __animated: animated }" @click="handleClick">
    <img
      class="match-item__image"
      :class="{ __open: imageOpen }"
      :src="image"
      alt=""
      width="100"
      height="100"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, toRef, watch } from "vue";
import debounce from "debounce";

export default defineComponent({
  name: "MatchItem",
  props: {
    image: { type: String, required: true },
    id: { type: Number, required: true },
    imageOpen: { type: Boolean, required: true },
  },
  setup(props, { emit }) {
    const animated = ref(false);

    const animateTile = () => {
      animated.value = true;
      setTimeout(() => {
        animated.value = false;
      }, 100);
    };

    const handleClick = debounce(() => {
      if (props.imageOpen) return;
      setTimeout(() => {
        emit("itemOpened")
      }, 100)
      animateTile();
    }, 200);

    watch(toRef(props, "imageOpen"), animateTile)

    return { animated, handleClick };
  },
});
</script>
<style scoped lang="scss">
@import "@/assets/variables.scss";
.match-item {
  cursor: pointer;
  background-color: rgba($color-blue, 0.4);
  transition-property: transform, filter;
  transition: 100ms ease;
  transform: rotate3d(0, 0, 0, 0);
  filter: drop-shadow(0 0 0 $color-blue);

  &.__animated {
    transform: rotate3d(0, 1, 0, 90deg);
    filter: drop-shadow(0 0 17px $color-blue);
  }

  &__image {
    display: block;
    width: 100%;
    height: auto;
    background-color: white;
    opacity: 0;

    &.__open {
      opacity: 1;
    }
  }
}
</style>
