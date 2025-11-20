import Link from "next/link";

export default function Counter() {
    return (
        <div>
            <h2>Counter</h2>

            <Link href="/counter">
                Counter
            </Link>
        </div>
    );
}
