import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import { useParams } from 'react-router-dom'
import Loading from '../components/section/Loading';
import VideoView from '../components/video/VideoView';

const SearchPage = () => {
    const { searchID } = useParams();
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nextPageToken, setNextPageToken] = useState(null);

    useEffect(() => {
        const fetchVideo = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${searchID}&key=${process.env.REACT_APP_YOUTUBE_API_KEY} `)
                const data = await response.json();
                setVideos(data.items);
                setNextPageToken(data.nextPageToken);

                // 최소 로딩 소스 1초 유지
                setTimeout(() => {
                    setLoading(false);
                }, 1000);

            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        fetchVideo();
    }, [searchID])

    const loadMoreVideos = async () => {
        try {
            const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${searchID}&pageToken=${nextPageToken}&key=${process.env.REACT_APP_YOUTUBE_API_KEY} `)
            const data = await response.json();
            setVideos(prevVideos => [...prevVideos, ...data.items]);
            setNextPageToken(data.nextPageToken);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Main
            title={`Search: ${searchID}`}
            decription={`Search: ${searchID}`}
        >
            {loading ? (
                <Loading />
            ) : (
                <section id='searchPage' className='fade-in'>
                    <h2><em>{searchID}</em> 를 검색한 결과입니다.</h2>
                    <VideoView videos={videos} />
                    <div className='search__more'>
                        {nextPageToken && (
                            <button onClick={loadMoreVideos}>더보기</button>
                        )}
                    </div>
                </section>
            )}
        </Main>
    )
}

export default SearchPage