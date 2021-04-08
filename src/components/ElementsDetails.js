import React from 'react'

const ElementsDetails = () => {
  return (
    <article className='detail-section'>
      <table className='table table-striped table-dark'>
        <thead>
          <tr>
            <th className='answer border border-0'>Elements</th>
          </tr>
        </thead>
        {/* <div className='table-body'> */}
        <tbody>
          <tr>
            <td className='question'>symbol</td>
            <td className='answer'></td>
          </tr>
          <tr>
            <td className='question'>atomic Number</td>
            <td className='answer'></td>
          </tr>
          <tr>
            <td className='question'>atomic mass</td>
            <td className='answer'></td>
          </tr>
          <tr>
            <td className='question'>discovered By</td>
            <td className='answer'></td>
          </tr>
          <tr>
            <td className='question'>named By</td>
            <td className='answer'></td>
          </tr>
          <tr>
            <td className='question'>group</td>
            <td className='answer'></td>
          </tr>
          <tr>
            <td className='question'>period</td>
            <td className='answer'></td>
          </tr>
          <tr>
            <td className='question'>density</td>
            <td className='answer'></td>
          </tr>
          <tr>
            <td className='question'>boiling point</td>
            <td className='answer'></td>
          </tr>
          <tr>
            <td className='question'>melting point</td>
            <td className='answer'></td>
          </tr>
          <tr>
            <td className='question'>shells</td>
            <td className='answer'></td>
          </tr>
          <tr>
            <td className='question'>electron configuration</td>
            <td className='answer'></td>
          </tr>
          <tr>
            <td className='question'>ionization energies</td>
            <td className='answer'></td>
          </tr>
          <tr>
            <td className='question'>phase</td>
            <td className='answer'></td>
          </tr>
          <tr>
            <td className='question'>category</td>
            <td className='answer'></td>
          </tr>
          <tr>
            <td className='question'>source</td>
            <td>
              <a
                href='index.html'
                target='_blank'
                rel='noreferrer'
                className='answer URL'
              >.</a>
            </td>
          </tr>
        </tbody>
        {/* </div> */}
      </table>
    </article>
  )
}

export default ElementsDetails
