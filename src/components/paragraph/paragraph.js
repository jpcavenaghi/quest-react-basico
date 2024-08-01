import React from "react"

const Paragraph = (props) => {
    return (
        <p style={{ color: props.textColor, textTransform: props.textShape }}>{props.text}</p>
    )
}

Paragraph.defaultProps = {
    textColor: 'red',
    textShape: 'uppercase',
    text: 'quest react básico!!!'
}

export default Paragraph