import { Meta, Story } from '@storybook/vue3'

/* Component */
import MHeader from '../src/mHeader.vue'
import { MHEADER_MODEL, MHEADER_LINKS_MODEL } from './mHeader.model'
import '../src/mHeader.style.scss'

const headerLinks: MHEADER_LINKS_MODEL[]  = [
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
  title: 'Modules/MHeader',
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

const Template: Story<MHEADER_MODEL> = (args) => ({
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
