"use client"

import "@/scss/index.scss"
import "@/scss/buttons.scss"
import { ChangeEvent, FormEvent, useState } from 'react';
import '@/scss/contact.scss';
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import { useRouter } from "next/navigation";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const router = useRouter()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData,[e.target.name]: e.target.value});
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push("/contact/thanks")
  };

  return (
    <main>
      <div className="contact-form">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <Input type="text" onChange={handleChange} value={formData.name} placeholder="Name" name="name" required={true} />
          <Input type="email" onChange={handleChange} value={formData.email} placeholder="Email" name="email" required={true} />
          <TextArea rows={4} onChange={handleChange} value={formData.message} placeholder="Message" name="message" required={true} />
          <button type="submit" className="btn btn-filled">Send Message</button>
        </form>
      </div>
    </main>
  );
}

export default ContactForm;
