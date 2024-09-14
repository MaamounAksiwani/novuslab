import '../App.css';
import { Container } from '@mui/material';

const Ourteam = () => {
    return (

        <section className='our-team'>
                <h2 style={{ textAlign: 'center'  , fontSize:'42px' , fontWeight:'500'}}>Our Team</h2>
                <div className='members'>
                    <div>
                        <img src='https://www.uni-app.com/static/media/tb9.883bbcff0c3d2244ce2d.jpg' alt='user-not-found' />
                        <h3>Fahed Jaarah</h3>
                        <p>Chief Executive Officer</p>
                    </div>

                    <div>
                        <img src='https://www.novuslab.io/team/hashmi.png' alt='user-not-found' />
                        <h3>Abdallah Al-Hashmi</h3>
                        <p>Chief Growth Officer</p>
                    </div>

                    <div>
                        <img src='https://scontent.famm7-1.fna.fbcdn.net/v/t39.30808-6/356627555_10229325771159668_5634161143106312453_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=8gYU1gvhc7MQ7kNvgG99FDB&_nc_ht=scontent.famm7-1.fna&_nc_gid=AxjRw_o1MkJC1nV5230gz5r&oh=00_AYCfjsy7JtSe6t0ccTyyRvg7Pj3ZoSKGZM6mnWOzw6XTBw&oe=66E48F27' alt='user-not-found' />
                        <h3>Yazan Al-Khatib</h3>
                        <p>Chief Technology Officer</p>
                    </div>

                    <div>
                        <img src='https://www.novuslab.io/team/laya.png' alt='user-not-found' />
                        <h3>Laya Al-Hilfi
                        </h3>
                        <p>Chief Operational Officer

                        </p>
                    </div>
                </div>
        


        </section>


    );
}

export default Ourteam;
