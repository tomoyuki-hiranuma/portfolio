import { mount } from "@vue/test-utils";
import App from '../src/App.vue';

describe('Testing App Component', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(App)
    expect(wrapper.isVueInstance).toBeTruthy()
  })
})