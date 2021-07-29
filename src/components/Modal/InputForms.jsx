import React, { useState } from 'react';

function InputForms() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeComment = (e) => {
    setComment(e.target.value);
  };
  return (
    <div className="blockInput">
      <div className="input">
        <input
          className="inputName"
          type="text"
          onChange={handleChangeName}
          value={name}
          placeholder="Ваше имя"
        />
      </div>
      <div className="input">
        <input
          className="inputComment"
          type="text"
          onChange={handleChangeComment}
          value={comment}
          placeholder="Ваш комментарий"
        />
      </div>
      <div>
        <button>Оставить комментарий</button>
      </div>
    </div>
  );
}

export default InputForms;
