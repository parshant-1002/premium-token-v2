import { Children } from 'react'

export const Each = ({ render, of }) => (Children.toArray(of?.length && of?.map((item, index) => render(item, index))))  