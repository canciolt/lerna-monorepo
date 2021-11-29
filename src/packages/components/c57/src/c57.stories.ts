import { Meta, Story } from '@storybook/vue3'

/* Component */
import { C57 } from '../dist/c57.es'
import { C57_MODEL, C57_LINKS_MODEL } from './c57.model'
import '../dist/style.css'

const c57Links: C57_LINKS_MODEL[]  = [
  { href: 'http://www.ncl.com/f', title: 'Norwegian Home' },
  { href: 'http://www.ncl.com/freestyle-cruise/legal-notice', title: 'Legal Notice' },
  { href: 'http://www.ncl.com/about/privacy-policy', title: 'Privacy Policy' },
  { href: 'http://www.ncl.com/about/additional-terms-and-conditions', title: 'Additional Terms & Conditions' }
]

export default {
  component: C57,
  title: 'Components/C57',
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    componentClass: {
      table: { disable: true }
    },
    copyrightText: {
      table: { disable: true }
    },
    links: {
      table: { disable: true }
    }
  }
} as Meta

const Template: Story<C57_MODEL> = (args) => ({
  components: { C57 },
  setup() {
    return { args }
  },
  template: '<c57 v-bind="args" />',
})

export const Default = Template.bind({})

Default.args = { links: c57Links }
