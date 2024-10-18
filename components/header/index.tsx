import Image from 'next/image'

const Header = () => {
    return (
        <header className="p-4 border-b">
            <Image
                src="https://raw.githubusercontent.com/Eventogy/eventogy-frontend-static/main/public/eventogy-logo.svg"
                alt="Logo"
                width={100}
                height={750}
            />
        </header>
    )
}

export default Header
