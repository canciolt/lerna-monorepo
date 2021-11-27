import { Meta, Story } from '@storybook/vue3'
import { E27_MODEL } from '../../e27/src/e27.model'

/* Component */
import { E27 } from '../dist/e27.es'
import '../dist/style.css'

export default {
  component: E27,
  title: 'Elements/E27',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    componentClass: {
      table: { disable: true }
    }
  }
} as Meta

const Template: Story<E27_MODEL> = (args) => ({
  components: { E27 },
  setup() {
    return { args }
  },
  template: '<e27 v-bind="args" />',
})

export const TextLink = Template.bind({})
export const Link = Template.bind({
  text: {
    table: { disable: true }
  }
})

TextLink.args = {
  links: [
    {
      href: '#',
      title: 'Call 1-866-625-1160',
      ariaLabel: 'Call 1-866-625-1160'
    }
  ],
  text: 'Need help?'
}

Link.args = {
  links: [
    {
      href: '#',
      title: 'Need help?',
      ariaLabel: 'Need help?'
    },
    {
      href: '#',
      title: 'Call 1-866-625-1160',
      ariaLabel: 'Call 1-866-625-1160'
    }
  ]
}
