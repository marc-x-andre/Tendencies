<template>
  <n-select multiple :options="options" :render-label="renderLabel" :render-tag="renderMultipleSelectTag"
    v-model:value="internalValue" filterable />
</template>


<script setup lang="ts">
import { computed, h, ref } from 'vue'
import {
  NAvatar,
  NText,
  NTag,
} from 'naive-ui'
import emotionJson from '../assets/emotion.json'

type Option = {
  value: string;
  i18n: {
    fr: {
      label: string,
      description: string
    }
  },
  image: string;
}

const options: Option[] = emotionJson;

const props = defineProps<{
  modelValue: string[],
}>();

const emit = defineEmits(['update:modelValue']);

const internalValue = computed({
  get() {
    return props.modelValue;
  },
  set(value: string) {
    console.log(value);

    return emit('update:modelValue', value);
  },
});

const renderMultipleSelectTag = ({ option, handleClose }: { option: Option, handleClose: Function }) => {
  return h(NTag, {
    style: { padding: '0 6px 0 4px' },
    round: true,
    closable: true,
    onClose: (e) => {
      e.stopPropagation()
      handleClose()
    }
  }, {
    default: () =>
      h('div', { style: { display: 'flex', alignItems: 'center' } },
        [
          h(NAvatar, { src: option.image, round: true, size: 22, style: { marginRight: '4px' } }),
          option.i18n.fr.label
        ]
      )
  })
}

const renderLabel = (option: Option) => {
  return h('div', { style: { display: 'flex', alignItems: 'center' } },
    [
      h(NAvatar, { src: (option.image as string), round: true, size: 'small', style: { flexShrink: '0' } }),
      h('div', { style: { marginLeft: '12px', padding: '4px 0' } },
        [
          h('div', null, [option.i18n.fr.label as string]),
          h(NText, { depth: 3, tag: 'div' }, { default: () => (option.i18n.fr.description as string) })
        ]
      )
    ]
  )
}
</script>

<style lang="sass">


</style>