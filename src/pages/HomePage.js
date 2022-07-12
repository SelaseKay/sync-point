import React, { useState, useEffect, useRef } from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import '../resources/css/HomePage.css'
import { ReactComponent as HeaderLogo } from '../resources/svg/header-logo.svg'

export default function HomePage() {

    const [searchValue, setSearchValue] = useState('')

    return (
        <div className='block homecontainer'>


            <div className='p-menubar menubar'>
                <div className='flex flex-row align-items-center h-2rem'>
                    <div className='flex align-items-center justify-content-center'>
                        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.12249 0.605726C7.50171 -0.0882041 8.49829 -0.088204 8.87751 0.605726L9.96022 2.58693C10.1657 2.96292 10.5879 3.16622 11.0099 3.09244L13.234 2.70368C14.0129 2.56751 14.6343 3.34666 14.3282 4.07581L13.4543 6.15757C13.2884 6.55264 13.3927 7.00946 13.7135 7.29345L15.4041 8.78987C15.9963 9.314 15.7745 10.2856 15.0136 10.5009L12.8412 11.1156C12.4289 11.2323 12.1367 11.5986 12.1147 12.0265L11.9989 14.2813C11.9583 15.071 11.0604 15.5034 10.4176 15.0427L8.58254 13.7275C8.23429 13.4779 7.76571 13.4779 7.41746 13.7275L5.58236 15.0427C4.9396 15.5034 4.04172 15.071 4.00113 14.2813L3.88526 12.0265C3.86327 11.5986 3.57112 11.2323 3.15884 11.1156L0.986381 10.5009C0.225463 10.2856 0.00370476 9.314 0.595851 8.78987L2.28646 7.29344C2.6073 7.00946 2.71156 6.55264 2.54571 6.15757L1.6718 4.07581C1.36571 3.34666 1.98706 2.56751 2.76604 2.70368L4.99007 3.09244C5.41214 3.16622 5.83431 2.96292 6.03978 2.58693L7.12249 0.605726Z" fill="#2DC58E" />
                        </svg>
                    </div>
                    <div className='flex flex-column justify-content-center pb-1 pl-1'>
                        <p className='text-xl font-semibold text-900 line-height-5'>
                            SyncPoint
                        </p>
                    </div>
                </div>


                {/* large screens textinput */}
                <InputText
                    value={searchValue} onChange={(e) => {
                        setSearchValue(e.target.value)
                    }}
                    placeholder="Search" type="text" className='hidden md:inline-flex p-menuitem mx-auto w-9' />



                <div className='profile-img align-items-center justify-content-center'>
                    <i className='pi pi-user'></i>
                </div>

            </div>


            {/* small screens textinput */}
            <div className='flex'>
                <InputText
                    value={searchValue} onChange={(e) => {
                        setSearchValue(e.target.value)
                    }}
                    placeholder="Search" type="text" className='flex flex-grow-1 ml-2 mr-2 mt-2 md:hidden' />
            </div>

            {/* fabs */}
            <div className='flex flex-column align-items-center justify-content-center fixed right-0 bottom-0 mb-3 mr-3'>
                <Button icon="pi pi-upload upload-icon-color" className="p-button-rounded border-none mb-3 shadow-3 upload-doc-button" aria-label="upload-doc" />
                <Button icon="pi pi-plus plus-icon-color" className="p-button-rounded border-none bg-white shadow-3 create-doc-button" aria-label="create-doc" />
            </div>

            <div className='flex flex-column mx-2 md:mx-4 align-items-center'>
                <div className='flex flex-column md:flex-row p-3 bg-blue-500 mt-2 mx-auto md:w-10 align-self-center border-round-sm justify-content-between mb-4'>
                    <div className='flex flex-column mb-7 w-0 md:w-6 md:mb-0'>
                        <p className='text-white text-4xl font-bold'>Your Documents</p>
                        <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Vitae sapien pellentesque habitant morbi tristique senectus et netus.
                            Vitae proin sagittis nisl rhoncus mattis. Maecenas pharetra convallis posuere morbi leo urna molestie.</p>
                    </div>
                    <HeaderLogo />
                </div>
            </div>
        </div>

    )
}

