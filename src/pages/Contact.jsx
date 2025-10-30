import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

// EmailJS Configuration
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Add an email service (Gmail, Outlook, etc.)
// 3. Create an email template with variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
// 4. Replace the values below with your actual EmailJS credentials:
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID' // e.g., 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID' // e.g., 'template_xyz789'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY' // e.g., 'your_public_key_here'

export default function Contact(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      setIsSubmitting(true)
      setSubmitError('')
      
      try {
        // Send email using EmailJS
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'baguldurgesh05@gmail.com'
        }

        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY
        )
        
        setIsSubmitting(false)
        setSubmitSuccess(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false)
        }, 5000)
      } catch (error) {
        console.error('Email send failed:', error)
        setIsSubmitting(false)
        setSubmitError('Failed to send message. Please try emailing directly at baguldurgesh05@gmail.com')
      }
    }
  }

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "sagarkatkar28@gmail.com",
      action: "mailto:sagarkatkar28@gmail.com"
    },
    {
      icon: "📱",
      title: "Phone/WhatsApp",
      value: "+91 8888202842",
      action: "tel:+918888202842"
    },
    {
      icon: "📍",
      title: "Location",
      value: "Nashik, Maharashtra, India",
      action: null
    }
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sagar-katkar-a3ab50146/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: "GitHub",
      url: "https://github.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: "Itch.io",
      url: "https://itch.io",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.5 16.5l-4.5-4.5 1.5-1.5 3 3 6-6 1.5 1.5-7.5 7.5z"/>
        </svg>
      )
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    }
  ]

  return (
    <section className="space-y-12">
      <div className="text-center">
        <h1 className="section-title">Get In Touch</h1>
        <p className="section-subtitle mx-auto">
          Have a project in mind or want to discuss game development opportunities? 
          Feel free to reach out!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="card">
          <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
          
          {submitSuccess ? (
            <div className="bg-green-900/30 border border-green-500 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
              <p className="text-slate-300">
                Thank you for reaching out. I'll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitError && (
                <div className="bg-red-900/30 border border-red-500 rounded-lg p-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{submitError}</span>
                  </div>
                </div>
              )}
              
              <div>
                <label htmlFor="name" className="block text-slate-300 mb-2">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg bg-slate-900 text-slate-200 border ${
                    errors.name ? 'border-red-500' : 'border-slate-700'
                  } focus:border-cyan-500 focus:outline-none transition-colors`}
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-slate-300 mb-2">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg bg-slate-900 text-slate-200 border ${
                    errors.email ? 'border-red-500' : 'border-slate-700'
                  } focus:border-cyan-500 focus:outline-none transition-colors`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-slate-300 mb-2">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg bg-slate-900 text-slate-200 border ${
                    errors.subject ? 'border-red-500' : 'border-slate-700'
                  } focus:border-cyan-500 focus:outline-none transition-colors`}
                  placeholder="What's this regarding?"
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-slate-300 mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className={`w-full p-3 rounded-lg bg-slate-900 text-slate-200 border ${
                    errors.message ? 'border-red-500' : 'border-slate-700'
                  } focus:border-cyan-500 focus:outline-none transition-colors`}
                  placeholder="Your detailed message here..."
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary w-full ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Message...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          )}
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="card">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-2xl mr-4 mt-1">{method.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{method.title}</h3>
                    {method.action ? (
                      <a 
                        href={method.action} 
                        className="text-slate-300 hover:text-cyan-400 transition-colors"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <div className="text-slate-300">{method.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
            <p className="text-slate-300 mb-6">
              Follow me on social media for updates on my latest projects and game development insights.
            </p>
            <div className="flex gap-4 flex-wrap">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 hover:text-slate-900 transition-all"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold mb-4">Response Time</h2>
            <p className="text-slate-300 mb-4">
              I typically respond to emails within 24-48 hours. For urgent matters, 
              please call or message me on WhatsApp.
            </p>
            <div className="flex items-center text-sm">
              <div className="w-3 h-3 rounded-full bg-emerald-500 mr-2"></div>
              <span>Usually responds within a day</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}