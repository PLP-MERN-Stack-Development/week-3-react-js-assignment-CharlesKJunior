import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../components/card'
import Button from '../components/Button'

/**
 * API Data Page Component
 * @returns {JSX.Element} Page displaying data from JSONPlaceholder API
 */
const ApiDataPage = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 5

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(response.data)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }
    
    fetchPosts()
  }, [])

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  if (loading) return <Card className="text-center py-8">Loading...</Card>
  if (error) return <Card className="text-center py-8 text-red-500">Error: {error}</Card>

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-6">
        <h1 className="text-2xl font-bold mb-4 dark:text-white">API Data</h1>
        
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              setCurrentPage(1)
            }}
            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        
        <div className="space-y-4">
          {currentPosts.map(post => (
            <Card key={post.id} className="p-4">
              <h3 className="font-bold text-lg dark:text-white">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{post.body}</p>
            </Card>
          ))}
        </div>
        
        {filteredPosts.length > postsPerPage && (
          <div className="flex justify-center mt-6 space-x-2">
            <Button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              variant="secondary"
            >
              Previous
            </Button>
            <span className="px-4 py-2 dark:text-white">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              variant="secondary"
            >
              Next
            </Button>
          </div>
        )}
      </Card>
    </div>
  )
}

export default ApiDataPage