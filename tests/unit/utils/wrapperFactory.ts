import { MountingOptions, shallowMount, VueWrapper } from '@vue/test-utils'
import { merge } from 'lodash'

const translationMock = (key: string, params: Record<string, any>) =>
  params ? `${key} with ${JSON.stringify(params)}` : key

const defaultOptions = (
  options?: MountingOptions<any>
): MountingOptions<any> => ({
  global: {
    directives: {
      Loading: options?.global?.directives?.Loading ?? {}
    },
    mocks: {
      $t: translationMock,
      $tc: translationMock
    }
  }
})

const wrapperFactory = (
  vueComponent: any,
  options?: MountingOptions<any>
): VueWrapper<any> =>
  shallowMount(vueComponent, merge(options ?? {}, defaultOptions(options)))

export default wrapperFactory
