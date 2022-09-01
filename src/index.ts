import { defineComponent, h, provide } from 'vue'
import Dialog from './CmdkDialog.vue'
import Group from './CmdkGroup.vue'
import Input from './CmdkInput.vue'
import Item from './CmdkItem.vue'
import List from './CmdkList.vue'

/**
 * Cmdk Root Node
 */
const Cmdk = defineComponent({
  name: 'Cmdk',
  props: {
    theme: {
      type: String,
      default: 'default'
    }
  },
  setup(props, { attrs, slots }) {
    provide('theme', props.theme || 'default')

    return () =>
      h(
        'div',
        {
          'cmdk-root': '',
          class: props.theme || 'default'
        },
        slots
      )
  }
})

/**
 * Cmdk Empty Node
 */
const Empty = defineComponent({
  name: 'Cmdk.Empty',
  setup(props, { attrs, slots }) {
    return () =>
      h('div', {
        'cmdk-empty': '',
        role: 'presentation',
        ...attrs
      })
  }
})

/**
 * Cmdk Loading Node
 */
const Loading = defineComponent({
  name: 'Cmdk.Loading',
  setup(props, { attrs, slots }) {
    return () =>
      h(
        'div',
        {
          'cmdk-loading': '',
          role: 'progressbar',
          ...attrs
        },
        slots
      )
  }
})

/**
 * Cmdk Separator Node
 */
const Separator = defineComponent({
  name: 'Cmdk.Separator',
  setup(props, { attrs, slots }) {
    return () =>
      h('div', {
        'cmdk-separator': '',
        role: 'separator',
        ...attrs
      })
  }
})

const pkg = Object.assign(Cmdk, {
  Dialog,
  Empty,
  Group,
  Input,
  Item,
  List,
  Loading,
  Separator,
  Root: Cmdk
})

export { pkg as Cmdk }
