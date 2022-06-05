import "./TitleBlog.css"

type TitleBlogProps = {
    className?: string
    image?: string
}

export const TitleBlog = (props: TitleBlogProps) => {
    return (
        <div className='TitleBlog__container'>
            <div className="Blog__name"><p className='p__Blog__name' >Blog</p></div>
            <div className="nav__Blog">
                <span className="spanAll navBlog">All</span>
                <span className="spanFavorites navBlog">My favorites</span>
                <span className="spanPopular navBlog">Popular</span>
            </div>
        </div>
    )
}