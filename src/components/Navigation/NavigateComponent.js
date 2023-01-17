import { useNavigate } from "react-router-dom";

const NavigateComponent = (props) => {
    const navigate = useNavigate();

    function handleClick() {
        if(props.onclick) {
            console.log("something");
        }

        navigate("/blog-post");
    }

    return <>
        <button type="button" onClick={handleClick}>
            { props.title }
        </button>
    </>;
}

export default NavigateComponent;