"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import Button from "@/components/ui/Button";

export interface ContactFormProps {
  title?: string;
  subtitle?: string;
  nameLabel?: string;
  namePlaceholder?: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  phoneLabel?: string;
  phonePlaceholder?: string;
  subjectLabel?: string;
  subjects?: string[];
  messageLabel?: string;
  messagePlaceholder?: string;
  submitBtn?: string;
  successTitle?: string;
  successDesc?: string;
  resetBtn?: string;
}

const DEFAULT_SUBJECTS = [
  "Child Sponsorship Inquiry",
  "Volunteer Registration",
  "Donation & Wire Verification",
  "Schedule Facility Visit",
  "General Feedback",
];

export default function ContactForm({
  title = "Send an Inquiry or Message",
  subtitle = "Fill out the form below and our administration team will respond within 24 business hours.",
  nameLabel = "Your Full Name *",
  namePlaceholder = "e.g. Muhammad Ali",
  emailLabel = "Email Address *",
  emailPlaceholder = "you@domain.com",
  phoneLabel = "Phone / WhatsApp Number",
  phonePlaceholder = "+92 300 1234567",
  subjectLabel = "Subject",
  subjects = DEFAULT_SUBJECTS,
  messageLabel = "Message or Proposal *",
  messagePlaceholder = "How can we assist you or how would you like to contribute?",
  submitBtn = "Submit Message",
  successTitle = "Message Received",
  successDesc = "Thank you. Your inquiry has been forwarded to the Baqiatullah administrative team. We will contact you shortly.",
  resetBtn = "Send another message",
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: subjects[0] || "General Inquiry",
    message: "",
    botField: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please complete all required fields (*).");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(
          data?.error || "We could not process your request at this time. Please contact our helpline directly."
        );
      }
    } catch {
      setErrorMessage(
        "A network connection error occurred. Please try again or reach us via WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-primary/20 shadow-xl">
      <h3 className="text-2xl font-extrabold text-gray-950 mb-2">{title}</h3>
      <p className="text-sm text-gray-700 mb-6 font-normal">
        {subtitle}
      </p>

      {submitted ? (
        <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
          </div>
          <h4 className="text-lg font-bold text-emerald-900">{successTitle}</h4>
          <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
            {formData.name}: {successDesc}
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setErrorMessage(null);
              setFormData({ name: "", email: "", phone: "", subject: subjects[0] || "General Inquiry", message: "", botField: "" });
            }}
            className="text-xs font-bold text-emerald-700 underline mt-2 cursor-pointer"
          >
            {resetBtn}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {errorMessage && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Hidden honeypot for spam prevention */}
          <input
            type="text"
            name="website"
            value={formData.botField}
            onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
            className="sr-only"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-gray-950 mb-1">
                {nameLabel}
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={namePlaceholder}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary shadow-xs"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-gray-950 mb-1">
                {emailLabel}
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder={emailPlaceholder}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary shadow-xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-xs font-bold text-gray-950 mb-1">
                {phoneLabel}
              </label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder={phonePlaceholder}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary shadow-xs font-mono"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-xs font-bold text-gray-950 mb-1">
                {subjectLabel}
              </label>
              <select
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary shadow-xs"
              >
                {subjects.map((sub, i) => (
                  <option key={i} value={sub}>{sub}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-bold text-gray-950 mb-1">
              {messageLabel}
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={messagePlaceholder}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary shadow-xs"
            />
          </div>

          <Button
            type="submit"
            variant="teal"
            size="md"
            disabled={isSubmitting}
            className="w-full sm:w-auto shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                <span>{submitBtn}</span>
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  );
}
