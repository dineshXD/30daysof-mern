query -> getting data from somewhere
mutation => changing some type of data

useQuery hook mainly takes two parameters queryKey which will uniquely identify the query second is queryFn which will actually run to fetch data

queryKey style
posts -> ["posts"],
posts/1 -> ["posts",post.id],
posts?authorId=1 ["posts",{authorId:1}],
posts/2/comments = ["posts",post.id,"comments"]
