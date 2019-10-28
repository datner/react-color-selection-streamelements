import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

const Picker = ({setColor}) => {
    const canvasRef = useRef(null)

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

    return (
        <canvas height={100} width={100} ref={canvasRef} onClick={handleClick} id="picker">

        </canvas>
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
