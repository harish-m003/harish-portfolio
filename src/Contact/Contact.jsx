import { React, useState } from 'react';
import './Contact.css';
import Emailicon from '../ImagesLogo/gmail.png';
import Callicon from '../ImagesLogo/telephone-call.png';
import Locationicon from '../ImagesLogo/placeholder.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "c33056e3-14ad-45db-a8fb-eaffd6a3096c");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
        }
        event.preventDefault()
        reset()

    };
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [message, setmessage] = useState('')

    const reset=()=>{
        setname('')
        setemail('')
        setmessage('')
    }

    const toastmsg = () => {
        toast.success('Email sent successfully')
    }

    return (
        <div id='contact' className='contact'>
            <div className="contcat-title">
                <h1>Contact Me</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>"Excited to kickstart my journey in front-end development! Let's connect and create something amazing together."</p>

                    <div className="contact-details">
                        {contact.map((c) => (
                            <div className="contact-detail" key={c.id}>
                                <img src={c.img} alt='' /> <p >{c.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <form className="contact-right" onSubmit={onSubmit}>
                    <label htmlFor='name'>Your Name</label>
                    <input type='text' placeholder='Enter your name' name='name' id='name' value={name} onChange={(e) => setname(e.target.value)} />
                    <label htmlFor='email'>Your Email</label>
                    <input type='emmail' placeholder='Enter your email' name='email' id='email' value={email} onChange={(e) => setemail(e.target.value)} />
                    <label htmlFor='message'>Write Your Message</label>
                    <textarea name='message' rows='8' placeholder='Enter your message' id='message' value={message} onChange={(e) => setmessage(e.target.value)}></textarea>
                    <button type='submit' onClick={toastmsg} className="contact-submit">Submit Now</button>
                    <ToastContainer theme='dark' position='top-center' autoClose={2500} />
                </form>
            </div>
        </div>
    )
}
const contact = [
    {
        id: 1,
        img: Emailicon,
        detail: 'harishm2021elect105@gmail.com',
    },
    {
        id: 2,
        img: Callicon,
        detail: '+91 63853-55128'
    },
    {
        id: 3,
        img: Locationicon,
        detail: '2/83 A karthanur,Dharmapuri,Tamil Nadu, 635202'
    },
]

export default Contact