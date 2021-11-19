import { defineComponent, PropType } from "vue";
import { E7_MESSAGES_MODEL } from "./e7.model";

export default defineComponent({
  name: 'E7',
  props: {
    componentClass: {
      type: String,
      default: ''
    },
    labelClass: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    inputClass: {
      type: String,
      default: ''
    },
    inputType: {
      type: String,
      default: 'text'
    },
    inputMinlength: {
      type: Number,
      default: undefined
    },
    inputMaxlength: {
      type: Number,
      default: undefined
    },
    inputAria: {
      type: String,
      default: ''
    },
    inputPlaceholder: {
      type: String,
      default: ''
    },
    inputDisabled: {
      type: Boolean,
      default: false
    },
    description: {
      type: String,
      default: ''
    },
    formMessages: {
      type: Array as PropType<E7_MESSAGES_MODEL[]>,
      default: []
    },
    required: {
      type: Boolean,
      default: false
    },
    invalid: {
      type: Boolean,
      default: false
    }
  }
})
