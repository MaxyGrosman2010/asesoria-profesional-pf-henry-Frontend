import bgd from '../assets/background.jpg';
import Services from './Services';

const Home = () => {
  
  return (
    <div className='flex flex-col w-full h-screen bg-cover bg-center' style={{backgroundImage:`url(${bgd})`}}>
      <p>HOME</p>
      <ContactForm />
    </div>
  )
}

export default Home