import { shallowMount } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'

describe('Footer.vue', () => {
  it('renders props.data when passed', () => {
    const searching = '<h3-stub data=\"[object Object]\"></h3-stub>'
    const wrapper = shallowMount(Footer, {
        propsData: {
            data: {
                titles: [
                    {title:'Platform',
                        content: [
                            {url: '#', name:'Home'},
                            {url: '#', name:'Features'},
                            {url: '#', name:'API'},
                            {url: '#', name:'Pricing'},
                            {url: '#', name:'What\'s New'}
                        ]
                    },
                    {title:'Resources',
                        content: [
                            {url: '#', name:'Documentation'},
                            {url: '#', name:'FAQ'},
                            {url: '#', name:'Blog'},
                            {url: '#', name:'Contact'}
                        ]
                    }
                ]
            }
        }
    })
    expect(wrapper.html()).toContain(searching)
  })
})