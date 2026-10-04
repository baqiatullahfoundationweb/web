"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Child Sponsorship Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-gray-200">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Send an Inquiry or Message</h3>
      <p className="text-sm text-gray-600 mb-6">
        Fill out the form below and our administration team will respond within 24 business hours.
      </p>

      {submitted ? (
        <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
          </div>
          <h4 className="text-lg font-bold text-emerald-900">Message Received</h4>
          <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
            Thank you, {formData.name}. Your inquiry has been forwarded to the Baqiatullah administrative team. We will contact you at {formData.email}.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: "", email: "", phone: "", subject: "Child Sponsorship Inquiry", message: "" });
            }}
            className="text-xs font-semibold text-emerald-700 underline mt-2"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-1">
                Your Full Name *
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Muhammad Ali"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#008B8B]/30 focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="you@domain.com"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#008B8B]/30 focus:border-[#008B8B]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 mb-1">
                Phone / WhatsApp Number
              </label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+92 300 1234567"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#008B8B]/30 focus:border-[#008B8B]"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-xs font-semibold text-gray-700 mb-1">
                Subject
              </label>
              <select
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#008B8B]/30 focus:border-[#008B8B]"
              >
                <option>Child Sponsorship Inquiry</option>
                <option>Volunteer Registration</option>
                <option>Donation & Wire Verification</option>
                <option>Schedule Facility Visit</option>
                <option>General Feedback</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1">
              Message or Proposal *
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="How can we assist you or how would you like to contribute?"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#008B8B]/30 focus:border-[#008B8B]"
            />
          </div>

          <Button type="submit" variant="teal" size="md" className="w-full sm:w-auto">
            <Send className="w-4 h-4 mr-2" />
            <span>Submit Message</span>
          </Button>
        </form>
      )}
    </div>
  );
}
