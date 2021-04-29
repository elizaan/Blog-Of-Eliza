import {Link} from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="Navigation">
            <h1> Friends' Blog </h1>

            <div className="Links">
                <Link to="/" style = {{
                    backgroundColor: '#f2aa4cff',
                    borderRadius: '8px',
                    position: 'relative',
                    right: '-950px'


                }}> Home </Link>
                <Link to="/create" style = {{
                    
                    backgroundColor: '#f2aa4cff',
                    borderRadius: '8px',
                    position: 'relative',
                    right: '-900px'

                    }}>New Blog</Link>
            </div>
        </nav>
    );

}

export default Navigation;