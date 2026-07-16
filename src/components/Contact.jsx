import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {
  const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  console.log("Button Clicked!");

  emailjs
    .sendForm(
      "service_64wu0yq",
      "template_k3q6qj5",
      form.current,
      "W21X5G8BFWyvD3283"
    )
    .then(
      () => {
        alert("✅ Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("❌ Failed to send message.");
        console.log(error.text);
      }
    );
};
  return (
   <section
  id="contact"
  data-aos="fade-up"
>

      <div className="max-w-6xl mx-auto">


        <h2 className="text-5xl font-bold text-center mb-14">
          Get In Touch
        </h2>


        <div className="grid md:grid-cols-2 gap-10">


          <motion.div
            initial={{opacity:0,x:-50}}
            whileInView={{opacity:1,x:0}}
            className="space-y-8"
          >


            <div className="flex items-center gap-5">
              <FaEnvelope className="text-3xl text-blue-400"/>

              <div>
                <h3 className="font-semibold">
                  Email
                </h3>

                <p>
                  bavatharini1625@gmail.com
                </p>
              </div>

            </div>


            <div className="flex items-center gap-5">

              <FaPhoneAlt className="text-3xl text-blue-400"/>

              <div>
                <h3 className="font-semibold">
                  Phone
                </h3>

                <a
  href="tel:+918270794677"
  className="hover:text-blue-400 transition"
>
  +91 8270794677
</a>
              </div>

            </div>


            <div className="flex items-center gap-5">

              <FaMapMarkerAlt className="text-3xl text-blue-400"/>

              <div>
                <h3 className="font-semibold">
                  Location
                </h3>

                <p>
                  Thanjavur, Tamil Nadu
                </p>
              </div>

            </div>


            <div className="flex items-center gap-5">

              <FaGithub className="text-3xl text-blue-400"/>

              <a
  href="https://github.com/dashboard"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-blue-400"
>
  GitHub
</a>
            </div>


            <div className="flex items-center gap-5">

              <FaLinkedin className="text-3xl text-blue-400"/>

              
<a
  href="https://www.linkedin.com/in/bava-tharini-j-6a3685303/"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-blue-400"
>
  LinkedIn
</a>

            </div>


            <a
  href="/resume.pdf"
  download="Bavatharini_Resume.pdf"
  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition duration-300"
>
  📥 Download Resume
</a>

          </motion.div>



          <motion.form
  ref={form}
  onSubmit={sendEmail}
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  className="space-y-5"
>


            <input
  type="text"
  name="from_name"
  placeholder="Your Name"
  className="w-full p-4 rounded-xl bg-slate-800 outline-none"
  required
/>


            <input
  type="email"
  name="from_email"
  placeholder="Your Email"
  className="w-full p-4 rounded-xl bg-slate-800 outline-none"
  required
/>


            <textarea
  rows="6"
  name="message"
  placeholder="Your Message"
  className="w-full p-4 rounded-xl bg-slate-800 outline-none"
  required
/>


            <button
  type="submit"
  className="bg-blue-600 px-8 py-3 rounded-xl hover:bg-blue-700 transition"
>
  Send Message
</button>


          </motion.form>


        </div>

      </div>

    </section>
  );
}

export default Contact;