import MyButton from "./TableComponents/Button";
import MyInput from "./TableComponents/MyInput";
import Element from "./TableComponents/Element";
import { useState, useEffect } from "react";


export default function Table({ nav }) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);

  const handleNextPage = () =>
    page * 20 < characters?.info?.count
      ? setPage((prevPage) => prevPage + 1)
      : "";

  const handleBackPage = () =>
    page !== 1 ? setPage((prevPage) => prevPage - 1) : "";
  const [characters, setCharacters] = useState(null);

  function handleGenderChange() {
    if (gender === "") {
      setGender("Male");
    } else if (gender === "Male") {
      setGender("Female");
    }else{

      setGender("");
    }
  }

  function handleStatusChange() {
    console.log(status)
    if (status === "") {
      setStatus("Alive");
    } else if (status === "Alive") {
      setStatus("Dead");
    }else{

      setStatus("");
    }
  }

  useEffect(() => {
    setPage(1);
  }, [nav, gender, status, name]);

  useEffect(() => {
    fetch(
      nav === "Name" && name.length >= 3
        ? `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&gender=${gender}&status=${status}`
        : `https://rickandmortyapi.com/api/character/?page=${page}&gender=${gender}&status=${status}`
    )
      .then((res) => {
        return res.json();
      })
      .then((e) => {
        console.log(e)
        setCharacters(e);
      });
  }, [name, page, nav, gender, status]);

  

  return (
    <div data-testid="table" className="bg-green-700 h-full pt-2 flex cursor-default justify-evenly">
      <div className="h-full m-10 w-2/3">
        <div className="h-10 flex items-center font-bold text-xl text-white justify-evenly  p-5 border-t-4 border-x-4 border-rnmYellow px-5 pt-8">
          {nav === "All" ? "" : <MyInput func={setName} nav={nav} />}
          <div data-testid="pageNumber">
            <MyButton id="prev" text={"<"} active={page !== 1} type="forward" func={handleBackPage} />
            {page}
            <MyButton
              id="next"
              text={">"}
              type="forward"
              active={page * 20 < characters?.info?.count}
              func={handleNextPage}
            />
          </div>
          <MyButton
            id="gender"
            text={gender ? gender : "Gender"}
            func={handleGenderChange}
            
          />
          <MyButton
            id="status"
            text={status ? status : "Status"}
            func={handleStatusChange}
          />
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 bg-green-700 justify-items-center border-rnmYellow border-t-0 border-4">
          {characters &&
          (nav === "All" || nav === "Name") &&
          !characters.error ? (
            characters.results.map((character) => {
              return <Element char={character} key={character.id} />;
            })
          ) : (
            <div className="text-white text-3xl font-extrabold text-center w-full col-span-5 w-full">
              "Characters Not Found."
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
