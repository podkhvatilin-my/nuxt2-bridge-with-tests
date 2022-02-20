import { mount } from '@vue/test-utils';
import TestComponent from '@/components/TestComponent.vue';

describe('TestComponent', () => {
  it('Is Vue instance', () => {
    const wrapper = mount(TestComponent);

    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
