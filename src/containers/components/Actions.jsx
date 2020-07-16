import React, { memo } from 'react'
import ShareIcon from '../../images/share.svg'
import CopyIcon from '../../images/copy.svg'
import BookMarkIcon from '../../images/bookmark.svg'
import Api from '../../api'

const navigatorHasShare = navigator.share

const URL = 'https://covid19pwa.netlify.app/'

function Actions({ post, subject }) {
  const { id, title } = post

  const shareInfo = () => {
    navigator.share({
      title: `PWA News - Breaking News - ${subject}`,
      text: title,
      url: URL,
    })
  }

  const copyInfo = () => {
    navigator.clipboard.writeText(`${title} - *Learn more about in* ${URL}/${subject}/${id}`)
  }

  const renderAction = () => {

    const action = navigatorHasShare ? shareInfo : copyInfo

    const icon = navigatorHasShare ? ShareIcon : CopyIcon

    return <img alt="icon" src={icon} className="share-icon" onClick={action} />
  }

  const savePost = (event) => {
    event.preventDefault()
    caches.open('mysite-article-' + id).then(function(cache) {
      console.log("enter here", post)
      // cache.addAll(post)
      // cache.add('/post/world/3994548919426230329', '343434')
      Object.keys(post).map((url) => {
        return cache.add(url);
      });
    })
  }

  return (
    <div className="share">
      {renderAction()}
      <img
        style={{ paddingLeft: '30px' }}
        alt="icon"
        src={BookMarkIcon}
        className="share-icon"
        onClick={savePost}
      />
    </div>
  )
}

export default memo(Actions)
