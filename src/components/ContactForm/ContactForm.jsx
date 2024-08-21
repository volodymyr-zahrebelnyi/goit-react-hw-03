import { useId } from "react";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

export default function ContactForm({ onAddContact }) {
  const id = useId();

  const handleSubmit = evt => {
    evt.preventDefault();

    const idNano = nanoid();
    const name = evt.target.elements.name.value;
    const number = evt.target.elements.number.value;

    onAddContact({ id: idNano, name, number });

    evt.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.formWrap}>
        <label htmlFor={`${id}-name`}>Name:</label>
        <input type="text" name="name" id={`${id}-name`} />
        <label htmlFor={`${id}-number`}>Number:</label>
        <input type="text" name="number" id={`${id}-number`} />
        <button type="submit">Add contact</button>
      </div>
    </form>
  );
}
