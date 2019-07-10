import React from 'react';

const Card = ({name,email,username,id}) => {
        
    return(
        <div className="bg-light-blue dib br3 pa3 ma4 grow tc bw2 shadow-5">
            <img src={`https://robohash.org/${email}?200x200`} alt="robots"></img>
            <div>
                <h2>{name}</h2>
                <p>{username.toLowerCase()}</p>
                <p>{email}</p>
            </div>
        </div>
       
    );
}

export default Card;