import { Meta, Story } from '@storybook/vue3'

/* Component */
import MFooter from '../src/mFooter.vue'
import { C57_LINKS_MODEL } from "../../../components/c57/src/c57.model";
import '../src/mFooter.style.scss'

const c57Links: C57_LINKS_MODEL[]  = [
  { href: 'http://www.ncl.com/f', title: 'Norwegian Home' },
  { href: 'http://www.ncl.com/freestyle-cruise/legal-notice', title: 'Legal Notice' },
  { href: 'http://www.ncl.com/about/privacy-policy', title: 'Privacy Policy' },
  { href: 'http://www.ncl.com/about/additional-terms-and-conditions', title: 'Additional Terms & Conditions' }
]

export default {
  component: MFooter,
  title: 'Modules/MFooter',
  decorators: [() => ({ template: '<div style="position: absolute; bottom: 0; width: 100%;"><story /></div>' })],
  argTypes: {
    componentClass: {
      table: { disable: true }
    },
    c57Data: {
      table: { disable: true }
    }
  }
} as Meta

const Template: Story<Record<string, any>> = (args) => ({
  components: { MFooter },
  setup() {
    return { args }
  },
  template: '<m-footer v-bind="args" />',
})

export const Default = Template.bind({})

Default.args = {
  c57Data: { links: c57Links }
}
