import Image from 'next/image'

const Modal = ({ open, setOpen, imageUrl = '' }) => {
  return (
    <div
      className={`${
        open && imageUrl !== '' ? 'visible' : 'invisible'
      } fixed inset-0 z-50 flex h-full min-h-screen w-full items-center justify-center overflow-hidden`}
    >
      <div
        onClick={() => setOpen(false)}
        className={`${
          open ? 'opacity-100 duration-200' : 'opacity-0 delay-200 duration-300'
        } modal-overlay absolute inset-0 h-full w-full`}
      ></div>
      <div
        className={`${
          open
            ? 'scale-100 opacity-100 duration-200'
            : 'scale-90 opacity-0 delay-200 duration-300'
        } relative h-[450px] w-[650px] overflow-hidden rounded-[16px]`}
      >
        <img
          src={imageUrl ?? '/'}
          layout="fill"
          alt="Modal images"
          className="scale-105 rounded-[16px] object-cover"
        />
      </div>
    </div>
  )
}

export default Modal
