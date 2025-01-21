import React from "react";
import Marquee from "../ui/marquee";
import { cn } from "@/lib/utils";

const reviews = [
    {
        name: "Mark Twain",
        username: "@marktwain",
        body: "Travel is fatal to prejudice, bigotry, and narrow-mindedness.",
        img: "https://avatar.vercel.sh/marktwain",
    },
    {
        name: "Anthony Bourdain",
        username: "@bourdain",
        body: "Travel isn't always pretty. It isn't always comfortable. Sometimes it hurts, it even breaks your heart. But that's okay.",
        img: "https://avatar.vercel.sh/bourdain",
    },
    {
        name: "Bill Bryson",
        username: "@billbryson",
        body: "To my mind, the greatest reward and luxury of travel is to be able to experience everyday things as if for the first time.",
        img: "https://avatar.vercel.sh/billbryson",
    },
    {
        name: "Paul Theroux",
        username: "@theroux",
        body: "Travel is glamorous only in retrospect.",
        img: "https://avatar.vercel.sh/paultheroux",
    },
    {
        name: "Pico Iyer",
        username: "@picoiyer",
        body: "Travel is not really about leaving our homes, but leaving our habits.",
        img: "https://avatar.vercel.sh/picoiyer",
    },
    {
        name: "Bruce Chatwin",
        username: "@chatwin",
        body: "To be a traveler—and novelists are often travelers—is to be constantly reminded of the simultaneity of what is happening in the world.",
        img: "https://avatar.vercel.sh/chatwin",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

interface ReviewCardProps {
    img: string;
    name: string;
    username: string;
    body: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ img, name, username, body }) => {
    return (
        <figure
            className={cn(
                "relative w-80 cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-gray-200 bg-gray-50 hover:bg-gray-100",
                "dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={img || "/placeholder.svg"} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-gray-400">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm leading-relaxed">{body}</blockquote>
        </figure>
    );
};

function MarqueeSection() {
    return (
        <section className="relative mt-8 flex flex-col items-center justify-center overflow-hidden rounded-lg py-8">
            <Marquee pauseOnHover className="[--duration:30s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:30s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-gray-50 dark:from-gray-800"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-gray-50 dark:from-gray-800"></div></section>
    );
}

export default MarqueeSection;
