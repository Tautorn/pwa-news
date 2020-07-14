import React, { memo, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Row, Col } from 'antd'
import Loading from '../components/Loading'
import Api from '../api'
import Share from './components/Share'
import { createMarkup } from '../utils'
import './style.css'

function Post() {
  const { id, subject } = useParams()
  const [post, setPost] = useState({})
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const renderImg = ({ image, description }) => <img src={image.url} alt={description} width="75%" />
  
  useEffect(() => {
    const handleNews = (data) => {
      setNews(data)
      
      const post = data?.value?.find(article => article.id === id)
      setLoading(false)
      setPost(post)
    }

    setLoading(true)
    
    Api.getNews(subject, 12)
      .then(handleNews)
  }, [id, subject])

  const renderDescription = (description) => <p dangerouslySetInnerHTML={createMarkup(description)} />

  const openPost = (id) => {
    history.push(`/post/${subject}/${id}`)
  }

  const renderPost = (post, index) => {
    const { title, image, description, id } = post
    return (
      <Col span={12} key={`post-${index}`}>
        <article onClick={() => openPost(id)}>
          <p>
            <strong dangerouslySetInnerHTML={createMarkup(title)} />
          </p>
         {image?.url ? renderImg({ image, description }) : renderDescription(description)}
        </article>
      </Col>
    )
  }

  if (loading) return <Loading />

  if (!post?.id) return

  const { title, image, description, body, datePublished } = post

  return (
    <>
      <Share />
      <Row gutter={[16, 16]}>
        <Col span={24} md={16}>
          <p>{datePublished}</p>
          <h1 dangerouslySetInnerHTML={createMarkup(title)}></h1>
          {renderImg({ image, description })}
          <p className="text" dangerouslySetInnerHTML={createMarkup(description)} />
          <hr />
          <p className="text" dangerouslySetInnerHTML={createMarkup(body)} />
        </Col>
        <Col span={24} md={8}>
          <Row gutter={[16, 16]}>
            {news?.value?.map(renderPost)}
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default memo(Post)
