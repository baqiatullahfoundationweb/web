'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function ContactPage() {

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'House No.123/A Block, Nawab Town, Lahore, Pakistan',
      link: 'https://maps.app.goo.gl/u7u5iRnzp5VwSoJ18?g_st=iwb',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+923146500512',
      link: 'tel:+923146500512',
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'baqiatullahpak@gmail.com',
      link: 'mailto:baqiatullahpak@gmail.com',
    },
  ];


  return (
    <div className="pt-16">
      <section className="relative py-20 bg-gradient-to-br from-[#03a1ac]/10 via-white to-[#FFBF00]/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get In <span className="text-[#03a1ac]">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Connect with us to learn more about our mission, volunteer opportunities, or support our cause. We&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Contact Information</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Reach out to us through any of these channels. We&apos;re here to help and answer your questions.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a href={info.link} target="_blank" rel="noopener noreferrer">
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#FFBF00] text-center group cursor-pointer">
                    <CardContent className="p-8 space-y-4 h-full flex flex-col justify-between">
                      <div className="flex-1 flex flex-col justify-center space-y-4">
                        <div className="bg-[#FFBF00] w-12 h-12 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                          <info.icon className="h-6 w-6 text-[#03a1ac]" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#03a1ac] transition-colors">
                          {info.title}
                        </h3>
                        <p className="text-gray-600 group-hover:text-gray-800 transition-colors leading-relaxed">
                          {info.content}
                        </p>
                      </div>
                      <div className="pt-2">
                        <span className="inline-flex items-center text-[#03a1ac] font-semibold group-hover:gap-2 transition-all">
                          Click to {info.title === 'Visit Us' ? 'View Location' : info.title === 'Call Us' ? 'Call Now' : 'Send Email'}
                          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Visit Our Location</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Come and see our facilities, meet our team, and learn more about our work firsthand.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-[500px] rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 group">
                <div className="relative h-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.4427699402277!2d74.24787867506669!3d31.457004150270993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190362d0c87ebd%3A0x92b6c09414c527d2!2sBaqiatullah%20Orphanage%20-%20Baqiatullah%20Foundation!5e0!3m2!1sen!2s!4v1759386915850!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <Card className="bg-gradient-to-br from-[#03a1ac] to-[#03a1ac]/90 text-white border-none hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Office Hours</h3>
                  </div>
                  <div className="space-y-4 text-white/90">
                    <div className="flex justify-between items-center py-2 border-b border-white/20">
                      <span className="font-semibold">Monday - Friday:</span>
                      <span className="text-lg">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/20">
                      <span className="font-semibold">Saturday:</span>
                      <span className="text-lg">10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-semibold">Sunday:</span>
                      <span className="text-lg text-white/70">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}
