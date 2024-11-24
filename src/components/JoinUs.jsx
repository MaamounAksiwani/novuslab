import '../App.css';
import { Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const JoinUs = () => {
  return (

    <section className='join-us'>
      <div className="join-us-text" style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <h1 className='text-center text-3xl md:text-4xl font-medium mb-10'>Join Us on our Journey</h1>
        <p className='text-gray-500 mb-4'>Regardless of your role, visionary entrepreneur, well-established <br /> business, or individual with a dream looking
          for the appropriate team, Novus lab can help you achieve your goals
        </p>
        <button style={{ display: 'flex', alignItems: 'center' }}>
          Get in Touch
          <ArrowForwardIcon style={{ marginLeft: '8px' }} />
        </button>
      </div>

    </section>


  );
}

export default JoinUs;


