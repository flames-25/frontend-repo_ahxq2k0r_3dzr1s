import React from 'react';
import { CreditCard, ShieldCheck, Smartphone } from 'lucide-react';

const PaymentInfo = () => {
  const items = [
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: 'Cards & Netbanking',
      desc: 'Pay securely with Visa, Mastercard, RuPay and more.',
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: 'UPI & Wallets',
      desc: 'Lightning fast checkout with UPI, PhonePe, Google Pay.',
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: 'Powered by Razorpay',
      desc: 'PCI-DSS compliant and 3D secure authentication.',
    },
  ];

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Flexible, secure payments</h2>
          <p className="mt-2 text-slate-600">Choose UPI, cards, wallets or netbanking at checkout. Built on trusted infrastructure.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="mb-3 inline-flex rounded-lg bg-slate-900/90 p-3 text-white">
                {it.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{it.title}</h3>
              <p className="mt-1 text-slate-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentInfo;
