import React from "react"
import { Breadcrumb } from "antd"
import { useLocation, Link } from "react-router-dom"

const BreadCrumb = () => {
  const location = useLocation()
  const breadCrumbView = () => {
    const { pathname } = location
    const pathnames = pathname.split("/").filter((item) => item)
    const capatilize = (s) => s.charAt(0).toUpperCase() + s.slice(1)
    return (
      <>
        <Breadcrumb separator=">">
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`
            const isLast = index === pathnames.length - 1
            return isLast ? (
              <Breadcrumb.Item key={index} className="breadcrumb-style-1">
                {capatilize(name)}
              </Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item key={index}>
                <Link to={`${routeTo}`} className="breadcrumb-style-2">
                  {capatilize(name)}
                </Link>
              </Breadcrumb.Item>
            )
          })}
        </Breadcrumb>
      </>
    )
  }

  return <>{breadCrumbView()}</>
}

export default BreadCrumb
