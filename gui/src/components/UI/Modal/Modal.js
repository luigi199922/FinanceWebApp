import React, { useState } from "react";
import Button from "../Button/Button";
import "./Modal.css";
import { createForm} from "../../../shared/utility";

export const Modal = ({
  show,
  closed,
  number,
  updateQuestion,
  question,
  optionsForm,
  setOptionsForm,
  QuestionForm,
  inputChangedHandler,
}) => {
  const classes = ["Modal", show ? "ModalOpen" : "ModalClosed"];
  
  const [options, setOptions] = useState([]);
  const addOptionHandler = () => {
    const o = [...optionsForm];
    o.push({
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: `Option ${optionsForm.length + 1}`,
      },
      value: "",
      label: `Option ${optionsForm.length + 1}`,
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    });
    setOptionsForm(o);
  };

  const updateOptions = (event, controlName) => {
    const targetNum = event.target.placeholder.replace("Option ", "")
    const o = [...options]
    o[targetNum] = event.target.value
    o[0] = QuestionForm.answer.value
    setOptions(o)
    optionsForm[targetNum - 1].value = event.target.value
  };

  let QuestionFormDisplay = createForm(QuestionForm, inputChangedHandler);
  // const newO = optionsForm.map((o, key )=> ({value: o, key}))
  let OptionsForm = createForm(Object.assign({}, optionsForm), updateOptions);

  return (
    <div className={classes.join(" ")}>
      <h3>{number}</h3>
      <form>{QuestionFormDisplay}</form>
      <Button btnType="Info" clicked={addOptionHandler}>
        Add Option
      </Button>
      <Button
        btnType="Light"
        clicked={
          () => {
          updateQuestion({
            number,
            question: QuestionForm.question.value,
            answer: QuestionForm.answer.value,
            options,
          });
          closed();
        }
      }
      >
        Dismiss
      </Button>

      <form>{OptionsForm}</form>
    </div>
  );
};
export default Modal;
