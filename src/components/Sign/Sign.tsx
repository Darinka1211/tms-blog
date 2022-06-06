import './Sign.css'

type SignProps = {
    className?: string
    image?: string
}

export const Sign = (props: SignProps) => {
    return (
        <div className='divBSign'>
            <p className='nameSignBack' >Back to home</p>
            <p className='nameSign' >Sign In</p>
        </div>
    )
}