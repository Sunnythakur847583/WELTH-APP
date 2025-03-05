import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
      <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-4">
        404
      </h1>
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-8">
        Oops! The page you&apos;re looking for doesn&apos;t exist or has been
        moved.
      </p>
      <Link href="/">
        <Button className="bg-gradient-to-r from-blue-300 to-blue-700 text-white px-6 py-3 rounded-lg shadow-lg hover:from-blue-500 hover:to-blue-700 transition-all duration-300">
          Return Home
        </Button>
      </Link>
    </div>
  );
}
