// Write your code here.
import './index.css'

const BannerCard = props => {
  const {userDetails} = props
  const {headerText, description, className} = userDetails
  return (
    <li className={className}>
      <div>
        <div>
          <h1>{headerText}</h1>
        </div>
        <div>
          <p>{description}</p>
        </div>
        <div>
          <button>show more</button>
        </div>
      </div>
    </li>
  )
}

export default BannerCard
