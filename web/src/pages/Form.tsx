import QRCodeForm from "../components/sign-up";
import '../styles/form.css';

function Form() {
    return (
        <div className='form-outer background-form'>
            <div className='form-inner'>
                <QRCodeForm />
            </div>
        </div>
    )
}

export default Form;