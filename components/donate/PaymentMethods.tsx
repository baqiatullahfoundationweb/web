import { Building2, Smartphone, ShieldCheck } from "lucide-react";
import CopyButton from "@/components/ui/CopyButton";
import SectionHeader from "@/components/ui/SectionHeader";

export default function PaymentMethods() {
  const bankDetails = {
    accountName: "Baqiatullah",
    accountNumber: "0343 0981 000823 01 8",
    bankName: "Bank Al-Habib",
    branch: "Main Branch",
    routing: "987654321",
    swift: "BOHFUS33",
  };

  const mobileAccounts = [
    { service: "JazzCash", title: "Baqiatullah Foundation", number: "03006500512", color: "text-amber" },
    { service: "Easypaisa", title: "Baqiatullah Foundation", number: "03006500512", color: "text-primary" },
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
      <SectionHeader
        eyebrow="Direct Contributions"
        title="Verified Official"
        highlight="Donation Channels"
        subtitle="100% of your contributions go directly toward food, lodging, and accredited schooling for our children."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Bank Al-Habib Primary Card */}
        <div className="lg:col-span-7 glass-card p-6 sm:p-10 rounded-3xl border-t-4 border-t-primary shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
              <Building2 className="w-6 h-6 stroke-[2]" />
            </span>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Direct Bank Wire / Transfer</h3>
              <p className="text-xs text-gray-500">Bank Al-Habib Limited — Pakistan & International</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-white/90 border border-gray-200 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">
                  Account Name
                </span>
                <span className="text-base font-bold text-gray-900">{bankDetails.accountName}</span>
              </div>
              <CopyButton textToCopy={bankDetails.accountName} />
            </div>

            <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider block">
                  Account Number (IBAN/Local)
                </span>
                <span className="text-lg font-mono font-bold text-primary">{bankDetails.accountNumber}</span>
              </div>
              <CopyButton textToCopy={bankDetails.accountNumber.replace(/\s+/g, "")} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-white/90 border border-gray-200">
                <span className="text-xs text-gray-400 block">Bank Name</span>
                <span className="text-sm font-semibold text-gray-900">{bankDetails.bankName}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/90 border border-gray-200">
                <span className="text-xs text-gray-400 block">Branch</span>
                <span className="text-sm font-semibold text-gray-900">{bankDetails.branch}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/90 border border-gray-200 flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-400 block">SWIFT Code</span>
                  <span className="text-sm font-mono font-semibold text-gray-900">{bankDetails.swift}</span>
                </div>
                <CopyButton textToCopy={bankDetails.swift} />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Wallets & Instructions */}
        <div className="lg:col-span-5 space-y-6">
          {mobileAccounts.map((acc, idx) => (
            <div key={idx} className="glass-card p-6 rounded-3xl border border-primary/15 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <Smartphone className="w-5 h-5 text-amber" />
                  <h4 className="text-lg font-bold text-gray-900">{acc.service} Transfer</h4>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber/15 text-amber-dark">
                  Instant Wallet
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-3">Title: {acc.title}</p>
              <div className="p-3.5 rounded-xl bg-white/90 border border-gray-200 flex items-center justify-between">
                <span className="text-base font-mono font-bold text-gray-900">{acc.number}</span>
                <CopyButton textToCopy={acc.number} />
              </div>
            </div>
          ))}

          <div className="p-5 rounded-2xl bg-primary/10 border border-primary/20 flex items-start gap-3 text-xs text-gray-700 shadow-xs">
            <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <p>
              <strong>Receipt & Confirmation:</strong> Please share your payment screenshot with our finance team at <a href="mailto:baqiatullahpak@gmail.com" className="text-primary underline font-medium">baqiatullahpak@gmail.com</a> or WhatsApp <a href="tel:+923146500512" className="text-primary underline font-medium">+92 314 6500512</a> for an official tax acknowledgement receipt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
