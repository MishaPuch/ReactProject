import './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

function Profile(){
    return(
        <div className='Profile_content__gXzFe'>
            <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq-LWBMK9Qkr7tkCZHbzaJWhxTr0QfGfT9gA&usqp=CAU'></img>
            </div>
            <div>
            ava+ descr</div>
            <MyPosts post="first post" email="misha@gmail.com" likes="12"/>
            <MyPosts post="second post"  likes="12"/>

        </div>
    )
}
export default Profile