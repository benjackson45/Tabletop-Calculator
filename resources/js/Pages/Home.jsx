import Layout from '../Layouts/Layout';

const Home = ({}) => {
  return (
    <div className="bg-platinum p-4 font-sans">
      <h1>HELLO WORLD</h1>
      <p>Welcome to your first Inertia app!</p>
    </div>
  )
}

Home.layout = page => <Layout children={page}/>

export default Home