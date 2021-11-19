import { computed, defineComponent } from "vue";

export default defineComponent({
  name: 'E5',
  props: {
    componentClass: {
      type: String,
      default: ''
    },
    controlClass: {
      type: String,
      default: ''
    },
    labelClass: {
      type: String,
      default: ''
    },
    labelText: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    textClass: {
      type: String,
      default: ''
    },
    disclaimer: {
      type: String,
      default: ''
    },
    disclaimerClass: {
      type: String,
      default: ''
    },
    errorMessage: {
      type: String,
      default: 'Error message'
    },
    showError: {
      type: Boolean,
      default: false
    },
    hasLegend: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    },
    isRtl: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:checked'],
  setup (props,  { emit }) {
    const checkedModel = computed({
      get() {
        return props.checked
      },
      set(value: boolean) {
        emit('update:checked', value)
      },
    })

    const showLabelText = computed(() => props.controlClass !== '-variant-4')

    return { showLabelText, checkedModel }
  }
})
