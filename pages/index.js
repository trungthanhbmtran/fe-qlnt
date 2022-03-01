import Header from '../components/header';
import Layout from '../components/Layout/Layout';
import { Typography } from '@material-ui/core';
import {useAuth} from '../hooks/useAuth'



const Home = () => {
  // const Authentication = useAuth();
  return (
    <>
      {/* <Header />
      <h1>Hello World!</h1> */}
      <Layout >
                <h1>Hướng dẫn sử dụng phần mềm</h1> 
                <Typography variant="h1" component="h2">
              </Typography>
      </Layout>
    </>
  )
}

export default Home