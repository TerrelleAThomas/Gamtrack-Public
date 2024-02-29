import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';


export default function  RecommendedGames () {
    const [games, setGames] = useState([]);

    useEffect(() => {
        // Initialize Firebase
        const firebaseConfig = {
            // Your Firebase configuration
        };
        firebase.initializeApp(firebaseConfig);

        // Fetch game recommendations from Firebase
        const gamesRef = firebase.database().ref('games');
        gamesRef.once('value', (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const gameList = Object.values(data);
                setGames(gameList);
            }
        });

        // Cleanup Firebase connection
        return () => firebase.app().delete();
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Recommended Games</h2>

            <div className="row" id="gameList">
                {games.map((game, index) => (
                    <div key={index} className="col-lg-4 col-md-6 mb-4">
                        <div className="card">
                            <img src={game.image} className="card-img-top" alt={game.title} />
                            <div className="card-body">
                                <h5 className="card-title">{game.title}</h5>
                                <p className="card-text">Release Date: {game.releaseDate}</p>
                                <p className="card-text">Genre: {game.genre}</p>
                                <button className="btn btn-view-details">View Details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
