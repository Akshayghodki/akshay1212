
import axios from "axios";
import { getNowPlayingMovies } from "../redux/movieSlice";
import { Now_Playing_Movie, options } from "../utils/constant";
import {useDispatch} from "react-redux";

const useNowPlayingMovies = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(Now_Playing_Movie, options);
        dispatch(getNowPlayingMovies(res.data.results));
    } catch (error) {
        console.log(error);
    }
}
export default useNowPlayingMovies;
















// import axios from "axios";
// import { getNowPlayingMovies } from "../redux/movieSlice";
// import { Now_Playing_Movie, options } from "../utils/constant";
// import { useDispatch } from "react-redux";

// const useNowPlayingMovies = async () => {
//     const dispatch = useDispatch();
//     try {
//         const res = await axios.get(Now_Playing_Movie, options);
//         dispatch(getNowPlayingMovies(res.data.results));
//     } catch (error) {
//         if (error.isAxiosError && error.response === undefined) {
//             // Network error occurred
//             console.log("Network error occurred. Please check your internet connection.");
//             // You may want to display an error message to the user
//         } else {
//             // Other types of errors
//             console.log("An error occurred:", error.message);
//         }
//     }
// };

// export default useNowPlayingMovies;







// const nowPlayingMovies = async() =>{
//     try {
//       const res = await axios.get(Now_Playing_Movie,options);
//       console.log(res.data.results);
//       dispatch(getNowPlayingMovies(res.data.results))
//     } catch (error) {
//         console.log(error);
//     }
//   }