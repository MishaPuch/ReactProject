import './NavBar.module.css'

function NavBar(){
    return(
        <nav className='NavBar_nav__Actmi'>
            <div>
            <div className='itelm'>
                <a href='/'>Profile</a></div>
            <div className='itelm'>
                <a href='/posts'>Posts</a></div>
            <div className='itelm'>
                <a href='/settings'>Setings</a></div>          
            </div>
        
        </nav>
    )
}
export default NavBar