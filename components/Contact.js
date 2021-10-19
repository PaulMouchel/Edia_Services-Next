import { useRef } from 'react'
import InputField from './InputField'
import TextField from './TextField'
import RecaptchaButton from './RecaptchaButton'

const Contact = () => {
    const lastNameRef = useRef()
    const firstNameRef = useRef()
    const emailRef = useRef()
    const objectRef = useRef()
    const messageRef = useRef()

    return (
        <section className="bg-bg bg-cover z-0 min-h-screen" id="contact">
            <div className="bg-opacity-70 bg-blue bg-cover min-h-screen z-10 relative">
                <div className="h-64"></div>
                <h2 className="text-white text-3xl py-6 text-center">Nous contacter</h2>
                <div className="text-white text-center w-screen">                    
                    <form className="max-w-6xl m-auto px-4">
                        <div className="grid grid-flow-row md:grid-flow-col grid-cols-1 md:grid-cols-3 gap-4">
                            <InputField type="text" placeholder="Nom" name="last name" reference={lastNameRef} autoComplete="family-name"/>
                            <InputField type="text" placeholder="Prenom" name="first name" reference={firstNameRef} autoComplete="given-name"/>
                            <InputField type="email" placeholder="Mail" name="mail" reference={emailRef} autoComplete="email" />
                            <InputField placeholder="Objet" name="object" reference={objectRef} autoComplete="off" />
                            <TextField placeholder="Ecrivez votre message" name="message" reference={messageRef} autoComplete="off"/>
                        </div>
                        <RecaptchaButton 
                        className="md:self-end" type="submit" value="Send">
                            Envoyer
                        </RecaptchaButton>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;