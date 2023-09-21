import { markRaw, nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it, test } from 'vitest'
import Button from '../index.vue'

describe('Button.vue', () => {
  it('create', () => {
    const wrapper = mount(() => <Button type='primary' />)
    expect(wrapper.classes()).toContain('fx-button-primary')
  })

  it('size', () => {
    const wrapper = mount(() => <Button size='medium' />)
    expect(wrapper.classes()).toContain('fx-button-medium')
  })

  it('round', () => {
    const wrapper = mount(() => <Button round />)
    expect(wrapper.classes()).toContain('fx-button-round')
  })

  it('disabled', async () => {
    const isDisabled = ref(true)
    const wrapper = mount(() => <Button disabled={isDisabled} />)
    expect(wrapper.classes()).toContain('fx-button-default-disabled')
    isDisabled.value = false
    await nextTick()
    expect(wrapper.classes()).toContain('fx-button')
  })

  it('loading', () => {
    const wrapper = mount(() => <Button loading leftIcon="fx-icon-loading1"/>)
    expect(wrapper.find('.fx-button i').classes()).toContain('fx-icon-loading')

  })

  it('text文字', () => {
    const wrapper = mount(() => <Button customColor='#1ba7dd'>中国</Button>)
    expect(wrapper.find('.fx-button span').text()).toBe('中国')
  })
})
