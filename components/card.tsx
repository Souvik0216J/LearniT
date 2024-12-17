import Link from 'next/link'
import React from 'react'

export default function Card({ img, title, channel, views, href }: { img: string, title: string, channel: string, views: string, href?: string }) {
    return (
        <div className="flex flex-col rounded-xl  p-4"
            style={{
                border: '0.88px solid',

                backdropFilter: 'saturate(180%) blur(14px)',
                background: ' #ffffff0d',
            }}
        >
            <Link
                href={href || ''}

            >

                <div>
                    <img
                        src={img}
                        alt="nft-gif"
                        width="300"
                        height="120"
                        className="rounded-xl"
                    />
                </div>
                <div className="flex flex-col  rounded-b-xl py-4 ">
                    <div className="flex justify-between">
                        <h1 className="font-RubikBold ">{title}</h1>
                        {/* <h1 className="font-bold font-RubikBold"></h1> */}
                    </div>
                    <div className="flex  justify-between font-mono">
                        <h1>{channel}</h1>
                        <p>{views}</p>


                        {/* open
                    </Link> */}
                    </div>
                </div>
            </Link>
        </div>
    )
}
