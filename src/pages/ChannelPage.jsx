import React, { useEffect, useState } from 'react';
import Main from '../components/section/Main';
import { useParams } from 'react-router-dom';

import { CiBadgeDollar } from "react-icons/ci";
import { CiMedal } from "react-icons/ci";
import { CiRead } from "react-icons/ci";

const ChannelPage = () => {
    const { channelID } = useParams();
    const [channelDetail, setChannelDetail] = useState(null);
    const [channelVideo, setChannelVideo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nextPageToken, setNextPageToken] = useState(null);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const detail = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet,brandingSettings,statistics,contentDetails&id=${channelID}&key=${process.env.REACT_APP_YOUTUBE2_API_KEY}`)
                const detailData = await detail.json();
                setChannelDetail(detailData.items[0]);
                console.log(detailData);

                const video = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelID}&order=date&maxResults=48&key=${process.env.REACT_APP_YOUTUBE2_API_KEY}`)
                const videoData = await video.json();
                setChannelVideo(videoData.items);
                setNextPageToken(videoData.nextPageToken);
                console.log(videoData);

            } catch (error) {
                console.log('데이터를 가져오지 못했습니다.', error);
            } finally {
                setLoading(false);
            }
        };
        fetchResults();
    }, [channelID]);

    if (loading) {
        return <div>로딩 중...</div>;
    }

    return (
        <Main
            title="유튜버 채널"
            description="유튜버 채널 페이지입니다."
        >
            <section id='channelPage'>
                {channelDetail && (
                    <div className='channel__inner'>
                        <div className='channel__header' style={{ backgroundImage: `url(${channelDetail.brandingSettings?.image?.bannerExternalUrl})` }}>
                            <div className='circle'>
                                <img src={channelDetail.snippet.thumbnails.high.url} alt={channelDetail.snippet.title} />
                            </div>
                        </div>
                        <div className="channel__info">
                            <h3 className='title'>{channelDetail.snippet.title}</h3>
                            <p className='desc'>{channelDetail.snippet.description}</p>
                            <div className='info'>
                                <span><CiBadgeDollar />{channelDetail.statistics.subscriberCount}</span>
                                <span><CiMedal />{channelDetail.statistics.videoCount}</span>
                                <span><CiRead />{channelDetail.statistics.viewCount}</span>
                            </div>
                            <div>
                                <h4>관련 재생목록</h4>
                                <ul>
                                    {Object.keys(channelDetail.contentDetails.relatedPlaylists).map((key) => (
                                        <li key={key}>{key}: {channelDetail.contentDetails.relatedPlaylists[key]}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
                <div className="channel__videos">
                    <h4>채널 동영상</h4>
                    <ul>
                        {channelVideo.map(video => (
                            <li key={video.id.videoId}>
                                <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
                                    <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                                    <p>{video.snippet.title}</p>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </Main>
    );
};

export default ChannelPage;
