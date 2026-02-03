import Link from 'next/link'
import MobileMenu from '../MobileMenu'
import Search from '../Search'
import OffCanvas from '../OffCanvas'
import ThemeSwitch from '@/components/elements/ThemeSwitch'
import Menu from '../Menu'

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch, isOffCanvas, handleOffCanvas }: any) {
    return (
        <>
            <style jsx global>{`
                /* Container logic like your Hero1 */
                .navbar .container {
                    transition: all 0.3s ease;
                    max-width: 1320px; /* Standard Desktop */
                }

                @media (min-width: 1441px) {
                    .navbar .container {
                        max-width: 90% !important;
                    }
                }

                @media (min-width: 2500px) {
                    .navbar .container {
                        max-width: 2200px !important; /* Ultra wide spacing */
                    }
                    .main-logo img {
                        height: 80px !important; /* Bigger logo for 4K */
                    }
                    .btn-header-fix {
                        font-size: 1.3rem !important;
                        padding: 15px 35px !important;
                    }
                    .search-icon-svg {
                        transform: scale(1.5); /* Scale search icon */
                    }
                }

                .navbar-stick {
                    background: rgba(13, 1, 24, 0.95) !important;
                    backdrop-filter: blur(10px);
                }
            `}</style>

            <header>
                <nav className={`navbar navbar-expand-lg w-100 z-999 ${scroll ? 'navbar-stick' : ''}`} 
                     style={{ 
                        position: scroll ? "fixed" : "relative", 
                        top: scroll ? "0" : "auto",
                        padding: '15px 0' 
                     }}>
                    <div className="container">
                        <Link className="navbar-brand d-flex main-logo align-items-center gap-3" href="/">
                            <img 
                                src="/assets/imgs/template/Elevates.png" 
                                alt="logo" 
                                className="w-auto object-contain" 
                                style={{
                                    height: scroll ? '50px' : '65px',
                                    transition: 'all 0.3s ease'
                                }} 
                            />
                        </Link>

                        <Menu />

                        <div className="d-flex align-items-center justify-content-end">
                            {/* Search Icon */}
                            <div onClick={handleSearch} className='cursor-pointer me-4 d-none d-lg-block search-icon-svg'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 24 24" fill="none">
                                    <path d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z" 
                                          stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>

                            <div className="me-4 d-none d-lg-block">
                                <ThemeSwitch />
                            </div>

                            <Link href="/contact" className="btn btn-gradient btn-header-fix rounded-pill d-none d-lg-block me-4" 
                                  style={{ color: 'white', fontSize: '0.95rem', fontWeight: '600' }}>
                                Free Consultation
                            </Link>

                            <div className="burger-icon burger-icon-white border rounded-3" onClick={handleMobileMenu}>
                                <span className="burger-icon-top" />
                                <span className="burger-icon-mid" />
                                <span className="burger-icon-bottom" />
                            </div>
                        </div>
                    </div>
                </nav>
                <OffCanvas handleOffCanvas={handleOffCanvas} isOffCanvas={isOffCanvas} />
                <Search isSearch={isSearch} handleSearch={handleSearch} />
                <MobileMenu handleMobileMenu={handleMobileMenu} isMobileMenu={isMobileMenu} handleSearch={handleSearch} />
            </header>
        </>
    )
}