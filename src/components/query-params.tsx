'use client'

import { Fragment } from 'react'
import { useSearchParams } from 'next/navigation'

export default function QueryParamsTest() {
  const searchParams = useSearchParams()

  const params = []

  for (const [key, value] of searchParams.entries()) {
    params.push([key, value])
  }
  return (
    <div>
      <h2>query params test</h2>
      {params.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>key</th>
              <th>value</th>
            </tr>
          </thead>
          <tbody>
            {params.map(([key, value]) => (
              <Fragment key={key}>
                <tr>
                  <td>{key}</td>
                  <td>{value}</td>
                </tr>
              </Fragment>
            ))}
          </tbody>
        </table>
      ) : (
        <p>no params</p>
      )}
    </div>
  )
}
