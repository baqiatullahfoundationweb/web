import type { Metadata } from "next";
import PaymentMethods from "@/components/donate/PaymentMethods";
import TransparencyBreakdown from "@/components/donate/TransparencyBreakdown";
import CtaBanner from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Donate & Support | Baqiatullah Foundation Pakistan",
  description:
    "Official donation channels for Baqiatullah Foundation. Direct Bank Al-Habib wire transfer, JazzCash, and Easypaisa details with 100% transparent child welfare allocation.",
};

export default function DonatePage() {
  return (
    <div className="flex flex-col">
      <PaymentMethods />
      <TransparencyBreakdown />
      <CtaBanner />
    </div>
  );
}
