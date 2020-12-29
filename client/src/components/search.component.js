import {React, useState} from 'react';

function Search(props) {
    const [username, setUsername] = useState('');
    
    function handleSubmit(e) {
        e.preventDefault();
        // Add Saftey Checks
        props.callback(username);
    }

    return(        
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="username"
                value={username}
                onChange={e => setUsername(e.target.value)}/>
            <input type="submit" value="search"/>
        </form>
    );
}

export default Search;