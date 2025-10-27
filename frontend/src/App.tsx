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

    const handleFilterErrorClick = () => {
        // Attempting to call filter on different non-array types
        const nonArrayItems = [
            { name: 'string', value: 'hello world' },
            { name: 'number', value: 12345 },
            { name: 'boolean', value: true },
            { name: 'null', value: null },
            { name: 'undefined', value: undefined },
            { name: 'object', value: { id: 1, name: 'test' } }
        ];

        // Pick a random non-array item to demonstrate the error
        const randomItem = nonArrayItems[Math.floor(Math.random() * nonArrayItems.length)];

        try {
            // This will throw "TypeError: items.filter is not a function"
            (randomItem.value as any).filter((item: any) => item.id === 1);
        } catch (error) {
            console.error(`Filter Error on ${randomItem.name}:`, error);
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            throw new Error(`Cannot call filter on ${randomItem.name}: ${errorMessage}`);
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
            <button
                onClick={handleFilterErrorClick}
                className='px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded font-semibold'
            >
                Filter Error Button
            </button>
        </div>
    );
};
