const Loading = () => {
    return (
        <div className='w-full h-full flex justify-center items-center flex-col gap-5 text-2xl text-center'>
            <div className='w-[100px] h-[100px] border-[10px] rounded-full border-t-yellow-500 animate-spin'></div>
            Loading...
        </div>
    )
}
export default Loading