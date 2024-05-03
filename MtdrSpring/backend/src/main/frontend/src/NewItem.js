import React, { useState } from "react";
import Button from '@mui/material/Button';

function NewItem(props) {
  const [item, setItem] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!item.trim()) {
      return;
    }
    props.addItem(item);
    setItem("");
  }

  function handleChange(e) {
    setItem(e.target.value);
  }

  return (
    <div id="newinputform">
      <form onSubmit={handleSubmit}>
        <input
          id="newiteminput"
          placeholder="Ingrese Aqui la Tarea"
          type="text"
          autoComplete="off"
          value={item}
          onChange={handleChange}
        />
        <Button
          type="submit"
          className="AddButton"
          variant="contained"
          disabled={props.isInserting}
        >
          {props.isInserting ? 'Adding…' : 'Agregar'}
        </Button>
      </form>
    </div>
  );
}

export default NewItem;
