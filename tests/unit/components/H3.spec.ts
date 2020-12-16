import { shallowMount } from '@vue/test-utils'
import H3 from '@/components/H3.vue'

describe('H3.vue', () => {
  it('renders props.data when passed', () => {
    const link = '<a href="#">Features</a>'
    const title = '<h3>Platform</h3>'
    const wrapper = shallowMount(H3, {
        propsData: {
            data: {
                title:'Platform',
                content: [
                    {url: '#', name:'Home'},
                    {url: '#', name:'Features'},
                    {url: '#', name:'API'},
                ]
            }
        }
    })
    expect(wrapper.html()).toContain(title)
    expect(wrapper.html()).toContain(link)
  })
})