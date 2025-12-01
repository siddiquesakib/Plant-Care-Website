import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
  {
    question: "How do I know when my plant needs water?",
    answer: "Stick your finger into the soil about 1-2 inches deep. If it feels dry at that depth, it's time to water. When watering, drench the soil thoroughly until water drains from the bottom, but make sure excess water doesn't sit in the saucer. Remember, it's better to underwater than overwater, as too much water can cause root rot which is one of the most common reasons plants die."
  },
  {
    question: "What type of light do indoor plants need?",
    answer: "Different plants have different light requirements. Most indoor plants thrive in bright, indirect light - near a window but not in direct sun, which can scorch leaves. Low-light plants like pothos or snake plants can do well in bathrooms or corners away from windows. Observe how sunlight moves through your space throughout the day to find the perfect spot for each plant."
  },
  {
    question: "How often should I fertilize my plants?",
    answer: "Feed your plants with a suitable fertilizer during the growing season (spring and summer), typically every 2-4 weeks. Plants are actively growing during this period and need extra nutrients. In fall and winter, reduce or stop fertilizing as most plants enter a dormant phase and require less nutrition."
  },
  {
    question: "How can I increase humidity for tropical plants?",
    answer: "Tropical plants love humidity! You can mist the leaves regularly with water, place the pot on a pebble tray filled with water (ensuring the pot sits above water level), or use a humidifier nearby. Alternatively, group plants together or place humidity-loving plants in naturally humid areas like bathrooms or kitchens."
  },
  {
    question: "When should I repot my plant?",
    answer: "Repot your plant when it has outgrown its current pot - signs include roots growing through drainage holes, water running straight through without absorbing, or the plant becoming top-heavy. Spring is the best time to repot. Choose a pot 1-2 inches larger in diameter, ensure it has drainage holes, and use quality potting mix appropriate for your plant type."
  }
];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br  py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-green-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}