import "./Lista.css";
import React, { useState } from "react";
// import listpng from "./assets/listpng.png";

function Lista() {
  const [list, SetList] = useState([]); // esta é uma array vazia, que vai estocar os valores
  const [newItem, setNewItem] = useState("");

  function AddItem(form) {
    form.preventDefault(); // isso impede que o formulário atualize a página
    if (!newItem) {
      return; // vamos dar um return vazio, para que se não houver um novo item, ou seja, o formulário estiver vazio, nada seja retornado
    }
    SetList([...list, { text: newItem, isCompleted: false }]); // pegamos a lista vazia e adicionamos mais valores à ela.
    setNewItem("");
    document.getElementById("entrada").focus();
  }

  function Clicked(index) {
    const AuxList = [...list];
    AuxList[index].isCompleted = !AuxList[index].isCompleted;
    SetList(AuxList);
  }

  return (
    <div>
      <h1 style={{ fontFamily: "MontSerrat" }}> Sua TodoList </h1>
      <form onSubmit={AddItem}>
        <input
          id="entrada"
          type="text"
          placeholder="Adicione aqui a tarefa ->"
          value={newItem}
          onChange={(d) => {
            setNewItem(d.target.value);
          }}
        />
        <br />
        <br />
        <button className="add-button" type="submit">
          Adc
        </button>
      </form>
      <div className="lista-de-tasks">
        <div>
          {list.length < 1 ? (
            <img
              className="icon-image"
              src="https://cdn.create.vista.com/api/media/small/72131883/stock-photo-cup-of-coffee-and-notepad"
            />
          ) : (
            list.map((item, index) => (
              <div
                key={index}
                className={item.isCompleted ? "item concluído" : "item"}
              >
                <span
                  onClick={() => {
                    Clicked(index);
                  }}
                >
                  {item.text}
                </span>
                <button className="delete-buttons">Deletar</button>
              </div>
            ))
          )}
        </div>

        <button className="Danger-zone"> Deletar todos ⚠️ </button>
      </div>
    </div>
  );
}

export default Lista;
