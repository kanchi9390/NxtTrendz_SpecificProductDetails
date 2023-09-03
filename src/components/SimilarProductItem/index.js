import './index.css'

const SimilarProductItem = props => {
  const {productItemDetails} = props
  const {imageUrl, title, brand, price, rating} = productItemDetails
  return (
    <li className="product-item">
      <img
        src={imageUrl}
        alt={`similar product ${title}`}
        className="thumbnail"
      />
      <p className="title">{title}</p>
      <p className="brand">by {brand}</p>
      <div className="product-details">
        <p className="price">Rs {price}/-</p>
        <div className="rating-container">
          <p className="rating">{rating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="star"
          />
        </div>
      </div>
    </li>
  )
}

export default SimilarProductItem
