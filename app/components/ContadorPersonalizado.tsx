"use client";

import { useEffect, useState } from "react";

interface Props {
    title: string;
}

export default function ContadorPersonalizado({ title }: Props) {
    const storageKey = `likes_${title}`;

    const [likes, setLikes] = useState<number>(0);

    // Carrega do localStorage
    useEffect(() => {
        const storedLikes = localStorage.getItem(storageKey);

        if (storedLikes) {
            setLikes(Number(storedLikes));
        }
    }, [storageKey]);

    // Guarda sempre que altera
    useEffect(() => {
        localStorage.setItem(storageKey, likes.toString());
    }, [likes, storageKey]);

    const like = () => {
        setLikes((prev) => prev + 1);
    };

    return (
        <button
            onClick={like}
            className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white"
        >
            👍 {likes} Likes
        </button>
    );
}
