import Nav from "@/components/Nav/Nav"
import Categories from "@/components/Categories/Categories"
import Main from "@/components/Main/Main"
import Hero from "@/components/Hero/Hero"

const HomePage = () => {
    return (
        <div>
            <Nav />
            <Hero />
            <Categories />
            <Main />
        </div>
    )
}
export default HomePage