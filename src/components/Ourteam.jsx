import '../App.css';
import { Container } from '@mui/material';

const Ourteam = () => {
    return (

        <section className="py-10">
        <h2 className="text-center text-3xl md:text-4xl font-medium mb-10">Our Team</h2>
        <div className="members grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-4 md:px-8 lg:px-16">
          <div className="text-center">
            <img
              src="https://www.uni-app.com/static/media/tb9.883bbcff0c3d2244ce2d.jpg"
              alt="user-not-found"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-800">Fahed Jaarah</h3>
            <p className="text-sm text-gray-600">Chief Executive Officer</p>
          </div>
      
          <div className="text-center">
            <img
              src="https://www.novuslab.io/team/hashmi.png"
              alt="user-not-found"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-800">Abdallah Al-Hashmi</h3>
            <p className="text-sm text-gray-600">Chief Growth Officer</p>
          </div>
      
          <div className="text-center">
            <img
            src='https://scontent.famm4-2.fna.fbcdn.net/v/t39.30808-6/356627555_10229325771159668_5634161143106312453_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=YcvmyH0H8zkQ7kNvgGFprkg&_nc_zt=23&_nc_ht=scontent.famm4-2.fna&_nc_gid=AYrnEXjADIYPM8tz-GJ2Q3W&oh=00_AYAgCoJsoRUBCdSNWEXbdmytgzMkHBMrXYHNq9JjMvo0cw&oe=6748C127'
              alt="user-not-found"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-800">Yazan Al-Khatib</h3>
            <p className="text-sm text-gray-600">Chief Technology Officer</p>
          </div>
      
          <div className="text-center">
            <img
              src="https://www.novuslab.io/team/laya.png"
              alt="user-not-found"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-800">Laya Al-Hilfi</h3>
            <p className="text-sm text-gray-600">Chief Operational Officer</p>
          </div>
      
          <div className="text-center">
            <img
              src="https://scontent.famm4-2.fna.fbcdn.net/v/t1.6435-9/49135455_2282326952036505_6271144683045388288_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=cjBM7UlhqAwQ7kNvgGWkPdK&_nc_zt=23&_nc_ht=scontent.famm4-2.fna&_nc_gid=AX0EWigppXv1s8iYtvhht4U&oh=00_AYD0JERMXLAQfKbXBdT5xkYavKkApOs6SCE5_gP1ZlV6MQ&oe=676A6BD6"
              alt="user-not-found"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-800">Maamoun Alkiswani</h3>
            <p className="text-sm text-gray-600">Engineering Manager </p>
          </div>
        </div>
      </section>
      


    );
}

export default Ourteam;
