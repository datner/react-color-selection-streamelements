import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ColorTooltip from 'components/ColorTooltip'

const Picker = ({ setColor }) => {
    const canvasRef = useRef(null)
    const [hover, setHover] = useState(false);
    const [clientX, setClientX] = useState(0);
    const [clientY, setClientY] = useState(0);
    const [hoverColor, setHoverColor] = useState("rgb(255,255,255)");

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        const gradient = ctx.createLinearGradient(0, 0, 100, 100)
        gradient.addColorStop(0, "black");
        gradient.addColorStop(1, "blue");
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, 100, 100)
    })

    const handleClick = e => {
        const { x, y } = getMousePos(canvasRef, e)
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d');
        const pixel = ctx.getImageData(x, y, 1, 1).data;
        setColor(pixel)
    }

    const handleHover = e => {
        const { x, y } = getMousePos(canvasRef, e)
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d');
        const pixel = ctx.getImageData(x, y, 1, 1).data;
        setClientX(e.clientX)
        setClientY(e.clientY)
        setHover(true)
        setHoverColor(`rgba(${pixel.join(", ")})`)
        console.count()
    }

    return (
        <>
            <canvas onMouseMove={handleHover} onMouseEnter={handleHover} onMouseLeave={() => setHover(false)} height={100} width={100} ref={canvasRef} onClick={handleClick} id="picker"></canvas>
            <ColorTooltip active={hover} x={clientX} y={clientY} color={hoverColor} />
        </>
    )
}

function getMousePos(ref, e) {
    var rect = ref.current.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
}

Picker.propTypes = {
    setColor: PropTypes.func,
}

Picker.defaultProps = {
    setColor: () => null
}

export default Picker
