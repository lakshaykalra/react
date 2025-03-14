import User from './User'
import UserClass from './UserClass'


export default About = () => {
    return <div className='about'>
        <h1>About</h1>
        {/* <UserClass name="lakshay class" location="Bathinda class" qualification="B.Tech class" /> */}
        <UserClass />

        {/* <User name="lakshay function" location="Bathinda function" qualification="B.Tech function"/> */}
    </div>
}