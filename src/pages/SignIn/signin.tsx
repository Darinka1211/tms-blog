import { Title } from "../../components/Title/Title";
import { TitleNav } from "../../components/TitleNav/TitleNav"
import { LogIn } from "../../components/LogIn";

export const SignIn = () => {
    return (
        <>
            <TitleNav  to='/' text='Home'/>
            <Title text='Sign In' className='title'/>
        </>
    )
}