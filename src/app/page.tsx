"useclient";

import { BlogType } from "@/components/Types";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const query = `*[_type=='blog'] | order(_createAt desc) {
    title,
       description,
        "currentSlug": slug.current,
        titleImage
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const data: BlogType[] = await getData();

  return (
    <div className="max-w-2xl px-4 mx-auto">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mx-auto">
        {data.map((item, idx) => (
          <div key={idx} className="w-full border border-gray-300 rounded-xl shadow-xl overflow-hidden">
            <Image
              src={urlFor(item.titleImage).url()}
              priority
              width={500}
              height={500}
              alt="image"
              className="w-full object-cover"
            />
           <div className="font-bold text-xl text-center md:text-left px-2">{item.title}</div>
           <div className="text-sm mt-4 text-gray-600 line-clamp-3 px-2">{item.description}</div>
            <Link href={`/blog/${item.currentSlug}`}><div className="flex justify-center text-white mt-6 mb-4"><button className="bg-blue-500 w-[90%] flex justify-center py-2 rounded text-sm">Read More</button></div></Link>
          </div>
        ))}
      </div>
    </div>
  );
}
