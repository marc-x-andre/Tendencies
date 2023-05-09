<template>
  <n-select multiple :options="options" :render-label="renderLabel" :render-tag="renderMultipleSelectTag" filterable />
</template>


<script lang="ts">
import { defineComponent, h } from 'vue'
import {
  NAvatar,
  NText,
  NTag,
  type SelectRenderTag,
  type SelectRenderLabel
} from 'naive-ui'

export default defineComponent({
  setup() {
    const renderMultipleSelectTag: SelectRenderTag = ({
      option,
      handleClose
    }) => {
      return h(NTag, {
        style: { padding: '0 6px 0 4px' },
        round: true,
        closable: true,
        onClose: (e) => {
          e.stopPropagation()
          handleClose()
        }
      },
        {
          default: () =>
            h(
              'div',
              { style: { display: 'flex', alignItems: 'center' } },
              [
                h(NAvatar, {
                  src: (option.image as string),
                  round: true,
                  size: 22,
                  style: {
                    marginRight: '4px'
                  }
                }),
                option.label as string
              ]
            )
        }
      )
    }
    const renderLabel: SelectRenderLabel = (option) => {
      return h(
        'div',
        {
          style: {
            display: 'flex',
            alignItems: 'center'
          }
        },
        [
          h(NAvatar, {
            src: (option.image as string),
            round: true,
            size: 'small'
          }),
          h(
            'div',
            {
              style: {
                marginLeft: '12px',
                padding: '4px 0'
              }
            },
            [
              h('div', null, [option.label as string]),
              h(
                NText,
                { depth: 3, tag: 'div' },
                {
                  default: () => (option.description as string)
                }
              )
            ]
          )
        ]
      )
    }
    return {
      options: [
        {
          label: 'Inquiet',
          value: 'worried',
          description: 'Qui est agité par la crainte, l\'incertitude',
          image: 'https://em-content.zobj.net/source/animated-noto-color-emoji/356/worried-face_1f61f.gif'
        },
        {
          label: 'Plein de remords',
          value: 'remorseful',
          description: 'Vive douleur morale causée par la conscience d\'avoir mal agi',
          image: 'https://em-content.zobj.net/source/animated-noto-color-emoji/356/pensive-face_1f614.gif'
        },
        {
          label: 'Joyeux',
          value: 'cheerful',
          description: 'Émotion agréable et profonde, sentiment exaltant ressenti par toute la conscience.',
          image: 'https://em-content.zobj.net/source/animated-noto-color-emoji/356/grinning-face-with-big-eyes_1f603.gif'
        }
      ],
      renderMultipleSelectTag,
      renderLabel
    }
  }
})
</script>