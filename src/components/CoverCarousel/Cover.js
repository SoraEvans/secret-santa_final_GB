import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Div, CoverImg, Wrapper } from './style'

// eslint-disable-next-line react/prop-types
const Item = ({ item, alt, avatar }) => (
  <div>
    <Div avatar={avatar}>
      <CoverImg src={item} alt={alt} avatar={avatar} />
    </Div>
  </div>
)

const Cover = ({ img, fu, state, avatar }) => {
  const imgArr = img
  useEffect(() => {
    fu({
      ...state,
      cover: !avatar ? imgArr.at(-1).path : null
    })
  }, [])

  return (
    <Wrapper avatar={avatar}>
      {imgArr.map((item, i) => (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control, react/no-array-index-key
        <label key={i}>
          <input
            type="radio"
            name="test"
            value={item.path}
            onChange={event =>
              fu({
                ...state,
                cover: event.target.value
              })
            }
          />
          <Item item={item.path} alt={item.alt} avatar={avatar} />
        </label>
      ))}
    </Wrapper>
  )
}

Cover.defaultProps = {
  img: null,
  fu: null,
  state: null,
  avatar: false
}

Cover.propTypes = {
  img: PropTypes.array,
  fu: PropTypes.func,
  state: PropTypes.object,
  avatar: PropTypes.bool
}

export default Cover
