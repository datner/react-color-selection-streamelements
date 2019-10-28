import { useState } from 'react'

function useColorPicker() {
    const [color, setColor] = useState("hsl(360, 100%, 100%)")

    const changeColor = (rgb) => {
        setColor(RGBtoHSL(rgb))
    };

    return [color, changeColor]
}

function RGBtoHSL(rgb) {
    const r = rgb[0] / 255
    const g = rgb[1] / 255
    const b = rgb[2] / 255
    console.log({ r, g, b })
    const [cmin, cmax] = [Math.min(r, g, b), Math.max(r, g, b)]
    const delta = +(cmax - cmin)

    const getH = () => Math.round((() => {
        // no difference
        if (delta === 0)
            return 0;
        // red is max
        if (cmax === r)
            return (+(g - b) / delta) % 6;
        // green is max
        if (cmax === g)
            return +(b - r) / delta + 2;
        // blue is max
        if (cmax === b)
            return (r - g) / delta - 4;

    })() * 60)
    const h = Math.sqrt(Math.pow(getH(), 2));

    const getL = () => +((cmax + cmin) * 50).toFixed(1)
    const l = getL();

    const getS = () => delta === 0 ? 0 : ((1 - Math.abs(2 * (l / 100) - 1)) * 100).toFixed(1)
    const s = getS()

    return `hsl(${h}, ${s}%, ${l}%)`



}

export default useColorPicker