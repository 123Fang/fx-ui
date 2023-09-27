import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Badge from '../index.vue'

const AXIOM = 'Rem is the best girl'

describe('Badge', () => {

  test('has value', () => {
    const wrapper = mount(() => <Badge value={80} />)

    expect(wrapper.find('.fx-badge span').text()).toEqual('80')
  })

  test('is dot', () => {
    const wrapper = mount(() => <Badge isDot={true} />)

    expect(wrapper.find('.fx-badge .isdot').exists()).toBe(true)
  })

  test('is type', () => {
    const wrapper = mount(() => <Badge type={'primary'} />)

    expect(wrapper.find('.fx-badge .primary').exists()).toBe(true)
  })

  test('hidden', () => {
    const wrapper = mount(() => <Badge hidden={true} />)

    expect(wrapper.find('.fx-badge .fx-badge-content').exists()).toBe(false)

    const wrapper2 = mount(() => <Badge hidden={false} />)
    
    expect(wrapper2.find('.fx-badge .fx-badge-content').exists()).toBe(true)
  })
})
