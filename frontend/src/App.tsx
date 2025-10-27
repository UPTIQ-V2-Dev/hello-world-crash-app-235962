import axios from 'axios';

export const App = () => {
    const handleHazardClick = () => {
        throw new Error('Hello World');
    };

    const handleNetworkErrorClick = async () => {
        try {
            await axios.post('https://non-existent-api-endpoint-12345.com/random-endpoint', {
                data: 'test'
            });
        } catch (error) {
            console.error('Network Error:', error);
            throw error;
        }
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
            <button
                onClick={handleNetworkErrorClick}
                className='px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded font-semibold'
            >
                Network Error Button
            </button>
        </div>
    );
};
