const showLabel = (label) => {
    alert('A label desse botão é: ' + label)
}

const Button = (props) => {
    return (
        <button onClick={() => showLabel(props.label)}>{props.label}</button>
    )


}


Button.defaultProps = {
    label: 'baixar CV'
}

export default Button