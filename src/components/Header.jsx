import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='bg-gray-800  sticky top-0 left-0 z-50'>
            <div className='flex justify-between items-center h-16 mx-5'>
                <div className='font-bold text-3xl text-sky-300'>
                    WeatherApp
                </div>
                <div className='flex row space-x-5'>
                    <Link className='btn-blue' to={'/'}>Cities</Link>
                    <Link className='btn-blue' to={'/search'}>Search</Link>
                </div>
            </div>
        </div>
    )
}

export default Header