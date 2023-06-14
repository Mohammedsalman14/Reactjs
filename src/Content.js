import React from 'react'

const Content = () => {
    function handlenamesChange() {
        const names = ["Earn", "Grow", "Give"];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }
    return (
       <p>  Lets {handlenamesChange()} Money</p>
    )
}

export default Content