import { Meta, Story } from '@storybook/vue3'

/* Component */
import { MHeader } from '../dist/header.es'
import { HEADER_MODEL, HEADER_LINKS_MODEL } from './header.model'
import '../dist/style.css'

const headerLinks: HEADER_LINKS_MODEL[]  = [
  {
    title: 'Telephone Number',
    text: '1-866-234-7350',
    href: 'tel:+1-866-234-7350',
    iconLG: 'nis-phone-on visible-lg',
    iconSM: 'nis-phone-off hidden-lg'
  }
]

export default {
  component: MHeader,
  title: 'Modules/Header',
  argTypes: {
    links: {
      table: { disable: true }
    },
    m106Data: {
      table: { disable: true }
    },
    componentClass: {
      table: { disable: true }
    }
  }
} as Meta

const Template: Story<HEADER_MODEL> = (args) => ({
  components: { MHeader },
  setup() {
    return { args }
  },
  template: '<m-header v-bind="args" />',
})

export const Default = Template.bind({})

Default.args = {
  links: headerLinks,
  m106Data: {
    title: 'Enable Accessibility'
  }
}
