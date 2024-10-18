
export interface ApiResponse {
    success: boolean
    code: number
    message: string
    data: {
        events: Event[]
        pagination: Pagination
    }
}

export interface Event {
    id: string
    name: string
    slug: string
    is_published: number
    is_public: number
    is_guestlist_only: number
    created_at: string
    updated_at: string
    deleted_at: string | null
    data: EventData | null
    photo: string
}

export interface EventData {
    scheduled_dates?: string[]
    location_name?: string
    location_address?: string
}

export interface Pagination {
    perPage: number
    currentPage: number
    lastPage: number
    total: number
}
