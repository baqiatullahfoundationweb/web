'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Heart, Users, ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

export default function DonatePage() {
  const { toast } = useToast();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      toast({
        title: 'Copied!',
        description: 'Bank details copied to clipboard.',
      });
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      toast({
        title: 'Error',
        description: 'Failed to copy. Please copy manually.',
        variant: 'destructive',
      });
    }
  };

  const bankDetails = {
    accountName: 'Baqiatullah',
    accountNumber: '0343 0981 000823 01 8',
    bankName: 'Bank Al-Habib',
    branch: 'Main Branch',
    routingNumber: '987654321',
    swiftCode: 'BOHFUS33',
    purpose: 'Donation for Children\'s Welfare'
  };

  const jazzCashDetails = {
    accountName: 'Baqiatullah Foundation',
    accountNumber: '03006500512',
    service: 'JazzCash',
    purpose: 'Donation for Children\'s Welfare'
  };

  const easypaisaDetails = {
    accountName: 'Baqiatullah Foundation',
    accountNumber: '03006500512',
    service: 'Easypaisa',
    purpose: 'Donation for Children\'s Welfare'
  };


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
            <Link href="/" className="inline-flex items-center text-[#03a1ac] hover:text-[#03a1ac]/80 mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Support <span className="text-[#03a1ac]">Our Mission</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your generous donation helps us provide education, nutrition, and care for children in need. Every contribution makes a difference.
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
            <h2 className="text-4xl font-bold mb-4">Donation Methods</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose your preferred method to make a donation. All methods are secure and go directly to supporting our children.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
            {/* Bank Al-Habib */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full shadow-xl border-t-4 border-t-[#03a1ac] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="bg-[#FFBF00] w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="h-6 w-6 text-[#03a1ac]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Bank Al-Habib</h3>
                    <p className="text-gray-600">Traditional bank transfer</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-700">Account Name:</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(bankDetails.accountName, 'bankAccountName')}
                          className="h-8 w-8 p-0"
                        >
                          {copiedField === 'bankAccountName' ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                      <p className="text-lg font-mono text-gray-900">{bankDetails.accountName}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-700">Account Number:</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(bankDetails.accountNumber, 'bankAccountNumber')}
                          className="h-8 w-8 p-0"
                        >
                          {copiedField === 'bankAccountNumber' ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                      <p className="text-lg font-mono text-gray-900">{bankDetails.accountNumber}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-700">Bank Name:</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(bankDetails.bankName, 'bankName')}
                          className="h-8 w-8 p-0"
                        >
                          {copiedField === 'bankName' ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                      <p className="text-lg font-mono text-gray-900">{bankDetails.bankName}</p>
                    </div>

                    <div className="bg-[#03a1ac]/10 p-4 rounded-lg border border-[#03a1ac]/20">
                      <p className="text-sm text-gray-600 mb-1">Purpose:</p>
                      <p className="font-semibold text-[#03a1ac]">{bankDetails.purpose}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* JazzCash */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full shadow-xl border-t-4 border-t-[#FFBF00] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="bg-[#FFBF00] w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="h-6 w-6 text-[#03a1ac]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">JazzCash</h3>
                    <p className="text-gray-600">Mobile wallet transfer</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-700">Account Name:</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(jazzCashDetails.accountName, 'jazzAccountName')}
                          className="h-8 w-8 p-0"
                        >
                          {copiedField === 'jazzAccountName' ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                      <p className="text-lg font-mono text-gray-900">{jazzCashDetails.accountName}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-700">Account Number:</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(jazzCashDetails.accountNumber, 'jazzAccountNumber')}
                          className="h-8 w-8 p-0"
                        >
                          {copiedField === 'jazzAccountNumber' ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                      <p className="text-lg font-mono text-gray-900">{jazzCashDetails.accountNumber}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-700">Service:</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(jazzCashDetails.service, 'jazzService')}
                          className="h-8 w-8 p-0"
                        >
                          {copiedField === 'jazzService' ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                      <p className="text-lg font-mono text-gray-900">{jazzCashDetails.service}</p>
                    </div>

                    <div className="bg-[#FFBF00]/10 p-4 rounded-lg border border-[#FFBF00]/20">
                      <p className="text-sm text-gray-600 mb-1">Purpose:</p>
                      <p className="font-semibold text-[#FFBF00]">{jazzCashDetails.purpose}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Easypaisa */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full shadow-xl border-t-4 border-t-[#03a1ac] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="bg-[#FFBF00] w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="h-6 w-6 text-[#03a1ac]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Easypaisa</h3>
                    <p className="text-gray-600">Mobile wallet transfer</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-700">Account Name:</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(easypaisaDetails.accountName, 'easypaisaAccountName')}
                          className="h-8 w-8 p-0"
                        >
                          {copiedField === 'easypaisaAccountName' ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                      <p className="text-lg font-mono text-gray-900">{easypaisaDetails.accountName}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-700">Account Number:</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(easypaisaDetails.accountNumber, 'easypaisaAccountNumber')}
                          className="h-8 w-8 p-0"
                        >
                          {copiedField === 'easypaisaAccountNumber' ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                      <p className="text-lg font-mono text-gray-900">{easypaisaDetails.accountNumber}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-700">Service:</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(easypaisaDetails.service, 'easypaisaService')}
                          className="h-8 w-8 p-0"
                        >
                          {copiedField === 'easypaisaService' ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                      <p className="text-lg font-mono text-gray-900">{easypaisaDetails.service}</p>
                    </div>

                    <div className="bg-[#03a1ac]/10 p-4 rounded-lg border border-[#03a1ac]/20">
                      <p className="text-sm text-gray-600 mb-1">Purpose:</p>
                      <p className="font-semibold text-[#03a1ac]">{easypaisaDetails.purpose}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-br from-[#03a1ac] to-[#03a1ac]/90 rounded-3xl p-12 text-white border-none shadow-2xl">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Impact Matters</h2>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Every donation helps us provide education, nutrition, and care for children in need. Together, we can make a lasting difference in their lives.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#FFBF00] mb-2">250+</div>
                    <div className="text-white/90">Children Helped</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#FFBF00] mb-2">8+</div>
                    <div className="text-white/90">Years of Service</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#FFBF00] mb-2">100k+</div>
                    <div className="text-white/90">Meals Provided</div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button className="bg-[#FFBF00] hover:bg-[#FFBF00]/90 text-gray-900 font-semibold px-8 py-4 text-lg rounded-full">
                      Contact Us
                    </Button>
                  </Link>
                  <Link href="/projects">
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#03a1ac] font-semibold px-8 py-4 text-lg rounded-full bg-transparent">
                      Projects
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
