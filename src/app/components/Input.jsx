const Input = ({ placeholder, type, widthFull, value, onChange }) => {
  return (
    <>
      <div className={`${widthFull && 'w-full'} border-gray-300 leading-10`}>
        <input
          className={`${widthFull && 'w-full'} outline-none border h-fit pl-2 rounded-lg text-black`}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  )
}

export default Input;