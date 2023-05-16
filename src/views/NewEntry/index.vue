<template>
  <MainLayout>
    <div class="add-entry">
      <n-h1>Comment te sens-tu?</n-h1>
      <n-form ref="formRef">
        <n-form-item label="3 fois par jour" path="time">
          <n-radio-group v-model:value="formValue.time" name="time">
            <n-radio-button value="morning"> Matin </n-radio-button>
            <n-radio-button value="noon"> Midi </n-radio-button>
            <n-radio-button value="night"> Soir </n-radio-button>
          </n-radio-group>
        </n-form-item>
        <n-form-item label="Sensation somatique, ton ressenti physique" path="somatic">
          <n-input v-model:value="formValue.somatic"
            placeholder="Palpitations, fébrilité, tensions musculaire au cou et aux épaules, ..." type="textarea"
            :autosize="{ minRows: 4 }" />
        </n-form-item>
        <n-form-item label="Les émotions attribuables à tes sensations" path="emotions">
          <EmotionSelector v-model:modelValue="formValue.emotions" />
        </n-form-item>
        <n-form-item label="Une note sur l'évolution de ta journée" path="note">
          <n-input v-model:value="formValue.note" placeholder="Un bref message à toi-même ..." type="textarea"
            :autosize="{ minRows: 4 }" />
        </n-form-item>
        <pre>{{ formValue }}</pre>
        <n-row :gutter="[0, 24]">
          <n-col :span="24">
            <n-space style="
                display: flex;
                justify-content: space-between;
                align-items: center;
              ">
              <n-text depth="3">
                {{ getMoment() }}
              </n-text>
              <n-button round type="primary" @click="handleValidateClick">
                Sauvegarder
              </n-button>
            </n-space>
          </n-col>
        </n-row>
      </n-form>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MainLayout from "@/layout/MainLayout.vue";
import { useDailyEntriesStore, type DailyEntry } from "../../stores/daily-entries";
import EmotionSelector from "@/components/EmotionSelector.vue";
const { saveEntry } = useDailyEntriesStore();

const formRef = ref(null);
const formValue = ref({
  time: "morning",
  somatic: "",
  emotions: [],
  note: ""
} as DailyEntry);

const handleEmotion = (value) => {
  console.log(value);

}
const handleValidateClick = () => {
  const { time, somatic, emotions, note } = formValue.value;

  saveEntry({
    note,
    somatic,
    emotions,
    time,
  }).then((x) => {
    console.log(x);
  });
};

const getMoment = () => {
  const d = new Date();
  return `${d.toLocaleDateString("ca-en")} - ${d.toLocaleTimeString("ca-en", {
    hour: "2-digit",
    minute: "2-digit",
  })}`;
};
</script>

<style>
.add-entry {
  max-width: 800px;
  margin: 0 auto;
}

.done {
  font-weight: 600;
  background: rgba(24, 160, 88, 0.16);
  --n-button-text-color: #18a058;
  --n-button-color-active: #63e2b7;
  --n-button-text-color-active: #000;
}

.late {
  font-weight: 600;
  background: rgba(240, 160, 32, 0.16);
  --n-button-text-color: #f0a020;
  --n-button-color-active: #f2c97d;
  --n-button-text-color-active: #000;
}
</style>
