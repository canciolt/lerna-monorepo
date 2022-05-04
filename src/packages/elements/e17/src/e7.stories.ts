import { Meta, Story } from '@storybook/vue3'

/* Component */
import { E7 } from '..'
import '../dist/style.css'

export default {
  component: E7,
  title: 'Elements/E7',
  decorators: [() => ({ template: '<div style="min-width: 25em"><story /></div>' })],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    label: {
      table: { disable: true }
    },
    inputType: {
      table: { disable: true }
    },
    inputPlaceholder: {
      table: { disable: true }
    },
    description: {
      table: { disable: true }
    },
    formMessages: {
      table: { disable: true }
    },
    componentClass: {
      table: { disable: true }
    },
    labelClass: {
      table: { disable: true }
    },
    inputClass: {
      table: { disable: true }
    },
    inputMinlength: {
      table: { disable: true }
    },
    inputMaxlength: {
      table: { disable: true }
    },
    inputAria: {
      table: { disable: true }
    },
    modelValue: {
      table: { disable: true }
    },
    inputDisabled: {
      name: 'Disable'
    },
    required: {
      name: 'Required'
    },
    invalid: {
      name: 'Invalid'
    }
  }
} as Meta

const Template: Story<Record<string, any>> = (args) => ({
  components: { E7 },
  setup() {
    return { args }
  },
  template: '<e7 v-bind="args" />',
})

export const Default = Template.bind({})

Default.args = {
  label: 'Email',
  inputType: 'email',
  inputPlaceholder: 'Email',
  description: 'description',
  inputDisabled: false,
  required: false,
  invalid: false,
  formMessages: [{ text: 'form messages text' }]
}
