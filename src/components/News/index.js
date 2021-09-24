import {useEffect} from "react";
// import {PUBLIC_URL} from "../../utils/constants";
import {CircularProgress} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {getArticles} from "../../store/news/actions";
import {selectArticles, selectArticlesError, selectArticlesLoading} from "../../store/news/serctors";

export const News = () => {
    // const [articles, setArticles] = useState([]);
    // const [error, setError] = useState("");
    // const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const error = useSelector(selectArticlesError);
    const loading = useSelector(selectArticlesLoading);
    const articles = useSelector(selectArticles);

    const reload = () => {
       dispatch(getArticles());

    //     setLoading(true);
    //     fetch(PUBLIC_URL)
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error(`Request failed with status ${response.status}`);
    //             }
    //
    //             return response.json();
    //         })
    //         .then((result) => {
    //             setArticles(result);
    //             setError('');
    //         })
    //         .catch((e) => {
    //             console.log(e);
    //             setError(e.message);
    //         })
    //         .finally(() => {
    //             setLoading(false);
    //         });
    };

    useEffect(() => {
        reload();
    }, []);

    return (
        <div>
            <h2>News</h2>
            {error ? (
                <>
                    <h3>Error: {error}</h3>
                    <button onClick={reload}>Retry</button>
                </>
            ) : (
                articles.map((art) => (
                    <article key={art.id}>
                        <h4>
                            {art.title}
                        </h4>
                    </article>
                ))
            )}
            {loading && <CircularProgress/>}
        </div>
    );
};