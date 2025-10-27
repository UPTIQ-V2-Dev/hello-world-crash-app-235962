import axios from 'axios';
import { api } from '@/lib/api';

export const App = () => {
    const handleHazardClick = () => {
        // Cause a complete UI crash by accessing undefined property in a way that breaks rendering
        const crashElement = null;
        (crashElement as any).nonExistentProperty.deepProperty.render();
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

    const handleErrorLogClick = () => {
        console.error('This is a test error logged to console', {
            timestamp: new Date().toISOString(),
            errorType: 'Manual Test Error',
            details: 'This error was triggered by the Error Log button'
        });
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

    const handle404Click = async () => {
        try {
            await api.get('/non-existing-endpoint');
        } catch (error) {
            console.error('404 Error:', error);
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
                onClick={handleErrorLogClick}
                className='px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded font-semibold'
            >
                Error Log Button
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
            <button
                onClick={handle404Click}
                className='px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded font-semibold'
            >
                404 Button
            </button>
        </div>
    );
};
