import bgd from '../assets/background.jpg';
import ContactForm from '../views/contact/ContactForm';
import Hero from './Hero';
import Services from './Services';

const Home = () => {
  
  return (
    <div className='flex flex-col w-full bg-cover bg-center' style={{backgroundImage:`url(${bgd})`}}>
      <Hero />
      <Services />
      <ContactForm />
    </div>
  )
}

export default Home