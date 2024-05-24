import Search from '../components/Search'
import Cities from '../components/Cities'

function Home() {
    return (
        <div className='min-h-[calc(100vh-4rem)] bg-dark'>
            <Search />
            <Cities />
        </div>
    )
}

export default Home