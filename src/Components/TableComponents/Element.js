function charStatus(status){
  let color = ""
  if (status==="Alive"){
    color = "bg-rnmGreen"
  } else if (status === "Dead"){
    color = "bg-red-500"
  }
  else{
    color = "bg-gray-600"
  }

  return color;
}

export default function Element({ char }) {
  return (
    <div className="bg-rnmGreen w-44 h-64 rounded-md border-rnmYellow border-8 relative flex my-3" >
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `url(https://rickandmortyapi.com/api/character/avatar/${char.id}.jpeg)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <div className="top-0 left-0 absolute bg-rnmYellow p-2 rounded-full justify-center text-center items-center -m-2 text-green-700 font-bold mr-1" style={{fontSize:12}}>
        {char.id}
      </div>
      <div className={`bottom-0 min-h-16 absolute w-full text-white font-bold text-center ${charStatus(char.status)}`} style={{fontSize:14}}>
       <span data-testid="element">{char.name}</span>  {char.status === "Dead" ? "💀" : ""}
        <div className="text-sm text-gray-400" style={{fontSize:10}}>{char.location.name}</div>
      </div>
      <div className="absolute text-wrap top-0 text-center right-0 font-extrabold text-black bg-rnmYellow p-2 rounded-xl -m-1" style={{fontSize:10}}>
        {char.species} {char.gender === "Male" ? "♂️" : char.gender === "Female" ? "♀️" : "" }
      </div>
    </div>
  );
}
