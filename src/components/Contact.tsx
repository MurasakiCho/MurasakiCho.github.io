import { useState } from "react";

function Contact() {

    const [isSubmitting, setIsSubmitting] = useState(false); // prevent user from repeatedly clicking submit
    const [status, setStatus] = useState(""); // store result of submission to display feedback

    async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault(); // stops browser's normal form submission/reload

        const form = event.currentTarget;

        setIsSubmitting(true);
        setStatus("");

        const formData = new FormData(event.currentTarget);

        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

        try{
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const result = await response.json();

            if(result.success) {
                setStatus("Your message was sent!");
                form.reset();
            } else {
                setStatus("Something went wrong.");
            }
        } catch(error) {
            setStatus("Unable to send your message.")
        } finally {
            setIsSubmitting(false);
        }
    }

    return(
        <section className="contact" id="contact">
        
        <div className="contact-content">
            <div className="contact-intro">
                <span className="eyebrow">GET IN TOUCH</span>
                <h2>Let's <em>Talk.</em></h2>
                <p className="contact-subtitle">
                    Have a question or just want to connect? I'd love to hear from you.
                </p>
            </div> 

            <form className="contact-form" onSubmit={handleSubmit}>
                
                <div className="form-group">
                    <label htmlFor="name">Name</label>

                    <input 
                        type="text" 
                        id="name" 
                        name="name"
                        required
                    />  
                </div>
                
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>

                    <input 
                        type="email" 
                        id="email" 
                        name="email"
                        required 
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>

                    <input 
                        type="text" 
                        id="subject" 
                        name="subject"
                        required 
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="message">Message</label>

                    <textarea
                        id="message" 
                        name="message" 
                        rows={5}
                        required
                    />
                </div>
                
                <button 
                    type="submit" 
                    className="submit-button"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                {status && <p className="form-status">{status}</p>}

            </form>
        </div>

        <div className="skills-index">
            <span>05</span>
            <span className="index-line"></span>
            <span>05</span>
        </div>
    </section>
    )
}

export default Contact;