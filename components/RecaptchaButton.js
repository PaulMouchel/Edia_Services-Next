import { useState } from 'react';
import Button from './Button'
import ReCAPTCHA from "react-google-recaptcha";

export default function RecaptchaButton({ children, className, type, value }) {
    const [tocken, setTocken] = useState("")

    return (
        <div className="flex justify-center items-center">
            <ReCAPTCHA
                sitekey={process.env.RECAPTCHA_SITE_KEY}
                onChange={tocken => setTocken(tocken)}
                onExpired={() => setTocken("")}
            />
            <Button 
            disabled={!tocken}
            className={className} type={type} value={value}>
                {children}
                
            </Button>
        </div>
    )
}
