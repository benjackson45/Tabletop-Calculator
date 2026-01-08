import Layout from '../Layouts/Layout';

const Home = ({}) => {
  return (
    <div className="p-4">
      <h1 className="text-pumpkin-500 text-6xl">TABLETOP CALCULATOR</h1>
      <p>
        This web-app is a tool for calculating various tabletop game mechanics and probabilities
      </p>
    </div>
  )
}

Home.layout = page => <Layout children={page}/>

export default Home