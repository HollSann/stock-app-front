import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div >
        <h1>Crear nuevo producto</h1>
        <Link href='/products/create'>crear nuevo producto</Link>
      </div>
    </>
  )
}
