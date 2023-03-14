import LoadSvgIcon from "../../utils/LoadSvgIcon"

const Nullpage = ({ title }) => {
    return (
        <div className='h-full flex flex-col justify-center items-center'>
            <LoadSvgIcon name="empty" size={45} color="var(--color-grayLight)" />
            <p className='text-sm text-grayLight mt-4'>{title ? title : 'موردی برای نمایش وجود ندارد'}</p>
        </div>
    )
}

export default Nullpage