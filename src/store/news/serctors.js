import {STATUSES} from "../../utils/constants";

export const selectArticlesLoading = (state) => state.news.request.status === STATUSES.REQUEST;
export const selectArticles = (state) => state.news.list;
export const selectArticlesError = (state) => state.news.request.error;
