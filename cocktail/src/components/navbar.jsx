import React, {useState} from 'react'
import useApi from '../hook/useApi'

const Navbar = () => {
    const [categories, setCategories] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    useApi(setCategories, setIsLoading, '/list.php?c=list');
    
    let cat = categories?.drinks;

    return (
        <div className='navbar'>
            <a href='/' className='nav-link'>Home</a>
           {cat && cat.map((c) =>(
                <>
                    <a className="nav-link" href={`/filter/${encodeURIComponent(c.strCategory)}`} key={c.strCategory}>{c.strCategory}</a>
                </>
           ))} 
        </div>
    )
}

export default Navbar
