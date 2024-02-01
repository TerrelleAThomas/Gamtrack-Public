import React from 'react';

const RecommendedGames = () => {
    return (
        <div className="container mt-5">
            <h2 className="mb-4">Recommended Games</h2>

            {/* Replace the following content with data retrieved from the backend */}
            <div className="row">
                {/* Game 1 */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src="game1_large.jpg" className="card-img-top" alt="Game 1" />
                        <div className="card-body">
                            <h5 className="card-title">Recommended Game 1</h5>
                            <p className="card-text">Release Date: January 1, 2022</p>
                        </div>
                    </div>
                </div>

                {/* Game 2 */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src="game2_large.jpg" className="card-img-top" alt="Game 2" />
                        <div className="card-body">
                            <h5 className="card-title">Recommended Game 2</h5>
                            <p className="card-text">Release Date: February 15, 2022</p>
                        </div>
                    </div>
                </div>

                {/* Game 3 */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src="game3_large.jpg" className="card-img-top" alt="Game 3" />
                        <div className="card-body">
                            <h5 className="card-title">Recommended Game 3</h5>
                            <p className="card-text">Release Date: March 30, 2022</p>
                        </div>
                    </div>
                </div>

                {/* Game 4 */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src="game4_large.jpg" className="card-img-top" alt="Game 4" />
                        <div className="card-body">
                            <h5 className="card-title">Recommended Game 4</h5>
                            <p className="card-text">Release Date: April 15, 2022</p>
                        </div>
                    </div>
                </div>

                {/* Game 5 */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src="game5_large.jpg" className="card-img-top" alt="Game 5" />
                        <div className="card-body">
                            <h5 className="card-title">Recommended Game 5</h5>
                            <p className="card-text">Release Date: May 1, 2022</p>
                        </div>
                    </div>
                </div>

                {/* Game 6 */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src="game6_large.jpg" className="card-img-top" alt="Game 6" />
                        <div className="card-body">
                            <h5 className="card-title">Recommended Game 6</h5>
                            <p className="card-text">Release Date: June 15, 2022</p>
                        </div>
                    </div>
                </div>

                {/* Game 7 */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src="game7_large.jpg" className="card-img-top" alt="Game 7" />
                        <div className="card-body">
                            <h5 className="card-title">Recommended Game 7</h5>
                            <p className="card-text">Release Date: July 1, 2022</p>
                        </div>
                    </div>
                </div>

                {/* Game 8 */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src="game8_large.jpg" className="card-img-top" alt="Game 8" />
                        <div className="card-body">
                            <h5 className="card-title">Recommended Game 8</h5>
                            <p className="card-text">Release Date: August 15, 2022</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* End of replaced content */}
        </div>
    );
};

export default RecommendedGames;
