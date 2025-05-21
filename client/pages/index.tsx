import React from 'react'
import MainLayout from '@/layouts/MainLayout';
const index = () => {
    return (
        <>
            <MainLayout>
                <div className='center'>
                    <h1>Головна сторінка</h1>
                    <h3>Найкращі рецепти страв тільки у нас!</h3>
                </div>
            </MainLayout>

            <style jsx>
                {` 
                    .center {
                        margin-top: 150px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    
                `}
            </style>
        </>
    )
}

export default index;