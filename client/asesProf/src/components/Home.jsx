import ContactForm from '../views/contact/ContactForm';
import Hero from './Hero';
import Services from './Services';

const Home = () => {
  
  return (
    <div className='flex flex-col w-full'>
      <Hero />
      <Services />
      <ContactForm />
    </div>
  )
}

export default Home