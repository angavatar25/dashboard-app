const Input = ({ placeholder, type, withIcon, value, onChange }) => {
  return (
    <>
      <div className="border-gray-300 leading-10">
        <input
          className="outline-none border h-fit pl-2 rounded-lg text-black"
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