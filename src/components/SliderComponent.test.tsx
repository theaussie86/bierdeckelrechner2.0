import { render, screen } from '@testing-library/react'
import SliderComponent, { SliderProps } from './SliderComponent'

const sliderProps: SliderProps = {
    title: 'test',
    value: 4,
    handleSliderChange: () => { console.log('value') },
    color: 'green',
    min: 1,
    max: 10,
    step: 0.1,
    disabled: false,
}

describe('SLIDER_COMPONENT', () => {

    test('should render slider component', () => {
        render(<SliderComponent {...sliderProps} />)
        const slider = screen.getByTitle(sliderProps.title)
        expect(slider).toBeInTheDocument()
    })

    test('should have the correct value', () => {
        render(<SliderComponent {...sliderProps} />)
        const input: HTMLInputElement = screen.getByDisplayValue(sliderProps.value)
        expect(parseFloat(input.value)).toEqual(sliderProps.value)
    })

    test('should be disabled', () => {
        const props = { ...sliderProps, disabled: true }
        render(<SliderComponent {...props} />)
        const wrapper: HTMLElement = screen.getByTitle(props.title)
        expect(wrapper.classList).toContain('Mui-disabled')
    })

    test('should not be disabled', () => {
        const props = { ...sliderProps }
        render(<SliderComponent {...props} />)
        const wrapper: HTMLElement = screen.getByTitle(props.title)
        expect(wrapper.classList).not.toContain('Mui-disabled')
    })
})