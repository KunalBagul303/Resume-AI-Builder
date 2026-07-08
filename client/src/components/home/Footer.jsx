import React from 'react'

const Footer = () => {
    return (
        <>

            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
                    *{
                        font-family: "Geist", sans-serif;
                    }
                `}
            </style>
            <div className='pt-20 px-4'>
                <footer className="bg-white w-full max-w-[1350px] mx-auto text-black pt-8 lg:pt-12 px-4 sm:px-8 md:px-16 lg:px-28 rounded-tl-3xl rounded-tr-3xl overflow-hidden bg-gradient-to-r from-white via-green-300/60 to-white mt-40">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-8 md:gap-12">

                        <div className="lg:col-span-3 space-y-6">
                            <a href="#">
                          <img src="/logo.svg" alt="logo" className="h-11 w-auto" />
                          </a>
                            <p className="text-sm/6 text-neutral-600 max-w-96">Build professional resumes in minutes with the power of AI. Customize your resume, choose modern templates, and create a strong first impression for your next opportunity.</p>
                            <div className="flex gap-5 md:gap-6 order-1 md:order-2">
                                {/* X (Twitter) */}
                                <a href="#" className="text-neutral-600 hover:text-green-900">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                                    </svg>
                                </a>
                                {/* Github */}
                                <a href="#" className="text-neutral-600 hover:text-green-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" />
                                    </svg>
                                </a>
                                {/* Linkedin */}
                                <a href="#" className="text-neutral-600 hover:text-green-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
                                    </svg>
                                </a>
                                {/* Youtube */}
                                <a href="#" className="text-neutral-600 hover:text-green-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" />
                                    </svg>
                                </a>
                                {/* Instagram */}
                                <a href="#" className="text-neutral-600 hover:text-green-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                                </a>
                            </div>
                        </div>

                        <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-28 items-start">
                            {/* Products */}
                            <div>
                                <h3 className="font-medium text-sm mb-4">Products</h3>
                                <ul className="space-y-3 text-sm text-neutral-800">
                                    <li><a href="#" className="hover:text-green-700">Components</a></li>
                                    <li><a href="#" className="hover:text-green-700">Templates</a></li>
                                    <li><a href="#" className="hover:text-green-700">Icons</a></li>
                                </ul>
                            </div>

                            {/* Resources */}
                            <div>
                                <h3 className="font-medium text-sm mb-4">Resources</h3>
                                <ul className="space-y-3 text-sm text-neutral-800">
                                    <li><a href="#" className="hover:text-green-700">PrebuiltUI</a></li>
                                    <li><a href="#" className="hover:text-green-700">Templates</a></li>
                                    <li><a href="#" className="hover:text-green-700">Components</a></li>
                                    <li><a href="#" className="hover:text-green-700">Blogs</a></li>
                                    <li><a href="#" className="hover:text-green-700">Store</a></li>
                                </ul>
                            </div>

                            {/* Company */}
                            <div className="col-span-2 md:col-span-1">
                                <h3 className="font-medium text-sm mb-4">Company</h3>
                                <ul className="space-y-3 text-sm text-neutral-800">
                                    <li><a href="#" className="hover:text-green-700">About</a></li>
                                    <li><a href="#" className="hover:text-green-700">Vision</a></li>
                                    <li className="flex items-center gap-2">
                                        <a href="#" className="hover:text-green-700">Careers</a>
                                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-green-50 border border-green-400 text-green-700">HIRING</span>
                                    </li>
                                    <li><a href="#" className="hover:text-green-700">Privacy policy</a></li>
                                    <li><a href="#" className="hover:text-green-700">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto mt-12 pt-4 border-t border-neutral-300 flex justify-between items-center">
                        <p className="text-neutral-600 text-sm">© 2026 Resume Builder</p>
                        <p className='text-sm text-neutral-600'>All right reserved.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-3xl h-full max-h-64 bg-slate-100 rounded-full blur-[100px] pointer-events-none" />
                        <h1 className=" text-center font-extrabold leading-[0.7] text-transparent text-[clamp(3rem,15vw,15rem)] [-webkit-text-stroke:1px_#D4D4D4] mt-6" >
                           AIresume
                        </h1>
                    </div>
                </footer>
            </div>


        </>
    )
}

export default Footer
