import Heading from "../../components/Heading";
import Head from "next/head";

export const getStaticProps = async () => {
  const response = await fetch('http://jsonplaceholder.typicode.com/users')
  const data = await response.json()

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: { contacts: data }
  }
}

const Conctacts = ({ contacts }) => {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="Conctacts list:" />
      <ul>
        {contacts && contacts.map(({ id, name, email }) => (
          <li key={id}><strong>{name}</strong> ({email})</li>
        ))}
      </ul>
    </>
  )
}

export default Conctacts;