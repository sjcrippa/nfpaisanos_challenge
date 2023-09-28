import { ScaleLoader } from 'react-spinners';

const Loader = () => {
    return (
        <>
            <div className='container mx-auto'>
                <div className='flex justify-center align-middle'>
                    <ScaleLoader
                        color="#3C3CE5"
                    />
                </div>
            </div>
        </>
    )
}

export default Loader