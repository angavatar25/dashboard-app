const Button = ({ text, type , onClickEvent }) => {
  const buttonColour = () => {
    if (type === 'primary') return 'bg-blue-500';

    if (type === 'danger') return 'bg-red-500';

    return 'bg-gray-400';
  }
  return (
    <>
      <button
        onClick={onClickEvent}
        className={`${buttonColour()} text-white w-full leading-10 rounded-md`}
      >
        {text}
      </button>
    </>
  )
}

export default Button;