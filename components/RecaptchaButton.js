import { useState } from 'react';
import Button from './Button'
import ReCAPTCHA from "react-google-recaptcha";

export default function RecaptchaButton({ children, className, type, value }) {
    const [tocken, setTocken] = useState("")

    return (
        <div className="flex justify-center items-center flex-col md:flex-row mt-8">
            <ReCAPTCHA
                sitekey={process.env.RECAPTCHA_SITE_KEY}
                onChange={tocken => setTocken(tocken)}
                onExpired={() => setTocken("")}
            />
            <Button 
            disabled={!tocken}
            className={`${className} ${tocken ? "cursor-pointer" : "cursor-default"}`} type={type} value={value}>
                {children}  
            </Button>
        </div>
    )
}
