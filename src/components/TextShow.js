import React, { useEffect, useState } from 'react'

const TextShow = () => {
  const [files, setFiles] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const filesHandler = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/text')
        if (!response.ok) {
          throw new Error('Failed to fetch files')
        }
        const data = await response.json()
        console.log(data)
        setFiles(data)
      } catch (error) {
        console.error('Error fetching files:', error.message)
      } finally {
        setLoading(false)
      }
    }

    filesHandler()
  }, [])

  return (
    <div className='border-dashed border-4 border-slate-700 rounded-lg py-8 px-16'>
      {' '}
      {loading ? (
        <p>loading.. </p>
      ) : (
        <ul>
          {files.map((file) => (
            <li key={file.text}>{file.text}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TextShow
