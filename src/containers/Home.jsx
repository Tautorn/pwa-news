import React, { memo } from 'react'
import { useEffect, useState } from 'react'
import { Row, Col } from 'antd'
import Api from '../api'

function Home() {
  const [news, setNews] = useState([])

  useEffect(() => {
    Promise.allSettled([
      Api.getNews('world', 12),
      Api.getNews('economy', 6),
      Api.getNews('technology', 4)
    ])
      .then(articles => {
        console.log(articles)
        setNews({
          world: articles[0]?.value?.articles,
          economy: articles[1]?.value?.articles,
          technology: articles[2]?.value?.articles
        })
      })
  }, [])

  const renderPost = (post, index) => {
    const { author, title } = post
    return (
        <Col span={6} key={`post-${index}`}>
          <div>
            <h3>{title}</h3>
            <span>Author {author}</span>
          </div>
        </Col>
    )
  }

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={16}>
          <Row gutter={[16, 16]}>
            {news?.world?.map(renderPost)}
          </Row>
        </Col>
        <Col span={8}>

        </Col>
      </Row>
      home
    </div>
  )
}

export default memo(Home)
