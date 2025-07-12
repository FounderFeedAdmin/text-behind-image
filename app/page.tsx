'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
    const router = useRouter();

    useEffect(() => {
        router.push('/app');
    }, [router]);

    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className='text-center'>
                <h1 className='text-2xl font-bold mb-4'>Loading Editor...</h1>
                <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto'></div>
            </div>
        </div>
    );
}

export default Page;