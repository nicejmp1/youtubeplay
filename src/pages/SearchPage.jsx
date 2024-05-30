import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import { useParams } from 'react-router-dom'
import Loading from '../components/section/Loading';
import VideoView from '../components/video/VideoView';

const SearchPage = () => {
    const { searchID } = useParams();
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVideos = async () => {
            setLoading(true)
            try {
                const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&q=${searchID}&key=${process.env.REACT_APP_YOUTUBE2_API_KEY}`)
                const data = await response.json();
                setVideos(data.items);

                // 최소 로딩 소스 1초 유지 
                setTimeout(() => {
                    setLoading(false);
                }, 1000);

            } catch (error) {
                console.log(error)
                setLoading(false);
            }
        }
        fetchVideos();
    }, [searchID])
    return (
        <Main
            title={`PlayList Search : ${searchID}`}
            description={`플레이리스트 서치 페이지 입니다. - 검색 키워드 : ${searchID}`}
        >
            {loading ? (
                <Loading />
            ) : (
                <section id='searchPage' className='fade-in'>
                    <h2><em>{searchID}</em>를 검색한 결과입니다.</h2>
                    <VideoView videos={videos} />
                </section>)}
        </Main>
    )
}

export default SearchPage
