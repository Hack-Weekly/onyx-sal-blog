import React, { useEffect, useState, useRef } from "react";
// import about style sheet
import './index.css';

export const About = () => {
    const [users, setUsers] = useState([]);
                            // useRef hook to store the teamMembers array creating a mutable object that can be updated without triggering a rerender 
                            // this way value will preisists between re-renders of the component
                            // this also fixes error causes by the useEffect setting off infinite reloads
    const teamMembers = useRef(["nathanjslim", "eyobodega", "StephenODea54", "julianp15", "jwonc4602", "jpatterson933"]);
    // useEffect to fetch publicly available github user data
    useEffect(() => {
        const promises = teamMembers.current.map(member =>
            fetch(`https://api.github.com/users/${member}`)
                .then(res => res.json())
        );

        Promise.all(promises)
            .then(data => {
                // add users to our setUsers array
                setUsers(data);
                // console.log(data, "data here");
            })
            .catch(err => console.error(err))
    }, []);

    return (
        <>
            <h1>Onyx Salamander</h1>
            <h3>Members</h3>
            <div id="about-card-container">
                {users.map(user => (
                    <section className="user-about-cards" key={user.id}>
                        <h1 key={user.login}>{user.login}</h1>
                        {/* ternary conditional statements exist since not every person has their profile fully set up  */}
                        {!user.bio ? <p><span>Bio: </span>Member of Onyx Salamander</p> : <p key={user.bio}><span>Bio: </span> {user.bio}</p>}
                        {!user.blog ? <></> : <p>Portfolio: <a href={user.blog} key={user.blog}>{user.blog}</a></p>}
                        {!user.public_repos ? <p>No public repositories</p> : <p key={user.public_repos}>Public Repositories: <span>{user.public_repos}</span></p>}
                        <p key={user.followers}>Followers <span>{user.followers} </span> | Following <span>{user.following}</span></p>
                        {!user.repos_url ? <p>No bio</p> : <p key={user.repos_url}><a href={`https://github.com/${user.login}?tab=repositories`}>View Public Repositories</a></p>}

                    </section>
                ))}
            </div>
        </>
    )
}