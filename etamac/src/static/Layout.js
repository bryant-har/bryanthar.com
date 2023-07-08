import Header from './Header'
import styles from './static.module.css'
const layout = ((page) => (
  <div className={`${styles['layout-md']} ${styles["margin"]}`} >
    <Header />
    {page}
  </div>
))

export default layout
