import { Meta, Story } from '@storybook/vue3'
import { E5_MODEL } from '../src/e5.model'

/* Component */
import { E5 } from '..'
import '../dist/style.css'

const variants = [
  'default',
  '-variant-1',
  '-variant-2',
  '-variant-3',
  '-variant-4',
  '-variant-5',
  '-variant-6',
  '-variant-7'
]

export default {
  component: E5,
  title: 'Elements/E5',
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    controlClass: {
      name: 'Class Modifiers',
      options: variants,
      mapping: { default: '', },
      control: 'select',
    },
    isRtl: {
      name: 'RTL',
    },
    labelText: {
      name: 'Text',
      table: { disable: true }
    },
    disclaimer: {
      name: 'Disclaimer',
    },
    disabled: {
      name: 'Disabled'
    },
    checked: {
      name: 'Checked'
    },
    hasLegend: {
      name: 'Legend',
    },
    required: {
      name: 'Required',
    },
    showError: {
      name: 'Error',
    },
    errorMessage: {
      table: { disable: true }
    },
    componentClass: {
      table: { disable: true }
    },
    labelClass: {
      table: { disable: true }
    },
    textClass: {
      table: { disable: true }
    },
    disclaimerClass: {
      table: { disable: true }
    },
    text: {
      table: { disable: true }
    }
  }
} as Meta

const Template: Story<E5_MODEL> = (args) => ({
  components: { E5 },
  setup() {
    const { checked, ..._args } = args
    return { args: _args, checked }
  },
  template: '<e5 v-bind="args" v-model:checked="checked" />',
})

export const Default = Template.bind({})

Default.args = {
  controlClass: 'default',
  isRtl: false,
  labelText: 'Custom checkbox',
  disclaimer: '',
  disabled: false,
  checked: true,
  hasLegend: false,
  required: false,
  showError: false
}
