'use client'

import { useEffect, useState } from 'react'

import Header from '@components/header'
import Card from '@components/card'
import Tabs from '@components/tabs'
import Filters from "@components/filters"

import { ApiResponse, Event } from '@lib/types/event.types'

const Home: React.FC = () => {
    const [data, setData] = useState<null | ApiResponse>(null)
    const [filteredEvents, setFilteredEvents] = useState<null | Event[]>(null)
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [displayTab, setDisplayTab] = useState<string>('events')

    useEffect(() => {
        fetch('./api/events')
            .then((response) => response.json())
            .then((res: ApiResponse) => {
                setData(res)
                setFilteredEvents(res.data.events)
            })
            .catch((error) => {
                console.error('Error fetching the data:', error)
            })
    }, [])

    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = e.target.value.toLowerCase()
        setSearchTerm(searchValue)

        if (data && searchValue) {
            const filtered = data.data.events.filter((event) =>
                event.name.toLowerCase().includes(searchValue)
            )
            setFilteredEvents(filtered)
        } else if (data) {
            setFilteredEvents(data.data.events)
        }
    }

    const onTabChange = (e: React.MouseEvent<HTMLButtonElement>) => {
        setDisplayTab(e.currentTarget.name);
    };

    return (
        <>
            <Header />
            <Tabs onTabChange={onTabChange} currentTab={displayTab} />

            <div className="bg-[#f9fafb] p-4">
                <div className="flex flex-col md:flex-row justify-between pt-4 pb-8 border-b-2">
                    <h1 className="text-3xl font-bold mb-4 md:mb-0">Welcome back Luke</h1>
                    <div className="flex flex-col md:flex-row w-full md:w-auto gap-2">
                        <Filters onSearch={onSearch} searchTerm={searchTerm} />
                    </div>
                </div>

                {displayTab === 'events' && (
                    <>
                        <div className="flex justify-between py-8">
                            <div className="text-lg">
                                Events ({filteredEvents?.length})
                            </div>
                            <div className="flex gap-2">
                                <div className="border px-4 py-2 rounded-md text-sm bg-white">View</div>
                                <div className="border px-4 py-2 rounded-md text-sm bg-white">Sort by</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-between">
                            {filteredEvents && filteredEvents.length > 0 ? (
                                filteredEvents.map((event) => {
                                    return <Card key={event.id} {...event} />
                                })
                            ) : (
                                <div>No events available.</div>
                            )}
                        </div>
                    </>
                )}

                {displayTab === 'templates' && (
                    <>
                        <div className="flex justify-between py-8">
                            <div className="text-lg">Templates (0)</div>
                            <div className="flex gap-2">
                                <div className="border px-4 py-2 rounded-md text-sm bg-white">View</div>
                                <div className="border px-4 py-2 rounded-md text-sm bg-white">Sort by</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-between">
                            <div>No templates available.</div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default Home
