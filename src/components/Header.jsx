import CustomLink from './CustomLink';

function Header() {
    return (
        <div className='bg-toodark sticky top-0 left-0 z-50'>
            <div className='flex justify-between items-center h-16 mx-5 lg:max-w-4xl lg:mx-auto'>
                <div className='font-bold text-orange-500 text-lg font-custom'>
                    Weather App
                </div>
                <div className='flex row space-x-2'>
                    <CustomLink routeTo="/" routeName="Cities" />
                    <CustomLink routeTo="/search" routeName="Search" />
                </div>
            </div>
        </div>
    )
}

export default Header