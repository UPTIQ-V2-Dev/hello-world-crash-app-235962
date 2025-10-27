export const App = () => {
    const handleHazardClick = () => {
        throw new Error('Hello World');
    };

    return (
        <div className='h-screen w-screen flex flex-col items-center justify-center gap-4'>
            <h1 className='text-4xl font-bold'>Hello World!</h1>
            <button
                onClick={handleHazardClick}
                className='px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded font-semibold'
            >
                Hazard Button
            </button>
        </div>
    );
};
