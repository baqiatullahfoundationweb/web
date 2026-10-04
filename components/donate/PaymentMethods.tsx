import { Building2, Smartphone, ShieldCheck } from "lucide-react";
import CopyButton from "@/components/ui/CopyButton";
import SectionHeader from "@/components/ui/SectionHeader";

export interface PaymentMethodsProps {
  title?: string;
  highlight?: string;
  subtitle?: string;
  bankTitle?: string;
  bankSubtitle?: string;
  accountNameLabel?: string;
  accountName?: string;
  accountNumberLabel?: string;
  accountNumber?: string;
  bankNameLabel?: string;
  bankName?: string;
  branchLabel?: string;
  branch?: string;
  swiftLabel?: string;
  swift?: string;
  instantWalletBadge?: string;
  jazzCashTitle?: string;
  jazzCashNumber?: string;
  easypaisaTitle?: string;
  easypaisaNumber?: string;
  receiptNotice?: string;
  copyButtonText?: string;
  copiedButtonText?: string;
}

export default function PaymentMethods({
  title = "Verified Official",
  highlight = "Donation Channels",
  subtitle = "100% of your contributions go directly toward food, lodging, and accredited schooling for our children.",
  bankTitle = "Direct Bank Wire / Transfer",
  bankSubtitle = "Bank Al-Habib Limited — Pakistan & International",
  accountNameLabel = "Account Name",
  accountName = "Baqiatullah",
  accountNumberLabel = "Account Number (IBAN/Local)",
  accountNumber = "0343 0981 000823 01 8",
  bankNameLabel = "Bank Name",
  bankName = "Bank Al-Habib",
  branchLabel = "Branch",
  branch = "Main Branch",
  swiftLabel = "SWIFT Code",
  swift = "BOHFUS33",
  instantWalletBadge = "Instant Wallet",
  jazzCashTitle = "JazzCash Transfer",
  jazzCashNumber = "03006500512",
  easypaisaTitle = "Easypaisa Transfer",
  easypaisaNumber = "03006500512",
  receiptNotice = "Please share your payment screenshot with our finance team at baqiatullahpak@gmail.com or WhatsApp +92 314 6500512 for an official tax acknowledgement receipt.",
  copyButtonText = "Copy",
  copiedButtonText = "Copied!",
}: PaymentMethodsProps) {
  const mobileAccounts = [
    { service: jazzCashTitle, number: jazzCashNumber },
    { service: easypaisaTitle, number: easypaisaNumber },
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
      <SectionHeader
        title={title}
        highlight={highlight}
        subtitle={subtitle}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Bank Al-Habib Primary Card */}
        <div className="lg:col-span-7 bg-white/95 backdrop-blur-md p-6 sm:p-10 rounded-3xl border-t-4 border-t-primary shadow-xl border border-primary/20">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
              <Building2 className="w-6 h-6 stroke-[2.5]" />
            </span>
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-gray-950">{bankTitle}</h3>
              <p className="text-xs text-gray-600 font-medium">{bankSubtitle}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-white border border-gray-200 flex items-center justify-between shadow-xs">
              <div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                  {accountNameLabel}
                </span>
                <span className="text-base font-extrabold text-gray-950">{accountName}</span>
              </div>
              <CopyButton textToCopy={accountName} />
            </div>

            <div className="p-4 rounded-2xl bg-primary/5 border border-primary/25 flex items-center justify-between shadow-xs">
              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider block">
                  {accountNumberLabel}
                </span>
                <span className="text-lg font-mono font-black text-primary">{accountNumber}</span>
              </div>
              <CopyButton textToCopy={accountNumber.replace(/\s+/g, "")} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-white border border-gray-200">
                <span className="text-xs text-gray-500 block font-semibold">{bankNameLabel}</span>
                <span className="text-sm font-bold text-gray-950">{bankName}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-gray-200">
                <span className="text-xs text-gray-500 block font-semibold">{branchLabel}</span>
                <span className="text-sm font-bold text-gray-950">{branch}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-gray-200 flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-500 block font-semibold">{swiftLabel}</span>
                  <span className="text-sm font-mono font-bold text-gray-950">{swift}</span>
                </div>
                <CopyButton textToCopy={swift} />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Wallets & Instructions */}
        <div className="lg:col-span-5 space-y-6">
          {mobileAccounts.map((acc, idx) => (
            <div key={idx} className="bg-white/95 backdrop-blur-md p-6 rounded-3xl border border-primary/20 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <Smartphone className="w-5 h-5 text-amber" />
                  <h4 className="text-lg font-extrabold text-gray-950">{acc.service}</h4>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber/20 text-gray-950">
                  {instantWalletBadge}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-gray-200 flex items-center justify-between shadow-xs">
                <span className="text-base font-mono font-bold text-gray-950">{acc.number}</span>
                <CopyButton textToCopy={acc.number} />
              </div>
            </div>
          ))}

          <div className="p-5 rounded-2xl bg-white/95 border border-primary/25 flex items-start gap-3 text-xs text-gray-800 shadow-md">
            <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <p className="leading-relaxed font-medium">
              {receiptNotice}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
