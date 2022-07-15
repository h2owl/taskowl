import styles from './pageLoading.module.css'
const LoadingComponent = () => {
    return (
    <div className={`${styles.back} d-flex p-3 mx-auto flex-column`}>
        <div className={`spinner-border text-primary m-auto`} role="status">
        <span className="visually-hidden">Loading...</span>
        </div>
    </div>
    )
}
export default LoadingComponent