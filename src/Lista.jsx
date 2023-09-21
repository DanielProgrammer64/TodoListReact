import "./Lista.css";
import { useState } from "react";

function Lista() {

  const [list, SetList] = useState([]); // esta é uma array vazia, que vai estocar os valores
  const [newItem, setNewItem] = useState("");

  function AddItem(form) {
    form.preventDefault(); // o preventDefault() impede que o formulário atualize a página se estiver vazio
    if (!newItem) {
      return; // vamos dar um return vazio, para que se não houver um novo item, ou seja, o formulário estiver vazio, nada seja retornado
    }
    SetList([...list, { text: newItem, isCompleted: false }]); // pegamos a lista vazia e adicionamos mais valores à ela.
    setNewItem(""); // configuração vazia de início
    document.getElementById("entrada").focus(); // a entrada é o input lá em baixo
    // o focus(), serve para destacar o elemento na página
  }

  function Clicked(index) {
    const AuxList = [...list]; // usamos o ... para permitir que o list seja expandido por vários elementos
    AuxList[index].isCompleted = !AuxList[index].isCompleted; // nós usamos o isCompleted para gerenciar o state, se for true vira false e vice-versa
    SetList(AuxList);
  }

  function DeleteButton(index) {
    const Auxlist = [...list];
    Auxlist.splice(index); // splice serve para remover elementos de uma array, e se necessário adicionar outros, retornando os deletados
    SetList(Auxlist); // a partir de agora, o botão deletar faz com que os elementos sejam removidos da tela quando o botão deleta é pressionado
  }

  function DeleteAll() {
    SetList([]);
  }

  return (
    <div>
      <h1 style={{ fontFamily: "MontSerrat" }}> Sua TodoList </h1>
      <form onSubmit={AddItem}>
        {" "}
        {/*quando o formulário é submetido ao click do botão, ou ao enter, a função AddItem é executada*/}
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
                <button
                  onClick={() => {
                    DeleteButton(index);
                  }}
                  className="delete-buttons"
                >
                  Deletar
                </button>
              </div>
            ))
          )}
        </div>
        {list.length > 0 && (
          <button
            onClick={() => {
              DeleteAll();
            }}
            className="Danger-zone"
          >
            Deletar todos ⚠️
          </button>
        )}
      </div>
    </div>
  );
}

export default Lista;
