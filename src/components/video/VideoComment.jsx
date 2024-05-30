import React from 'react';

const VideoComment = ({ videoComent }) => {
    return (
        <>
            {videoComent.map((comment, key) => (
                <div key={key} className='video__commnet'>
                    <img src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                    <div className='comment'>
                        <span className='name'>{comment.snippet.topLevelComment.snippet.authorDisplayName}</span>
                        <span className='dat'>{comment.snippet.topLevelComment.snippet.textOriginal}</span>
                    </div>
                </div>
            ))}
        </>
    );
}

export default VideoComment;
