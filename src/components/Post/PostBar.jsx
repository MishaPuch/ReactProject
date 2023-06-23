import './Post.module.css'
import UsersPost from './UsersPosts/UsersPost'

function PostBar(){
    return(
        <div>
            <div className='Post_cartWithPost__I5h6M'>
                <h1>Posts</h1>
                <UsersPost name="Mihail" post="aboba"/>
                <UsersPost name="Aboba" post="lol"/>

            </div>
        </div>
    )
}
export default PostBar