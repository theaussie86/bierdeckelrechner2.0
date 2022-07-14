import { Slider } from '@mui/material';

export interface SliderProps {
    title: string;
    value: number;
    handleSliderChange: Function;
    color: string;
    min: number;
    max: number;
    step: number;
    disabled: boolean;
}

function SliderComponent(props: SliderProps) {
    return (
        <Slider
            aria-label={props.title}
            value={props.value}
            onChange={(e) => props.handleSliderChange(e)}
            sx={{ color: props.color }}
            min={props.min}
            max={props.max}
            step={props.step}
            disabled={props.disabled}
            title={props.title}
        />
    )
}

export default SliderComponent