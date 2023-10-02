import { ScaleLoader } from 'react-spinners';

const Loader = () => {
    return (
        <>
            <div className='container mx-auto align-sub h-screen'>
                <div className='flex justify-center align-middle items-center mt-44'>
                    <ScaleLoader
                        color="#9757D7"
                    />
                </div>
            </div>
        </>
    )
}

export default Loader