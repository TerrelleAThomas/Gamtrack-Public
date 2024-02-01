import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    // Add your Firebase configuration here
    // apiKey: "",
    // authDomain: "",
    // projectId: "",
    // storageBucket: "",
    // messagingSenderId: "",
    // appId: ""
};

firebase.initializeApp(firebaseConfig);

const ModerationPage = () => {
    const db = firebase.firestore();

    const [posts, setPosts] = useState([]);
    const [flaggedPosts, setFlaggedPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postsSnapshot = await db.collection('posts').get();
                const postsData = postsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setPosts(postsData);
            } catch (error) {
                console.error('Error fetching posts: ', error);
            }
        };

        const fetchFlaggedPosts = async () => {
            try {
                const flaggedPostsSnapshot = await db.collection('flaggedPosts').get();
                const flaggedPostsData = flaggedPostsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setFlaggedPosts(flaggedPostsData);
            } catch (error) {
                console.error('Error fetching flagged posts: ', error);
            }
        };

        fetchPosts();
        fetchFlaggedPosts();
    }, [db]);

    const removePostComment = (id) => {
        // Logic to remove the post/comment
        db.collection('posts').doc(id).delete().then(() => {
            console.log('Post/Comment successfully removed!');
        }).catch((error) => {
            console.error('Error removing post/comment: ', error);
        });
        // You may want to notify the user using a notification system
    };

    const flagPostComment = (id) => {
        // Logic to flag the post/comment
        db.collection('posts').doc(id).update({ flagged: true }).then(() => {
            console.log('Post/Comment successfully flagged for review!');
        }).catch((error) => {
            console.error('Error flagging post/comment: ', error);
        });
        // You may want to notify the user using a notification system
    };

    const removeFlaggedContent = (id) => {
        // Logic to remove the flagged content
        db.collection('flaggedPosts').doc(id).delete().then(() => {
            console.log('Flagged content successfully removed!');
        }).catch((error) => {
            console.error('Error removing flagged content: ', error);
        });
        // You may want to notify the user using a notification system
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="moderation-list">
                        <h2 className="text-center mb-4">Post/Comment Moderation</h2>

                        {posts.map(post => (
                            <div key={post.id} className="post-comment-card">
                                <h5>User Name</h5>
                                <p>{post.content}</p>
                                <small>Posted on: {post.postedOn}</small>
                                <div className="action-buttons">
                                    <button className="btn btn-danger" onClick={() => removePostComment(post.id)}>Remove</button>
                                    <button className="btn btn-warning" onClick={() => flagPostComment(post.id)}>Flag</button>
                                </div>
                            </div>
                        ))}

                    </div>

                    <div className="flagged-list">
                        <h2 className="text-center mb-4">Flagged Content</h2>

                        {flaggedPosts.map(flaggedPost => (
                            <div key={flaggedPost.id} className="flagged-comment-card">
                                <h5>User Name</h5>
                                <p>{flaggedPost.content}</p>
                                <small>Flagged on: {flaggedPost.flaggedOn}</small>
                                <div className="action-buttons">
                                    <button className="btn btn-danger" onClick={() => removeFlaggedContent(flaggedPost.id)}>Remove</button>
                                </div>
                            </div>
                        ))}

                    </div>

                    <a href="admin-dashboard.html" className="btn btn-secondary btn-block">Back to Admin Dashboard</a>
                </div>
            </div>
        </div>
    );
};

export default ModerationPage;
