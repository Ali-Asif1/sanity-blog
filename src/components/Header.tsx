import Link from "next/link"

export const Header = () => {
  return (
    <main className='header'>
        <div className=' max-w-2xl px-4 mx-auto py-8'>
            <Link href={'/'}><h1 className='font-bold text-4xl'>Sanity<span className='font-bold text-cyan-500 text-4xl'>Blog</span></h1></Link>

        </div>
    </main>
  )
}
