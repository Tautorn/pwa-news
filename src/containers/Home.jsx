import React, { memo } from 'react'
import { useEffect, useState } from 'react'
import { Row, Col } from 'antd'
import Economy from './components/Economy'
import World from './components/World'
import Technology from './components/Technology'
import Api from '../api'

function Home() {
  const [news, setNews] = useState([])

  const handleNews = (articles) => {
    setNews({
      world: articles[0]?.value.value,
      economy: articles[1]?.value.value,
      technology: articles[2]?.value.value
    })
  }

  useEffect(() => {
    Promise.allSettled([
      Api.getNews('world', 3),
      Api.getNews('economy', 8),
      Api.getNews('technology', 12)
    ])
      .then(handleNews)
  }, [])

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24} md={16}>
          <h2>World</h2>
          <World values={news?.world} />
        </Col>
        <Col span={24} md={8}>
          <h2>Economy</h2>
          <Economy values={news?.economy} />
        </Col>
      </Row>
      <hr />
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <h2>Technology</h2>
          <Technology values={news?.technology} />
        </Col>
      </Row>
    </div>
  )
}

export default memo(Home)
