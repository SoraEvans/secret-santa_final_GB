import React from 'react'
import PropTypes from 'prop-types'
import { Div, CoverImg, Wrapper } from './style'

// eslint-disable-next-line react/prop-types
const Item = ({ item, alt }) => (
  <div>
    <Div>
      <CoverImg src={item} alt={alt} />
    </Div>
  </div>
)

const Cover = ({ img, fu, state }) => {
  const imgArr = img
  return (
    <Wrapper>
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
          <Item item={item.path} alt={item.alt} />
        </label>
      ))}
    </Wrapper>
  )
}

Cover.defaultProps = {
  img: null,
  fu: null,
  state: null
}

Cover.propTypes = {
  img: PropTypes.array,
  fu: PropTypes.func,
  state: PropTypes.object
}

export default Cover
