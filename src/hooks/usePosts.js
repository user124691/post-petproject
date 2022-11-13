import { useMemo } from 'react'

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if(sort){
          return [...posts.sort((a, b) => {
            return a[sort].localeCompare(b[sort])
          })]
        }
        else{
          return posts
        }
    }, [posts, sort])
    return sortedPosts
}

export const usePosts = (posts, sort, quary) => {
    const sortedPosts = useSortedPosts(posts, sort)
    const searchedAndSortedPosts = useMemo(() => {
        if(quary){
          return [...sortedPosts.filter((item) => {
            return item.body.includes(quary.toLowerCase())
          })]
        }
        else{
          return sortedPosts
        }
    }, [sortedPosts, quary])

    return searchedAndSortedPosts
}