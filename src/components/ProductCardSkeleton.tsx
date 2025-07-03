import React from 'react';

export const ProductCardSkeleton: React.FC = () => {
    return (
        <div
            className="flex flex-col sm:flex-row gap-4 p-4 border border-gray-200 rounded-xl shadow bg-white max-w-2xl mx-auto animate-pulse">
            <div className="w-full sm:w-[150px] h-[200px] sm:h-[150px] bg-gray-200 rounded-md"/>

            <div className="flex flex-col justify-between w-full items-center text-center sm:items-start sm:text-left">
                <div className="space-y-2 w-full">
                    <div className="h-6 w-2/3 bg-gray-200 rounded mx-auto sm:mx-0"/>
                    <div className="h-4 w-1/2 bg-gray-200 rounded mx-auto sm:mx-0"/>
                    <div className="h-4 w-1/3 bg-gray-200 rounded mx-auto sm:mx-0"/>
                </div>

                <div className="mt-4 flex gap-2 justify-center sm:justify-start w-full">
                    <div className="h-10 w-10 bg-gray-200 rounded-lg"/>
                    <div className="h-10 w-36 bg-gray-200 rounded-lg"/>
                </div>
            </div>
        </div>
    );
};
