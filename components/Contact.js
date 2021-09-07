import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'
import { MdPhoneInTalk } from 'react-icons/md'

const Contact = () => {
    return (
        <section className="bg-bg bg-cover z-0 min-h-screen" id="contact">
            <div className="bg-opacity-70 bg-blue bg-cover h-screen z-10 relative">  
                <div className="text-white absolute bottom-64 text-center w-screen">
                    <div className="flex justify-center items-center py-4">
                        <FaMapMarkerAlt className="text-4xl mr-2"/>
                        <div className="text-3xl">4, le clos rolant - 35190 Miniac sous Becherel</div>
                    </div>
                    <div className="flex justify-center items-center py-4">
                        <FaEnvelope className="text-4xl mr-2"/>
                        <div className="text-3xl font-bold">Mel : contact@ediaservices.fr</div>
                    </div>
                    <div className="flex justify-center items-center py-4">
                        <MdPhoneInTalk className="text-4xl mr-2"/>
                        <div className="text-4xl font-bold">06 27 19 76 69</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;