"use client"

import "@/scss/index.scss"
import "@/scss/buttons.scss"
import { ChangeEvent, FormEvent, useState } from 'react';
import '@/scss/contact.scss';
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";

function ContactForm() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState<boolean>(false)

  const router = useRouter()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData,[e.target.name]: e.target.value});
  };

  const handleSubmit = async (e: FormEvent) => {
    setSubmitting(true)
    e.preventDefault();
    const req = await fetch("/api/sendmail", { method: "POST", body: JSON.stringify(formData) })
    if (req.ok && req.status === 200) {
      router.push("/contact/thanks")
    } else {
      enqueueSnackbar("Some error occurred. Try again", { variant: "error" });
    }
    setSubmitting(false)
  };


  return (
    <main>
      <div className="contact-form">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <Input type="text" onChange={handleChange} disabled={submitting} value={formData.name} placeholder="Name" name="name" required={true} />
          <Input type="email" onChange={handleChange} disabled={submitting} value={formData.email} placeholder="Email" name="email" required={true} />
          <TextArea rows={4} onChange={handleChange} disabled={submitting} value={formData.message} placeholder="Message" name="message" required={true} />
          <button type="submit" disabled={submitting} className="btn btn-filled">Send Message</button>
        </form>
      </div>
    </main>
  );
}

export default ContactForm;
