import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player';

import { CiRead } from "react-icons/ci";
import { FcLike } from "react-icons/fc";
import { FaCommentDots } from "react-icons/fa";
import Loading from '../components/section/Loading';
import VideoComment from '../components/video/VideoComment';

const VideoPage2 = () => {
    const { videoID } = useParams();
    const [videoDetail, setVideoDetail] = useState(null);
    const [videoComent, setVideoComent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchVideoDetail = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoID}&key=${process.env.REACT_APP_YOUTUBE2_API_KEY}`);
                const data = await response.json();
                setVideoDetail(data.items[0]);

                // 최소 로딩 소스 1초 유지 
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            } catch (error) {
                console.log(error)
                setLoading(false);
            }
        }

        const fetchVideoComment = async (pageToken = '') => {
            try {
                const response = await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoID}&key=${process.env.REACT_APP_YOUTUBE2_API_KEY}`)
                const data = await response.json();
                setVideoComent(data.items);
            } catch (error) {
                console.log(error)
            }
        }

        fetchVideoDetail();
        fetchVideoComment();

    }, [videoID])


    return (
        <Main
            title="비디오 상세 페이지"
            description="플레이리스트 비디오 페이지 입니다."
        >
            {loading ? (
                <Loading />
            ) : (
                <section id='videoViewPage'>
                    {videoDetail && (
                        <div className='video__view'>
                            <div className='video__play'>
                                <ReactPlayer
                                    playing={true}
                                    url={`https://www.youtube.com/watch?v=${videoID}`}
                                    width='100%'
                                    height='100vh'
                                />
                            </div>

                            <div className='video__info'>
                                <h2 className='title'>{videoDetail.snippet.title}</h2>
                                <div className='channel'>
                                    <div>
                                        <Link to={`/channel/${videoDetail.snippet.channelId}`} className='channelTitle'>{videoDetail.snippet.channelTitle}</Link>
                                    </div>
                                    <div>
                                        <span className='view'><CiRead />{videoDetail.statistics.viewCount} </span>
                                        <span className='like'><FcLike />{videoDetail.statistics.likeCount} </span>
                                        <span className='comment'><FaCommentDots />{videoDetail.statistics.commentCount} </span>
                                    </div>
                                </div>

                            </div>
                            <div className='video__desc'>
                                {videoDetail.snippet.description}
                            </div>
                        </div>
                    )}
                    <div className='coment__info'>
                        <h1>댓글 {videoDetail.statistics.commentCount}</h1>
                    </div>
                    <VideoComment videoComent={videoComent} />

                </section>)}
        </Main>
    )
}

export default VideoPage2
