import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Tagline from '../Tagline.vue'

describe('Tagline', () => {
  it('renders properly', () => {
    const wrapper = mount(Tagline, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
