'use client'
import Image from 'next/image'
import { useState } from 'react'
import {
    MailOutline,
    PhonePortraitOutline,
    CalendarOutline,
    LocationOutline,
    LogoFacebook,
    LogoTwitter,
    LogoInstagram,
    ChevronDown
} from 'react-ionicons'

export default function Sidebar() {
    const [showMore, setShowMore] = useState(false)

    return (
        <aside className="w-full max-w-sm p-4 bg-white/10 backdrop-blur-lg rounded-xl shadow-xl text-white">
            <div className="flex flex-col items-center">
                <figure className="w-20 h-20 overflow-hidden rounded-full mb-4">
                    <Image
                        src="/assets/images/my-avatar.png"
                        alt="Richard Hanrick"
                        width={80}
                        height={80}
                        className="rounded-full"
                    />
                </figure>

                <div className="text-center">
                    <h1 className="text-xl font-bold">Richard Hanrick</h1>
                    <p className="text-sm text-gray-300">Web Developer</p>
                </div>

                <button
                    onClick={() => setShowMore(!showMore)}
                    className="mt-4 text-sm flex items-center gap-1 hover:underline"
                >
                    <span>Show Contacts</span>
                    <ChevronDown height="18px" width="18px" color="white" />
                </button>
            </div>

            {showMore && (
                <div className="mt-6">
                    <div className="border-t border-white/20 my-4" />

                    <ul className="space-y-4">
                        <ContactItem
                            icon={<MailOutline color="white" />}
                            title="Email"
                            value="richard@example.com"
                            href="mailto:richard@example.com"
                        />
                        <ContactItem
                            icon={<PhonePortraitOutline color="white" />}
                            title="Phone"
                            value="+1 (213) 352-2795"
                            href="tel:+12133522795"
                        />
                        <ContactItem
                            icon={<CalendarOutline color="white" />}
                            title="Birthday"
                            value="June 23, 1982"
                        />
                        <ContactItem
                            icon={<LocationOutline color="white" />}
                            title="Location"
                            value="Sacramento, California, USA"
                        />
                    </ul>

                    <div className="border-t border-white/20 my-4" />

                    <div className="flex justify-center gap-4">
                        <SocialLink icon={<LogoFacebook color="white" />} />
                        <SocialLink icon={<LogoTwitter color="white" />} />
                        <SocialLink icon={<LogoInstagram color="white" />} />
                    </div>
                </div>
            )}
        </aside>
    )
}

function ContactItem({ icon, title, value, href }) {
    return (
        <li className="flex gap-3 items-start">
            <div className="mt-1">{icon}</div>
            <div>
                <p className="text-sm font-semibold">{title}</p>
                {href ? (
                    <a href={href} className="text-sm text-blue-300 hover:underline">
                        {value}
                    </a>
                ) : (
                    <p className="text-sm">{value}</p>
                )}
            </div>
        </li>
    )
}

function SocialLink({ icon }) {
    return (
        <a href="#" className="hover:scale-110 transition">
            {icon}
        </a>
    )
}
