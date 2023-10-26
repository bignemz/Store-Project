import React, { useState } from "react";
import "./Supportpage.scss";

function Supportpage() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "Can I work on a project I started before the hackathon?",
      answer: "Can I work on a project I started before the hackathon?",
    },
    {
      question: "Can I work on a project I started before the hackathon?",
      answer: "Can I work on a project I started before the hackathon?",
    },

    {
      question: "Can I work on a project I started before the hackathon?",
      answer: "Can I work on a project I started before the hackathon?",
    },
    {
      question: "Can I work on a project I started before the hackathon?",
      answer: "Can I work on a project I started before the hackathon?",
    },
  ];

  return (
    <section className="Support-Container">
      <div className="Support-text" id="FAQs">
        <h1>
          Frequently Ask<span>Question </span>
        </h1>
        <p className="text1">
          We got answers to the questions that you might want to ask about
          Cruise Carts
        </p>

        {faqs.length &&
          faqs.map((item, index) => (
            <div key={index} className="Support-quest">
              <div>
                <p className="Support-question">{item.question}</p>
                {index === openIndex && (
                  <p
                    className={`Support-Ans  ${
                      index === openIndex ? "show" : "hide"
                    }`}
                  >
                    {item.answer}
                  </p>
                )}
              </div>
              <span>
                <button
                  onClick={() => handleItemClick(index)}
                  className="faq-button"
                >
                  {index === openIndex ? "-" : "+"}
                </button>
              </span>
            </div>
          ))}
      </div>

      <div className="Support-image">
        <img src="./image/gif1.gif" alt="" />
      </div>
    </section>
  );
}

export default Supportpage;
