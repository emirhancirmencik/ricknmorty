import background from "../img/herosection.jpg"

export default function HeroSection() {
  return (
    <div className="-mt-16 h-96 flex items-center justify-center border-b-2 border-rnmYellow" style={{backgroundImage: `url(${background})`, backgroundPosition:"center", backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
        <p className="pl-10 text-9xl font-extrabold text-rnmYellow ">
            Rick & Morty Characters
        </p>
    </div>
  )
}
