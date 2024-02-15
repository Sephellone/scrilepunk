<template>
  <div class="match">
    <BaseTitle class="match__title" title="Пройди игру" red :icon="IconType.MACHINE_LINES" />
    <div class="match__description">
      <BaseDescription>
        <template #subtitle>Собери все пары изображений</template>
        <div class="match__field">
          <match-item
            v-for="item in items"
            :key="item.id"
            class="match__item"
            :class="{ __hidden: isPairCollected(item.imageId) }"
            :id="item.imageId"
            :image="item.src"
            :image-open="isCardOpen(item.id)"
            @itemOpened="handleItemClick(item.id)"
          />
        </div>
      </BaseDescription>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { IconType } from "@/types";
import BaseTitle from "@/components/BaseTitle.vue";
import BaseDescription from "@/components/BaseDescription.vue";
import MatchItem from "@/components/MatchGame/MatchItem.vue";
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export interface TileItem {
  id: number;
  imageId: number;
  src: string;
}
export default defineComponent({
  name: "PageMatch",
  components: { MatchItem, BaseDescription, BaseTitle },
  setup() {
    const router = useRouter();
    const collectedIds = ref<number[]>([]);
    const firstSelectedItem = ref<TileItem>();
    const secondSelectedItem = ref<TileItem>();
    const openCards = ref<number[]>([]);

    const items = computed(() => {
      const arr = [];
      for (let i = 0; i <= 9; i++) {
        arr.push({
          id: i,
          imageId: i,
          src: `/img/match/${i}.jpg`,
        });
        arr.push({
          id: i + 20,
          imageId: i,
          src: `/img/match/${i}.jpg`,
        });
      }
      shuffleArray(arr);
      return arr;
    });

    const isPairCollected = (imageId: number) => {
      return collectedIds.value.includes(imageId);
    };

    const isCardOpen = (id: number) => openCards.value.includes(id);

    const compareItems = () => {
      if (secondSelectedItem.value?.imageId === firstSelectedItem.value?.imageId) {
        collectedIds.value.push(firstSelectedItem.value.imageId);
      }
      firstSelectedItem.value = null;
      secondSelectedItem.value = null;
      openCards.value = [];
      if (collectedIds.value.length === items.value.length / 2) {
        router.push({ name: "complete", query: { quest: "match" } });
      }
    };

    const handleItemClick = (id: number) => {
      if (!!firstSelectedItem.value && !!secondSelectedItem.value) return;
      if (!firstSelectedItem.value) {
        firstSelectedItem.value = items.value.find(item => item.id === id);
        openCards.value.push(id);
      } else {
        secondSelectedItem.value = items.value.find(item => item.id === id);
        openCards.value.push(id);

        setTimeout(compareItems, 1000);
      }
    };
    return {
      IconType,
      items,
      openCards,
      isPairCollected,
      isCardOpen,
      handleItemClick,
      collectedIds,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";

.match {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;

  &__description {
    width: 100%;
    height: auto;
  }

  &__title {
    margin-top: 24px;
    margin-bottom: 15px;
  }

  &__field {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2px;
  }

  &__item {
    width: 100%;
    height: 100%;
    transition: all 200ms ease;

    &.__hidden {
      opacity: 0;
      pointer-events: none;
    }
  }

  :deep(.description__default) {
    padding: 8px;
  }
}
</style>
