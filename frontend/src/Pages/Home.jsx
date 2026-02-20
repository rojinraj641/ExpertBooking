import Search from "../Components/Search"
import Header from "../Components/Header"
import ExpertCardsSection from "../Components/ExpertCardsSection"

const Home = ()=>{
    return(
        <div className="flex flex-col gap-10 min-h-screen md:gap-20">
            <div className="w-full">
                <Header />
            </div>
            <div className="w-full max-w-3xl mx-auto px-4 ">
                <Search />
            </div>
            <div>
                <ExpertCardsSection />
            </div>
        </div>
    )
}

export default Home