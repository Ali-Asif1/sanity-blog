import { BlogArticle } from '@/components/Types';
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image';
import { PortableText } from 'next-sanity';
import Image from 'next/image';

async function getData (slug:string){
    const query = `*[_type == "blog" && slug.current == '${slug}'] {
        "currentSlug": slug.current,
        title,
        content,
        titleImage
    }[0]`

    const data = await client.fetch(query);
    return data
}

const blogArticle =async ({params}:{params:{slug:string}}) => {
    const data:BlogArticle =await getData(params.slug);

  return (
    <div className="max-w-2xl px-4 mx-auto">
        <h1 className='font-bold text-2xl text-center underline uppercase mb-8'>Article</h1>
        <div className='text-xl font-semibold mb-4'>{data.title}</div>
        <div className='w-full rounded overflow-hidden mb-4'><Image className='w-full' src={urlFor(data.titleImage).url()} alt='image' width={500} height={500} priority/></div>
        <div className='text-gray-900'><PortableText value={data.content}/></div>
    </div>
  )
}

export default blogArticle;
