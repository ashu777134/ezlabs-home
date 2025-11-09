import React, { useState } from "react";

const API_URL = "https://vernanbackend.ezlab.in/api/contact-us/";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!emailRegex.test(form.email)) e.email = "Enter a valid email";
    if (!form.phone.trim()) e.phone = "Phone is required";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ loading: false, success: null, error: null });

    const eobj = validate();
    setErrors(eobj);
    if (Object.keys(eobj).length) return;

    setStatus({ loading: true, success: null, error: null });

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Network response was not ok: ${res.status} ${text}`);
      }

      const data = await res.json();
      setStatus({ loading: false, success: "Form Submitted", error: null });
      setForm({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    } catch (err) {
      console.error(err);
      setStatus({ loading: false, success: null, error: "Submission failed. Try again." });
    }
  }

  function onChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label>Name</label>
        <input name="name" value={form.name} onChange={onChange} placeholder="Your full name" />
        {errors.name && <small className="err">{errors.name}</small>}
      </div>

      <div className="field">
        <label>Email</label>
        <input name="email" type="email" value={form.email} onChange={onChange} placeholder="you@example.com" />
        {errors.email && <small className="err">{errors.email}</small>}
      </div>

      <div className="field">
        <label>Phone</label>
        <input name="phone" value={form.phone} onChange={onChange} placeholder="908765498" />
        {errors.phone && <small className="err">{errors.phone}</small>}
      </div>

      <div className="field">
        <label>Message</label>
        <textarea name="message" rows="5" value={form.message} onChange={onChange} placeholder="Write your message..." />
        {errors.message && <small className="err">{errors.message}</small>}
      </div>

      <div className="form-actions">
        <button type="submit" className="submit" disabled={status.loading}>
          {status.loading ? "Sending..." : "Send Message"}
        </button>

        <button type="button" className="clear" onClick={() => { setForm({ name:"", email:"", phone:"", message:"" }); setErrors({}); setStatus({loading:false, success:null, error:null}) }}>
          Reset
        </button>
      </div>

      <div className="form-status">
        {status.success && <div className="success">{status.success}</div>}
        {status.error && <div className="error">{status.error}</div>}
      </div>
    </form>
  );
}
