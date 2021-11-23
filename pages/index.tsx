import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1 className="header">Hello Next.js 👋</h1>
    <p className="text-center p-6 mt-4 mx-auto bg-blue-200">
      <Link href="/about">
        <a className="text-blue-600 hover:text-white">About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
