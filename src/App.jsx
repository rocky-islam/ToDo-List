import { useState } from "react";
import { MdDelete } from "react-icons/md";

function App() {
  const [inputText, setInputText] = useState("");
  // console.log(inputText);
  const [storeText, setStoreText] = useState([]);

  // console.log(storeText);

  const handleInput = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setInputText(value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setStoreText([...storeText, inputText]);

    setInputText("");
  };

  const handleDelete = (e) => {
    // console.log('clicked delete' + e)

    let newListTodo = [...storeText];
    newListTodo.splice(e, 1);
    setStoreText([...newListTodo]);
  };

  return (
    <>
      <div className="bg-black ">
        <div className="w-3/4 bg-slate-500 mx-auto min-h-screen">
          <div>
            <h1 className="text-3xl font-semibold text-lime-100 text-center mb-8">
              My ToDo List
            </h1>
            <div className="">
              <form className="flex justify-center gap-2">
                <input
                  onChange={handleInput}
                  value={inputText}
                  type="text"
                  name="inputText"
                  className="border-2 rounded-lg border-green-400 w-2/4 font-medium py-1"
                />
                <input
                  onClick={handleClick}
                  type="submit"
                  value="Submit"
                  className="border-2 border-green-400 px-2 py-1 rounded-lg bg-amber-300 hover:bg-amber-500 hover:cursor-pointer text-black font-medium"
                />
              </form>

              <div>
                <ul className="flex flex-col items-center w-full p-4">
                  {/* <li className="flex items-center gap-4">
                    Test 1
                  </li> */}
                  {storeText.map((data, i) => {
                    return (
                      <li
                        key={i}
                        className="flex items-center gap-4 justify-between w-2/4 border-green-400 rounded-xl border-2 m-2 p-1 font-medium text-lime-100 text-xl"
                      >
                        <span>
                          {i + 1}. {data}
                        </span>{" "}
                        <span
                          onClick={() => handleDelete(i)}
                          className="cursor-pointer hover:text-red-400"
                        >
                          <MdDelete />
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
