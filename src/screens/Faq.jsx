import { useState } from "react";

const Faq = () => {
  const [questionId, setQuestionId] = useState("");

  const questions = [
    {
      id: 0,
      title: "Performance of React Hook Form?",
      body: "Performance is one of the primary reasons why this library was created. React Hook Form relies on an uncontrolled form, which is the reason why the register function captures ref and the controlled component.",
    },
    {
      id: 1,
      title: "How to create an accessible input error and message?",
      body: "React Hook Form is based on Uncontrolled Components, which gives you the ability to easily build an accessible custom form. (For more information about Uncontrolled Components, read Sharing State Between Components).",
    },
    {
      id: 2,
      title: "Does it work with Class Components?",
      body: "You can’t use Hooks inside of a class component, but you can definitely mix classes and function components with Hooks in a single tree. Whether a component is a class or a function.",
    },
    {
      id: 3,
      title: "How to initialize form values?",
      body: "Being that React Hook Form relies on an uncontrolled form, you can specify a defaultValue or defaultChecked to an individual field. However, it is more common and recommended to initialize.",
    },
  ];

  return (
    <div className="min-h-screen content">
      <div className="w-full flex flex-col">
        <div>
          <h2 className="text-blue-500 text-2xl font-bold uppercase tracking-wider">
            FAQ
          </h2>
          <p
            className={`mt-1 text-base dark:text-white text-black`}
          >
            Frequently Asked Questions Page
          </p>
        </div>

        <div className="w-full mt-8">
          <ul className="questions-list">
            {questions.map((question, index) => (
              <li className="my-3" key={index}>
                <button className="w-full text-left font-medium border-0 dark:bg-zinc-800 bg-slate-100 dark:text-white text-zinc-800 cursor-pointer flex items-center pr-3 rounded-sm">
                  <h4 className="md:text-lg text-base font-medium w-full px-3 py-5" onClick={() => setQuestionId(question.id)}>
                    {question.title}
                  </h4>
                  {questionId === index ? (
                    <span className="ml-auto text-4xl font-extralight" onClick={() => setQuestionId(5)}>&#8722;</span>
                  ) : (
                    <span onClick={() => setQuestionId(5)}>&#43;</span>
                  )}
                </button>
                <div
                  className={`dark:bg-zinc-800 bg-slate-100 border-t border-black py-7 px-3 ${questionId === index ? 'block':'hidden'}`}
                >
                  <span>
                    <p className="lg:text-lg text-base dark:text-white text-zinc-800">{question.body}</p>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Faq;
