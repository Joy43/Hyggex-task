import FaqItem from "./FaqItem";

const FaqPage = () => {
  const faqData = [
    {
      question: "Can education flashcards be used for all age groups?",
      answer:
        "Yes, education flashcards can be used for all age groups, from young children to adults. The content and complexity of the flashcards may vary depending on the age and educational level of the individuals using them.",
    },
    {
      question: "What are education flashcards?",
      answer:
        "Flashcards are study aids used to memorize information through repetition. They typically consist of a question or prompt on one side and the corresponding answer on the other.",
    },
    {
      question: "Can education flashcards be used for test preparation?",
      answer:
        "Yes, education flashcards can be used for test preparation. The content and design of the flashcards may vary depending on the age, educational level, and specific learning objectives of the individuals using them.",
    },
  ];
  return (
    <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-screen">
      <div className="flex flex-col">
        <h2 className="font-bold text-[#06286E] text-5xl mt-5 tracking-tight">
          FAQ
        </h2>
      </div>
      <div className="grid  gap-3  mt-8">
        {faqData.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
