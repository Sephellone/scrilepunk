<template>
  <div class="form">
    <base-title class="form__title" title="Заполни форму" red :icon="IconType.SCHEMA" />
    <div class="form__description">
      <base-description>
        <template #subtitle> Введи сегодняшнюю дату </template>
      </base-description>
      <base-input class="form__input" readonly :value="rangeValue.toLocaleDateString('ru-RU')" />
      <input
        class="form__range"
        type="range"
        :value="Number(rangeValue)"
        :min="Number(min)"
        :max="Number(max)"
        @change="onRangeChange"
      />
      <base-description>
        <template #subtitle> В каком городе ты сейчас находишься? </template>
      </base-description>
      <div class="form__checkbox-field">
        <base-checkbox
          v-for="(city, idx) in cities"
          :key="idx"
          class="form__checkbox"
          :checked="isCheckboxChecked(city)"
          :label="city"
          @change="handleCheckbox"
        />
      </div>
      <p v-if="error" class="form__error">Есть ошибки. Попробуй еще раз</p>
    </div>
    <base-button class="form__button" @click="validateForm">check</base-button>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { IconType } from "@/types";
import BaseButton from "@/components/BaseButton.vue";
import BaseTitle from "@/components/BaseTitle.vue";
import BaseDescription from "@/components/BaseDescription.vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseCheckbox from "@/components/BaseCheckbox.vue";

export default defineComponent({
  name: "PageForm",
  components: { BaseCheckbox, BaseInput, BaseDescription, BaseTitle, BaseButton },
  setup() {
    const router = useRouter();
    const error = ref(false);
    const rangeValue = ref(new Date("2024-06-01"));
    const min = new Date("2024-01-01");
    const max = new Date("2024-12-31");

    const cities = [
      "Москва",
      "Звенигород",
      "Казань",
      "Санкт-Петербург",
      "Новороссийск",
      "Сочи",
      "Новосибирск",
      "Калининград",
      "Краснодар",
      "Кемерово",
      "Йошкар-Ола",
      "Екатеринбург",
      "Анапа",
      "Уфа",
      "Нижний Новгород",
      "Челябинск",
      "Выборг",
      "Самара",
      "Ростов-на-Дону",
      "Омск",
      "Красноярск",
      "Воронеж",
      "Томск",
      "Пермь",
      "Волгоград",
      "Владивосток",
      "Ярославль",
      "Тула",
      "Манжерок",
      "Якутск",
    ];

    const checkedCheckboxes = ref<string[]>(cities.slice(0));

    const answers = {
      city: "новосибирск",
      date: new Date().toLocaleDateString("ru-RU"),
    };

    const isCheckboxChecked = (v: string) => {
      return checkedCheckboxes.value.includes(v);
    };

    const onRangeChange = (evt: Event) => {
      if (error.value) {
        error.value = false;
      }
      rangeValue.value = new Date(Number((evt.target as HTMLInputElement).value));
    };

    const handleCheckbox = (v: string) => {
      if (error.value) {
        error.value = false;
      }
      const index = checkedCheckboxes.value.findIndex(item => item === v);
      if (index >= 0) {
        checkedCheckboxes.value.splice(index, 1);
      } else {
        checkedCheckboxes.value.push(v);
      }
    };

    const rangeAnswerCorrect = computed(
      () => rangeValue.value.toLocaleDateString("ru-RU") === answers.date
    );

    const checkboxesAnswerCorrect = computed(
      () =>
        checkedCheckboxes.value.length === 1 &&
        checkedCheckboxes.value[0].toLowerCase().trim() === answers.city
    );

    const validateForm = () => {
      if (rangeAnswerCorrect.value && checkboxesAnswerCorrect.value) {
        router.push({ name: "complete", query: { quest: "form" } });
      } else {
        error.value = true;
      }
    };

    return {
      IconType,
      error,
      rangeValue,
      min,
      max,
      cities,
      onRangeChange,
      validateForm,
      isCheckboxChecked,
      handleCheckbox,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;

  &__description {
    width: 100%;
    height: auto;
  }

  :deep(.description__default) {
    padding: 0;
  }

  :deep(.description__subtitle) {
    padding: 8px 4px;
    line-height: 18px;
  }

  &__checkbox-field {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4px;
    margin: 12px 0;
  }

  &__range {
    width: 100%;
    margin: 24px 0 40px 0;
    appearance: none;
    -webkit-appearance: none;
    background: transparent;

    &:focus {
      outline: none;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 16px;
      width: 16px;
      margin-top: -6px;
      border: none;
      border-radius: 50%;
      background: $color-blue;
      cursor: pointer;
    }

    &::-moz-range-thumb {
      appearance: none;
      height: 16px;
      width: 16px;
      border: none;
      border-radius: 50%;
      background: $color-blue;
      cursor: pointer;
    }

    &::-webkit-slider-runnable-track {
      width: 100%;
      height: 5px;
      cursor: pointer;
      box-shadow: none;
      background: rgba($color-blue, 0.4);
      border-radius: 2px;
      border: none;
    }

    &::-moz-range-track {
      width: 100%;
      height: 5px;
      cursor: pointer;
      box-shadow: none;
      background: rgba($color-blue, 0.4);
      border-radius: 2px;
      border: none;
    }
  }

  &__title {
    margin-top: 30px;
    margin-bottom: 15px;
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
