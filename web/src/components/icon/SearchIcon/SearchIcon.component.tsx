import { FC } from 'react'

interface IPassingProps {
  fillColor?: string
  big?: boolean
}

export const SearchIcon: FC<IPassingProps> = ({
  fillColor = '#e0e6ff',
  big = false
}) => (
  <div className={`absolute ${big ? 'right-0' : 'right-10'} cursor-pointer`}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={
        big
          ? `h-8 w-8`
          : `h-5 w-5` + 'hover:bg-indigo-100 p-2 sm:p-0 rounded-md'
      }
      viewBox="0 0 20 20"
      fill={fillColor}
    >
      <path
        fillRule="evenodd"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
        clipRule="evenodd"
      />
    </svg>
  </div>
)
