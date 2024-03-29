// EventsSection.tsx

import React from 'react';
import { MainEvent } from './index'; // Import MainEvent component here
import { aboutus, event1, event2, event3, event4, event5 } from "../components/MainEventtexxt"; // Assuming you have a component named MainEvent
import Navbar from '@/components/Navbar';
import Head from 'next/head';
const EventsSection: React.FC = () => {
    return (
        <>
            <Head>
                <title>TISB π-thon</title>
                <meta name="description" content="TISB π-thon" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="./images/ π-thon logo.png" />
            </Head>
            <div className="w-screen h-full bg-primary" >
                <Navbar />

                <div className="flex w-screen h-auto bg-primary " id="events">
                    <div className="flex flex-col items-center justify-center w-full h-auto px-6 sm:px-8">
                        <h1 className="w-full mb-8 mt-16 text-6xl font-semibold text-center sm:text-left">
                            Events
                        </h1>
                        <div className="flex flex-col items-start justify-center w-full h-auto gap-4">
                            <MainEvent title={event1.title} description={event1.description} image='./images/Junior.png' />
                            <MainEvent title={event2.title} description={event2.description} image='./images/Senior.png' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventsSection;
