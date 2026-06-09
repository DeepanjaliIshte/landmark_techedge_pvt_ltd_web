"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How long does it take to deploy a new ERP system?",
    answer: "The deployment timeline varies depending on the size of your business and specific requirements. Typically, standard deployments take 4-8 weeks, while enterprise solutions with extensive customizations may take 3-6 months. We provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you provide custom software development?",
    answer: "Yes, we specialize in building custom software tailored to your specific operational needs. Whether it's a mobile app, business portal, or an internal dashboard, our team works closely with you to design and develop scalable solutions.",
  },
  {
    question: "What kind of support do you offer after launch?",
    answer: "We offer continuous maintenance and support packages to ensure your systems run smoothly. This includes troubleshooting, regular updates, bug fixes, user training, and adding new features as your business grows.",
  },
  {
    question: "Is your cloud infrastructure secure?",
    answer: "Absolutely. We follow industry best practices for data security, including end-to-end encryption, automated backups, continuous monitoring, and compliance with data protection regulations to keep your information safe.",
  },
  {
    question: "Can I upgrade my service plan later?",
    answer: "Yes, our solutions are highly scalable. You can start with the features you need right now and seamlessly upgrade your plan or add new modules as your business requirements evolve.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="faq-accordion">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div className={`faq-item ${isOpen ? "open" : ""}`} key={index}>
            <button
              className="faq-question"
              onClick={() => toggleOpen(index)}
              aria-expanded={isOpen}
            >
              {faq.question}
              <span className="faq-icon" aria-hidden="true" />
            </button>
            <div className="faq-answer-wrapper" style={{ height: isOpen ? 'auto' : 0, overflow: 'hidden' }}>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
