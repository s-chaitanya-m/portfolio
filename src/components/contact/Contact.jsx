import { useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_ID,
        }
      )
      .then(
        () => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="contact">
      <div className="cSection">
        <form ref={ref} onSubmit={sendEmail}>
          <h1 className="cTitle">Let&apos;s Keep In Touch</h1>
          <div className="formItem">
            <label>Name</label>
            <input type="text" name="name" placeholder="Eg. Chaitanya Shinde" />
          </div>
          <div className="formItem">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="your.email@gmail.com"
            />
          </div>
          <div className="formItem">
            <label>Message</label>
            <textarea
              rows={10}
              name="message"
              placeholder="Write your message..."
            ></textarea>
          </div>
          <button className="formButton">Send</button>
          {success && <span>Your message has been sent!</span>}
          {error && <span>Something went Wrong!</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
