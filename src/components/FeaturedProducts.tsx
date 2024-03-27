import courseData from "@/data/music_courses.json"
import Link from "next/link"

function FeaturedProducts() {
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-2xl leading-8 font-bold tracking-tight text-white sm:text-3xl">FEATURED PRODUCTS</h2>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        </div>
      </div>
      <div className="mt-20 text-center">
        <Link href={"/courses"}>view all products</Link>
      </div>
    </div>
  )
}

export default FeaturedProducts
