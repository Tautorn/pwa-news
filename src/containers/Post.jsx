import React, { memo, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col } from 'antd'
import Api from '../api'
import { createMarkup } from '../utils'
import { useHistory } from 'react-router-dom'
import './style.css'

function Post() {
  const { id, subject } = useParams()
  const [post, setPost] = useState({})
  const [news, setNews] = useState([])
  const history = useHistory()
  console.log("news", news)
  
  const renderImg = ({ image, description }) => <img src={image.url} alt={description} width="75%" />
  
  useEffect(() => {
    const handleNews = (data) => {
      setNews(data)
      
      const post = data?.value?.find(article => article.id === id)
      setPost(post)
    }
    
    Api.getNews(subject, 12)
      .then(handleNews)
  }, [id, subject])

  const { title, image, description, body, datePublished } = post

  const renderDescription = (description) => <p dangerouslySetInnerHTML={createMarkup(description)} />

  const openPost = (id) => {
    history.push(`/post/${subject}/${id}`)
  }

  const renderPost = (post, index) => {
    const { title, image, description, id } = post
    return (
      <Col span={24} key={`post-${index}`}>
        <article onClick={() => openPost(id)}>
          <p>
            <strong dangerouslySetInnerHTML={createMarkup(title)} />
          </p>
         {image?.url ? renderImg({ image, description }) : renderDescription(description)}
        </article>
      </Col>
    )
  }

  if (!post.id) return

  return (
    <Row gutter={[16, 16]}>
      <Col span={24} md={18}>
        <p>{datePublished}</p>
        <h1 dangerouslySetInnerHTML={createMarkup(title)}></h1>
        {renderImg({ image, description })}
        <p className="text" dangerouslySetInnerHTML={createMarkup(description)} />
        <hr />
        <p className="text" dangerouslySetInnerHTML={createMarkup(body)} />
      </Col>
      <Col span={24} md={6}>
        {news?.value?.map(renderPost)}
      </Col>
    </Row>
  )
}

export default memo(Post)
