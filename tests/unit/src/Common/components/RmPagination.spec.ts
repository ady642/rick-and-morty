import RmPagination from '@/Common/components/Paginations/RmPagination.vue'
import wrapperFactory from "../../../utils/wrapperFactory";
import {VueWrapper} from "@vue/test-utils";
import {ComponentPublicInstance} from "vue";

interface RmPaginationProps {
    currentPage?: number,
    totalCharacters?: number,
    itemsPerPage?: number
}

const defaultProps: RmPaginationProps = {
    currentPage: 1,
    totalCharacters: 826,
    itemsPerPage: 20
}

const createWrapper = (props = defaultProps) => wrapperFactory(RmPagination, {
    props
})

const finderPrevButton = (wrapper: VueWrapper<ComponentPublicInstance<RmPaginationProps>>) =>
    wrapper.findAll('.pagination__button')[0]

const finderNextButton = (wrapper: VueWrapper<ComponentPublicInstance<RmPaginationProps>>) =>
    wrapper.findAll('.pagination__button')[1]

let wrapper = createWrapper()
let prevButtonWrapper = finderPrevButton(wrapper)
let nextButtonWrapper = finderNextButton(wrapper)

describe('RmPagination', () => {
    beforeEach(() => {
        wrapper = createWrapper()
        prevButtonWrapper = finderPrevButton(wrapper)
        nextButtonWrapper = finderNextButton(wrapper)
    })

    describe('events', () => {
        describe('previousClick', () => {
            it('should not emit event if currentPage is 1', async () => {
                await prevButtonWrapper.trigger('click')
                expect(wrapper.emitted()).not.toHaveProperty('update:modelValue')
            })
            it('should emit event if currentPage is 2', async () => {
                wrapper = createWrapper({
                    currentPage: 2
                })

                prevButtonWrapper = finderPrevButton(wrapper)

                await prevButtonWrapper.trigger('click')
                expect(wrapper.emitted('update:modelValue')).toHaveLength(1)
                expect(wrapper.emitted('update:modelValue')).toStrictEqual([[1]])
            })
        })
        describe('nextClick', () => {
            it('should not emit event if currentPage is lastPage', async () => {
                wrapper = createWrapper({
                    ...defaultProps,
                    currentPage: 42
                })

                nextButtonWrapper = finderNextButton(wrapper)

                await nextButtonWrapper.trigger('click')
                expect(wrapper.emitted()).not.toHaveProperty('update:modelValue')
            })
            it('should go to the next page if currentPage is not las page', async () => {
                await nextButtonWrapper.trigger('click')
                expect(wrapper.emitted('update:modelValue')).toHaveLength(1)
                expect(wrapper.emitted('update:modelValue')).toStrictEqual([[2]])
            })
        })
        describe('itemClick', () => {
            it('should not emit event if click on ... separator', async () => {
                const separator = wrapper.findAll('li')[4]

                await separator.trigger('click')

                expect(wrapper.emitted()).not.toHaveProperty('update:modelValue')
            })
            it('should emit event if click on page item', async () => {
                const separator = wrapper.findAll('li')[2]

                await separator.trigger('click')

                expect(wrapper.emitted('update:modelValue')).toStrictEqual([[2]])
            })
            describe('intermediate pages', () => {
                it.each([
                    { currentPage: 1, itemPaginationCount: 8}, //next and previous, separator and pages
                    { currentPage: 41, itemPaginationCount: 8}, //next and previous, separator and pages
                    { currentPage: 20, itemPaginationCount: 10}, //next and previous, separators and pages
                ])('should not display intermediate pages if current page is less or equal 3 or more or equal 41', ({ currentPage, itemPaginationCount }) => {
                    wrapper = createWrapper({
                        ...defaultProps,
                        currentPage
                    })

                    expect(wrapper.findAll('li')).toHaveLength(itemPaginationCount)
                })
            })
        })
    })
})
