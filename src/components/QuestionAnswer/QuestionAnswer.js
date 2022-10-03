import React from "react";

const QuestionAnswer = () => {
  return (
    <div className="mt-6 mb-4 px-16">
      <div className="card w-full bg-base-100 shadow-xl mt-3">
        <div className="card-body">
          <h2 className="card-title">Q1. How does react work?</h2>
          <p>
            Ans: React is a JavaScript Library which is basically used to design
            user interface. React implements a virtual DOM that is basically a
            DOM tree representation in JavaScript. So when it needs to read or
            write to the DOM, it will use the virtual representation of it. Then
            the virtual DOM will try to find the most efficient way to update
            the browser’s DOM.
          </p>
        </div>
      </div>

      <div className="card w-full bg-base-100 shadow-xl mt-3">
        <div className="card-body">
          <h2 className="card-title">
            Q2. What is the difference between props and state?
          </h2>
          <p>
            Ans: State is the local state of the component which cannot be
            accessed and modified outside of the component. It's equivalent to
            local variables in a function. Props, on the other hand, make
            components reusable by giving components the ability to receive data
            from their parent component in the form of props. props are
            immutable and are set by the parent and they are fixed throughout
            the lifetime of a component. state is mutable.
          </p>
        </div>
      </div>

      <div className="card w-full bg-base-100 shadow-xl mt-3">
        <div className="card-body">
          <h2 className="card-title">
            Q3. How many uses of useEffect without API?
          </h2>
          <p>
            Ans: Validating an input while it's receiving characters is another
            great application for useEffect. Whilst the input is being stored in
            a state using useState, the validation takes place every time the
            input changes, giving immediate feedback to the user. We can use
            useEffect to filter an array "on the fly" by typing letters into an
            input element. To do so, we will need to use a state to save the
            input, and a filter implementation inside the useEffect that will be
            triggered when the input changes, thanks to useEffect dependencies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuestionAnswer;
