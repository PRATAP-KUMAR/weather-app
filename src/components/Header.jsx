function Header() {
    return (
        <nav className='bg-toodark sticky top-0 left-0 z-50'>
            <div className='flex justify-center items-center h-16 mx-auto lg:max-w-4xl'>
                <div className='font-bold text-orange-500 text-center text-lg font-custom'>
                    Weather App
                </div>
            </div>
        </nav>
    )
}

export default Header