import React, {useState, useEffect} from 'react'
import PostList from "./components/PostList"
import PostForm from "./components/PostForm"
import PostFilter from './components/PostFilter'
import MyModal from './components/UI/modal/MyModal'
import MyButton from './components/UI/button/MyButton'
import { usePosts } from './hooks/usePosts'
import PostServise from './API/PostServise'
import Loader from './components/UI/loader/Loader'
import "./styles/styles.css"
import { useFetch } from './hooks/useFetch'
import { getTotalPages } from './utils/pages'
import { usePagination } from './hooks/usePagination'


function App(){
  const [posts, setPosts] = useState([])
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState({sort: "", quary: ""})
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchPost, postLoading, postError] = useFetch(async () => {
    const response = await PostServise.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers["x-total-count"]
    setTotalPages(getTotalPages(totalCount, limit))    
  })

  let pagesArray = usePagination(totalPages);
  const searchedAndSortedPosts = usePosts(posts, filter.sort, filter.quary)

  useEffect(() => {
    fetchPost()
  }, [page])

  function createPost(form){
    setPosts([...posts, {id: Date.now(), ...form}])
    form.name = ""
    form.body = ""
    setVisible(false)
  }

  function deletePost(post){
    setPosts(posts.filter((item) => {
      return post.id !== item.id
    }))
  }
  function changePage(page){
    setPage(page)
  }

  return(
    <div className='App'>
        <MyButton style={{marginTop: "20px"}} onClick={() => setVisible(true)}>Создать пост</MyButton>
        <hr style={{margin: "20px 20px 20px 0", width: "100%"}}></hr>
        <MyModal visible={visible} setVisible={setVisible}>
          <PostForm create={createPost}/>
        </MyModal>
        <PostFilter filter={filter} setFilter={setFilter}/>
        {postError && <h1>Произошла ошибка ${postError}</h1>}
        {postLoading 
        ? 
        <div style={{display: "flex", justifyContent: "center"}}><Loader/></div> 
        : 
        <PostList deletePost={deletePost} posts={searchedAndSortedPosts}></PostList>}

        <div className="page__wrapper">
          {pagesArray.map((p) => {
            return <span 
              key={p}
              onClick={() => changePage(p)}
              className={page === p ? 'page__current page' : 'page'}>
                {p}
            </span>
          })}
        </div>
        
    </div>
  )
}

export default App;