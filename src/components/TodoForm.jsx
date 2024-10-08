import React from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = React.useState("");
  const [category, setCategory] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    //add todo
    addTodo(value, category);
    //limpar campos
    setValue("");
    setCategory("");
  };

  return (
    <div className="todo-form">
      <h2>Criar tarefa: </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o título"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="" className="personalizar-option">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type="submit">Criar Tarefa</button>
      </form>
    </div>
  );
};

export default TodoForm;
