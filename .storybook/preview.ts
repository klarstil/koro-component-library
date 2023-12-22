import type { Preview } from "@storybook/vue3";
import '../src/style.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'brand-white',
      values: [{
        name: 'brand-white',
        value: '#fff'
      }, {
        name: 'brand-beige',
        value: '#FAF6F1'
      }, {
        name: 'brand-dark-light',
        value: '#333230'
      }, {
        name: 'purple',
        value: '#745BBB'
      }, {
        name: 'green',
        value: '#4B765C'
      }, {
        name: 'orange',
        value: '#F1B237'
      }, {
        name: 'blue',
        value: '#0295CA'
      }, {
        name: 'orange',
        value: '#E88021'
      }]
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
