import React from 'react'
import Menu from '../Menu/Menu'
import Layout from '../layout/Layout'

const MenuPage = () => {
  return (
    <Layout>
    <div className="min-h-screen w-scren ">
    <h1 className="text-3xl font-bold font-serif text-center text-gray-900 ">Our Menu</h1>
    <Menu/>
</div>
</Layout>
  )
}

export default MenuPage