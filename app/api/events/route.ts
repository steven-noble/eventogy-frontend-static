import { NextResponse } from 'next/server'
import { createApi } from 'unsplash-js'

import { ApiResponse } from '@lib/types/event.types'
import config from '@lib/config'

export async function GET(req: Request) {
    try {
        const apiResponse = await fetch(`${config.baseURL}events.json`)
        const unsplash = createApi({
            accessKey: process.env.UNSPLASH_API_KEY,
        })

        if (!apiResponse.ok) {
            return NextResponse.json(
                {
                    success: false,
                    code: apiResponse.status,
                    message: 'Error fetching data from external API',
                    data: {
                        events: [],
                        pagination: {
                            perPage: 0,
                            currentPage: 0,
                            lastPage: 0,
                            total: 0,
                        },
                    },
                },
                { status: 500 }
            )
        }

        const data: ApiResponse = await apiResponse.json()

        const eventsWithPhotos = await Promise.all(
            data.data.events.map(async (event) => {
                try {
                    const photo: any = await unsplash.photos.getRandom({
                        query: event.name,
                        orientation: 'landscape',
                    })

                    if (photo.response && photo.response.urls) {
                        return {
                            ...event,
                            photo: photo.response.urls.regular,
                            min_height: 500,
                        }
                    } else {
                        return event
                    }
                } catch (error) {
                    console.error(
                        `Error fetching photo for event: ${event.id}`,
                        error
                    )
                    return event
                }
            })
        )

        return NextResponse.json(
            {
                ...data,
                data: {
                    events: eventsWithPhotos,
                },
            },
            { status: 200 }
        )
    } catch (error) {
        console.error('Error fetching data:', error)

        return NextResponse.json(
            {
                success: false,
                code: 500,
                message: 'An error occurred while fetching data',
                data: {
                    events: [],
                    pagination: {
                        perPage: 0,
                        currentPage: 0,
                        lastPage: 0,
                        total: 0,
                    },
                },
            },
            { status: 500 }
        )
    }
}
