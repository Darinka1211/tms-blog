import './LogIn.css'
import { Header } from '../Header/Header'


import { Pages } from '../Pages/Pages'
import { Footer } from '../Footer/Footer'
import { Sign } from '../Sign/Sign'
import { Form } from '../Form/Form'

type LogInProps = {
    className?: string
}

export const LogIn = (props: LogInProps) => {
    return (
        <div className='mainDivPostList'>
            
            <div className="divLogIn">
                <Sign/>
                <Form/>
                <Footer/>
            </div>
        </div>
    )
}