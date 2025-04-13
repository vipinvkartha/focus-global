"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQAccordion({ faqs, title, subtitle }: FAQAccordionProps) {
  return (
    <div>
      {title && (
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          {subtitle && <p className="text-gray-600 mx-auto max-w-2xl">{subtitle}</p>}
        </div>
      )}
      
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-lg font-medium text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

// Example FAQs data for freight company (can be used in a page)
export const freightFAQs = [
  {
    question: "What is Focus Global?",
    answer: "Focus Global is an international freight forwarding company providing all freight and logistics related services such as booking FCL, LCL, Air cargo, arranging charter flights or ships for international transportation of goods and services. In addition, the company provides pre-factory inspection, cargo inspection, quality checking, and trade assistance. We also act as an arbitrator between buyers and sellers."
  },
  {
    question: "Where are your network offices located?",
    answer: "We have a global network of offices in China, USA, India, Zambia, Ghana, Thailand, Congo, Dubai, and more locations. We can connect to virtually any destination worldwide."
  },
  {
    question: "What is door-to-door service?",
    answer: (
      <ul className="list-disc pl-5 space-y-2">
        <li>We collect your cargo from your shipper</li>
        <li>We pick up your shipment, check it, verify it, prepare documentation, ship from origin to destination, and handle import customs clearance</li>
        <li>Payment is only required after customs clearance</li>
        <li>We prepare all required documents and deliver to the consignee's warehouse or follow booking directions</li>
        <li>Complete hassle-free Door to Door cargo services</li>
      </ul>
    )
  },
  {
    question: "How and where to buy?",
    answer: "Customers can pay goods value directly to the supplier's account, or customers can pay goods value to Focus Global's office. We collect money from you, pay local suppliers, and collect the goods."
  },
  {
    question: "How do you check the quality of goods?",
    answer: "We check the products, take pictures, videos, examine raw materials, color, design, weight, QTP, packing details, etc. You can be involved in this process to satisfy yourself with all the information."
  },
  {
    question: "What is the minimum quantity of goods order?",
    answer: "The minimum is 1 CBM of goods. The minimum value should be USD 1000. However, we can discuss special cases individually."
  },
  {
    question: "How do you count CBM, weight, or convert volume into weight?",
    answer: (
      <ul className="list-disc pl-5 space-y-2">
        <li>For sea shipment: 1 CBM equals 300kg</li>
        <li>If a shipment is overweight, 300kg is considered as 1 CBM</li>
        <li>For air cargo: 1 CBM is equivalent to 160kg</li>
        <li>Heavy weight goods are charged on actual kg, but extra handling charges apply</li>
      </ul>
    )
  },
  {
    question: "What kind of goods are accepted for booking?",
    answer: "All general merchandise is accepted for shipping."
  },
  {
    question: "What kind of goods are not accepted?",
    answer: "We do not accept perishable products, food and fruits, meat, liquids, hazardous cargo, oil, inflammable items, arms and ammunition, drugs, or any illegal items."
  }
]; 