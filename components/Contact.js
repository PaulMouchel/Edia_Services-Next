import { useRef } from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import InputField from './InputField'
import TextField from './TextField'
import Button from './Button'

const Contact = () => {
    const lastNameRef = useRef()
    const firstNameRef = useRef()
    const emailRef = useRef()
    const objectRef = useRef()
    const messageRef = useRef()

    return (
        <section className="bg-bg bg-cover z-0 min-h-screen" id="contact">
            <div className="bg-opacity-70 bg-blue bg-cover h-screen z-10 relative">  
                <div className="text-white absolute bottom-64 text-center w-screen">
                    <div className="flex justify-center items-center py-4">
                        <FaMapMarkerAlt className="text-4xl mr-2"/>
                        <div className="text-3xl">4, le clos rolant - 35190 Miniac sous Becherel</div>
                    </div>
                    
                    <form className="max-w-6xl m-auto">
                        <div className="flex justify-between gap-4">
                            <div className="flex flex-col justify-between w-1/2">
                                <InputField type="text" placeholder="Nom" name="last name" reference={lastNameRef} autoComplete="family-name"/>
                                <InputField type="text" placeholder="Prenom" name="first name" reference={firstNameRef} autoComplete="given-name"/>
                                <InputField type="email" placeholder="Mail" name="mail" reference={emailRef} autoComplete="email" />
                                <InputField placeholder="Objet" name="object" reference={objectRef} autoComplete="off" />
                            </div>
                            <TextField placeholder="Ecrivez votre message" name="message" reference={messageRef} autoComplete="off"/>
                        </div>
                        <Button className="self-end" type="submit" value="Send">
                            Envoyer
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;