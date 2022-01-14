import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='my-2'>
            <h2 className='text-danger fs-1'>Error 404! Page not found</h2>
           <Link to="/home">
           <button className='btn btn-success'>Go to homepage</button>
           </Link>
        </div>
    );
};

export default NotFound;