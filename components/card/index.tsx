import Image from 'next/image'
import propTypes from 'prop-types'

import Tag from '@components/tag'

import { formatDateRange } from '@lib/services/date.service'
import { Event } from '@lib/types/event.types'

const Card = (event: Event) => {
    const { slug, is_published, name, data, photo } = event
    const pinned = false

    return (
        <div className="flex flex-col max-w-sm shadow-lg hover:shadow-xl transition ease-in-out duration-500 group border-b-8 border-[#f1f5f9] overflow-hidden rounded-md">
            <a
                href={`/${slug}`}
                className="relative w-full h-0 pb-[56.25%] overflow-hidden mb-4"
            >
                <Image
                    src={photo}
                    alt="Landscape picture"
                    className="transition ease-in-out duration-500 group-hover:scale-125 absolute top-0 left-0 w-full h-full object-cover"
                    width={600}
                    height={400}
                />
            </a>
            {is_published && (
                <div className="mb-2 px-4">
                    <Tag />
                </div>
            )}
            <a
                href={`/${slug}`}
                className="inline-block h-min overflow-hidden px-4"
            >
                <h4 className="font-bold mb-2">{name}</h4>
            </a>
            {event?.data?.scheduled_dates && (
                <p className="text-sm mb-1 text-gray-500 px-4">
                    {formatDateRange(event.data.scheduled_dates)}
                </p>
            )}
            {data?.location_name && (
                <p className="text-sm mb-1 text-gray-500 px-4">
                    {data.location_name}
                </p>
            )}
            {pinned && <div className="mt-auto flex justify-between px-4 pb-2">
                <Image
                    src="#"
                    alt="Pin icon"
                    width={15}
                    height={15}
                />
                <button>
                    <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 512 512"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>context-menu</title>
                        <g
                            id="Page-1"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                        >
                            <g
                                id="Combined-Shape"
                                fill="#000000"
                                transform="translate(224.000000, 53.333333)"
                            >
                                <path d="M32,64 C49.673112,64 64,49.673112 64,32 C64,14.326888 49.673112,1.42108547e-14 32,1.42108547e-14 C14.326888,1.42108547e-14 0,14.326888 0,32 C0,49.673112 14.326888,64 32,64 Z M32,405.333333 C49.673112,405.333333 64,391.006445 64,373.333333 C64,355.660221 49.673112,341.333333 32,341.333333 C14.326888,341.333333 0,355.660221 0,373.333333 C0,391.006445 14.326888,405.333333 32,405.333333 Z M32,234.666667 C49.673112,234.666667 64,220.339779 64,202.666667 C64,184.993555 49.673112,170.666667 32,170.666667 C14.326888,170.666667 0,184.993555 0,202.666667 C0,220.339779 14.326888,234.666667 32,234.666667 Z"></path>
                            </g>
                        </g>
                    </svg>
                </button>
            </div>}
        </div>
    )
}

Card.propTypes = {
    prop: propTypes.any,
}

export default Card
