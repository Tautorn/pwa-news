import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

export const openPost = (id) => history.push(`/post/${id}`)

export const createMarkup = (html) => ({ __html: html })