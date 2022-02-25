import SkDetailEpisode from "@skeletons/SkDetailEpisode";
import Episode from "@sections/Episode";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

export default function DetailEpisode() {
  const [episodeTitle, setEpisodeTitle] = useState("");
  const [currentEps, setCurrentEps] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [prevEps, setPrevEps] = useState("");
  const [nextEps, setNextEps] = useState("");
  const [detailAnime, setDetailAnime] = useState("");
  const [downloadList, setDownloadList] = useState([]);
  const [streamList, setStreamList] = useState([]);
  const abortCtrl = new AbortController();
  const abort = abortCtrl.abort;
  const signal = abortCtrl.signal;
  const router = useRouter();
  const { id } = router.query;

  const getData = useCallback(async () => {
    try {
      setEpisodeTitle("");
      await fetch(`https://samehadaku-api.herokuapp.com/api/eps/${id}`, {
        signal,
      })
        .then((res) => res.json())
        .then((data) => {
          setEpisodeTitle(data.title);
          setCurrentEps(data.current_episode);
          setReleaseDate(data.release_date);
          setPrevEps(data.prev_eps);
          setNextEps(data.next_eps);
          setDetailAnime(data.all_eps);
          setDownloadList(data.download_list);
          setStreamList(data.stream_list);
        });
    } catch (e) {
      console.log(e.message);
    }
  }, [id, signal]);

  useEffect(() => {
    getData();
    return function cleanup() {
      abort();
    };
  }, [getData, id, abort]);

  return (
    <>
      {episodeTitle ? (
        <Episode
          title={episodeTitle}
          episode={currentEps}
          release={releaseDate}
          prevEps={prevEps}
          nextEps={nextEps}
          animeDetail={detailAnime}
          downloadList={downloadList}
          streamList={streamList}
        />
      ) : (
        <SkDetailEpisode />
      )}
    </>
  );
}
