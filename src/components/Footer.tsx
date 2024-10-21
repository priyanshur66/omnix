import XIcon from '../assets/icons/x-social.svg'
import LinkedInIcon from '../assets/icons/linkedin.svg'
export const Footer = () => {
  return(
    <footer className='py-5 bg-black text-white/60 border-t border-white/20'>
    <div className="container">
      <div className='flex flex-col gap-5 sm:flex-row sm:justify-between'>
        <div className="text-center text-2xl font-semibold"> OmniX</div>
        <ul className='flex justify-center gap-2.5'>
          <li><XIcon/></li>
          <li><LinkedInIcon/></li>
        </ul>
      </div>
    </div>
    </footer>
  )
};
