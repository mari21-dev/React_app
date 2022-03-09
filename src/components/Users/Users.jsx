import React from "react";
import styles from './Users.module.css'

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([{
            id: 1,
            photoUrl: 'https://i.pinimg.com/236x/9b/15/05/9b15052ab1ab4b603dfefeb78bfb9cfe.jpg',
            followed: false,
            fullName: 'Yana',
            status: 'Hello people!',
            location: {city: 'Moscow', country: 'Russia'}
        },
            {
                id: 2,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
                followed: true,
                fullName: 'Dmitry',
                status: 'I like playing on PS5',
                location: {city: 'Saint-Petersburg', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://stuki-druki.com/biofoto4/laura-lukina-01.jpg',
                followed: false,
                fullName: 'Laura',
                status: `I'm frontend developer from Russia!`,
                location: {city: 'Miami', country: 'USA'}
            },])
    }
    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div><div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )

}

export default Users;