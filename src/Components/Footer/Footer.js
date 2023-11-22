import './footer.css'

const Footer = (props) => {
    console.log(props.name)
    console.log(props.age)
    return (
        <div>
            <div className='footerContainer'>Mon nom est {props.name}</div>
            <div className='footerContainer'>And my age is {props.age}</div>
        </div>
    )
}

export default Footer