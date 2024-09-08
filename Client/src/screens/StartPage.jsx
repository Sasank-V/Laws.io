import LawsIO from '../assets/Laws-io.png'
import { useNavigate } from 'react-router-dom';
const StartPage = ({setPageNumber}) => {
    const navigate = useNavigate();
    const onPlay = () => {
        navigate("/LOTD");
        setPageNumber(1);
    }
    return (
        <div className='flex flex-col w-full h-full justify-center items-center text-white'>
            <div className='px-5'>
                <img src={LawsIO} alt="" className='mb-20' />
            </div>
            {/* <div className='bg-[#FFD700] text-[#2f4459] p-3 px-6 md:p-5 md:px-10 text-xl font-semibold rounded-2xl relative md:top-10 top-36'> */}
            <div className='bg-[#06870B] cursor-pointer transition-all duration-250 ease-in-out hover:p-5 hover:px-8 md:hover:p-6 md:hover:px-12 p-3 px-6 md:p-5 md:px-10 text-xl font-semibold rounded-2xl absolute top-[75%]' onClick={onPlay}>
                START PLAYING
            </div>
        </div>
    )
}
export default StartPage