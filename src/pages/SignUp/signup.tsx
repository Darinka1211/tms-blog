import { Title } from "../../components/Title/Title";
import { TitleNav } from "../../components/TitleNav/TitleNav";

export const SignUp = () => {
    return (
        <>
            <TitleNav  to='/' text='Home'/>
            <Title text='Sign Up' className='title'/>
        </>
    )
}