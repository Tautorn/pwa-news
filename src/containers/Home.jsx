import React, { memo } from 'react'
import { useEffect, useState } from 'react'
import { Row, Col } from 'antd'
import Economy from './components/Economy'
import World from './components/World'
import Technology from './components/Technology'
import Api from '../api'

function Home() {
  const [news, setNews] = useState([])

  useEffect(() => {
    Promise.allSettled([
      Api.getNews('world', 8),
      Api.getNews('economy', 6),
      Api.getNews('technology', 12)
    ])
      .then(articles => {
        console.log(articles)
        setNews({
          world: articles[0]?.value.value,
          economy: articles[1]?.value.value,
          technology: articles[2]?.value.value
        })
      })
  }, [])

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={16}>
          <World values={news?.world} />
        </Col>
        <Col span={8}>
          <Economy values={news?.economy} />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Technology values={news?.technology} />
        </Col>
      </Row>
    </div>
  )
}

export default memo(Home)
