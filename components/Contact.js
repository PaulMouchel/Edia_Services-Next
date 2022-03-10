import { useRef } from 'react'
import InputField from './InputField'
import TextField from './TextField'
import RecaptchaButton from './RecaptchaButton'
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const lastNameRef = useRef()
    const firstNameRef = useRef()
    const emailRef = useRef()
    const objectRef = useRef()
    const messageRef = useRef()

    const sendToastError = (text) => {
        toast.error(text, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const sendEmail = (e) => {
        e.preventDefault();
        let emailData = {
          lastName:lastNameRef.current.value.trim(), 
          firstName:firstNameRef.current.value.trim(), 
          email:emailRef.current.value.trim(), 
          object:objectRef.current.value.trim(),
          message:messageRef.current.value
        }

        const isValidName = (value) => {
            return value.length >= 3 && value.length < 100
        }
    
        const isValidEmail = (value) => {
            return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)
        }
    
        const isValidMessage = (value) => {
            return value.length >= 10
        }

        if (!isValidName(emailData.lastName)) {
            sendToastError("Le nom doit contenir entre 3 et 99 caractères")
            return
        }

        if (!isValidName(emailData.firstName)) {
            sendToastError("Le prénom doit contenir entre 3 et 99 caractères")
            return
        }

        if (!isValidEmail(emailData.email)) {
            sendToastError("L'adresse email n'est pas valide")
            return
        }

        if (!isValidMessage(emailData.message)) {
            sendToastError("Votre message doit contenir au moins 10 caractères")
            return
        }

        if(emailData.lastName && emailData.firstName && emailData.email && emailData.object && emailData.message) {
            toast.promise(
                emailjs.send(
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, 
                    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, 
                    emailData, 
                    process.env.NEXT_PUBLIC_EMAILJS_USER_ID
                )
                .then((result) => {
                    console.log(result.text);
                    e.target.reset()
                }, (error) => {
                    console.log(error.text);
                }), {
                    pending: "Envoi du message",
                    success: "Message envoyé avec succès !",
                    error: "Echec de l'envoi du message"
                }
            )
        }
    }

    return (
        <section className="bg-bg bg-cover z-0 min-h-screen pt-32" >
            <div className="bg-opacity-70 bg-blue bg-cover min-h-screen z-10 relative" id="contact">
                <h2 className="text-white text-3xl pb-6 pt-56 text-center ">Nous contacter</h2>
                <div className="text-white text-center w-screen">                    
                    <form onSubmit={sendEmail} className="max-w-6xl m-auto px-4">
                    <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    />
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