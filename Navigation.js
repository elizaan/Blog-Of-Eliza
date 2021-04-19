const Navigation = () => {
    return (
        <nav className="Navigation">
            <h1> Eliza's Blog </h1>

            <div className="Links">
                <a href="/"> Home </a>
                <a href="/create" style = {{
                    
                    backgroundColor: '#f2aa4cff',
                    borderRadius: '8px'
                    }}>New Blog</a>
            </div>
        </nav>
    );

}

export default Navigation;