
export function ButtonIcon({icon: Icon}) {
  return (
    <button className={`
      w-[30px]
      h-[30px]
      flex
      items-center
      justify-center
      text-white
      bg-primary-400
      rounded-full 
      hover:bg-primary-600
    `}
    >
      <Icon />
    </button>
  );
}
