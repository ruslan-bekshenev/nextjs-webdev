import Head from "next/head"
import Heading from "../../components/Heading";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch('http://jsonplaceholder.typicode.com/posts')
  const data = await response.json()

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: { posts: data }
  }
}

const Posts = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text="Posts list:" />
      <ul>
        {posts && posts.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Posts;