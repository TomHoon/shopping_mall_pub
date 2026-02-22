import styles from '@/views/home/HomeView.module.css'
import Nav from '@/components/common/Nav'
import Header from '@/components/common/Header'

export default function HomeView() {
  return (
    <div>
      <div className={styles.commonLayoutContainer}>
        <Nav />
        <Header />
      </div>
    </div>
  )
}
