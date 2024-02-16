<template>
  <div class="captcha">
    <BaseTitle class="captcha__title" title="Докажи, что ты человек" red :icon="IconType.HEAD" />
    <div class="captcha__description">
      <BaseDescription>
        <template #subtitle>{{subtitles[step]}}</template>
        <div class="captcha__field">
          <div
            v-for="tile in dynamicTiles"
            :key="tile.id"
            class="captcha__item"
            :class="{ __active: checkSelectedTile(tile.id) }"
            @click="handleTileClick(tile.id)"
          >
            <img class="captcha__image" :src="tile.src" alt="" width="100" height="100" />
          </div>
        </div>
        <div v-if="showError" class="captcha__error">Выбор неверный, попробуй еще раз</div>
      </BaseDescription>
    </div>
    <BaseButton class="captcha__button" @click="onCheckButtonClick">Check</BaseButton>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { IconType } from '@/types'
import BaseTitle from '@/components/BaseTitle.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseDescription from '@/components/BaseDescription.vue'

export default defineComponent({
  name: 'PageCaptcha',
  components: { BaseDescription, BaseButton, BaseTitle },
  setup() {
    const MAX_STEP = 2
    const solutions = [
      [1, 3, 4, 6],
      [2, 5, 4, 6],
      [1, 2, 3, 5, 6]
    ]

    const subtitles = ["Выбери все изображения, где есть светофоры", "Выбери все изображения с дорожными знаками", "Выбери все изображения, где есть самокаты"]

    const router = useRouter()

    const step = ref(0)
    const answers = ref<number[]>([])
    const showError = ref(false)

    const dynamicTiles = computed(() => {
      const arr = []
      for (let i = 1; i <= 9; i++) {
        arr.push({
          id: i,
          src: `/img/captcha/${step.value + 1}/${i}.jpg`
        })
      }
      return arr
    })

    const checkSelectedTile = (id: number) => answers.value.includes(id)

    const handleTileClick = (id: number) => {
      if (showError.value) {
        showError.value = false
      }
      if (!answers.value.includes(id)) {
        answers.value.push(id)
      } else {
        answers.value = answers.value.filter((i) => i !== id)
      }
    }

    const puzzleSolved = computed(() => {
      return (
        answers.value.length &&
        answers.value.length === solutions[step.value].length &&
        answers.value.every((value) => solutions[step.value].includes(value))
      )
    })

    const onCheckButtonClick = () => {
      if (!answers.value.length) {
        return
      }
      if (!puzzleSolved.value) {
        showError.value = true
        return
      } else if (step.value < MAX_STEP) {
        step.value = step.value + 1
        answers.value = []
        showError.value = false
      } else {
        router.push({ name: 'complete', query: { quest: 'captcha' } })
      }
    }

    return {
      IconType,
      dynamicTiles,
      subtitles,
      step,
      showError,
      handleTileClick,
      checkSelectedTile,
      onCheckButtonClick
    }
  }
})
</script>

<style scoped lang="scss">
@import '@/assets/variables.scss';

.captcha {
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

  &__field {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
  }

  &__item {
    border: 1px solid rgba($color-blue, 0.3);
    width: 100%;
    height: 100%;
    &.__active {
      border-color: darken($color-blue, 10%);
      outline: 2px solid darken($color-blue, 10%);
      outline-offset: -1px;
    }
  }

  &__image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &__error {
    color: $color-red;
  }
}
</style>
